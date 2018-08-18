import {Component, OnInit} from '@angular/core';
import {Application} from "../../classes/application";
import {ApplicationService} from "../../services/application/application.service";
import {Location} from "@angular/common";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Common} from "../../services/utils/Common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticateService} from "../../services/auth/authenticate.service";

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {

  app: Application;
  app_types = Common.app_types;
  app_ContentTypes = Common.content_types;
  canCreate: boolean;
  canUpdate: boolean;
  readOnly: boolean;


  public appForm: FormGroup;

  constructor(private applicationService: ApplicationService,
              private authService: AuthenticateService,
              private route: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.canCreate = this.authService.hasAccess('CREATE', 'App');
    this.canUpdate = this.authService.hasAccess('UPDATE', 'App');
    this.readOnly = !(this.canCreate || this.canUpdate);
    this.appForm = this.formBuilder.group({
      id: [{value: '', disabled: this.readOnly}],
      name: [{value: '', disabled: this.readOnly}, [<any>Validators.required, <any>Validators.maxLength(200)]],
      type: [{value: '', disabled: this.readOnly}, [Validators.required]],
      content_types: [{value: '', disabled: this.readOnly}, [Validators.required]],
      user: this.formBuilder.group({
        id: [''],
        name: ['', [<any>Validators.required, <any>Validators.maxLength(200)]],
        email: ['', [Validators.required, Validators.email]],
        role: ['', [Validators.required]]
      })
    });
    this.getApp();
  }

  getApp() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id == 'add') {
        this.app = new Application();
        this.appForm.controls.user.setValue(this.authService.currentUser);
      } else {
        this.applicationService.getApp(+id)
          .subscribe(
            app => {
              this.app = app;
              this.setAppFormGroup(this.app);
            }
          );
      }
    });
  }

  setAppFormGroup(app: Application): void {
    (<FormGroup>this.appForm).setValue({
      id: app.id,
      name: app.name,
      type: app.type,
      content_types: app.contentTypes,
      user: app.user
    }, {onlySelf: true});
  }

  backToAppList(): void {
    this.location.back();
  }

  save(): void {
    this.applicationService.messageService.clear();
    if (this.appForm.valid) {
      let app = this.appForm.value;
      this.app.type = app.type;
      this.app.name = app.name;
      this.app.contentTypes = app.content_types;
      this.app.user = app.user;
      if (this.app.id == null) {
        this.applicationService.add(this.app).subscribe(app => {
            this.app = app;
            this.setAppFormGroup(app);
            this.applicationService.messageService.success(`Application with name [${app.name}] was successfully created`)
          },
          () => {
          }
        );
      } else {
        this.applicationService.update(this.app).subscribe(app =>{
            this.app = app;
            this.applicationService.messageService.success(`Application with name [${app.name}] was successfully updated`)},
          () => {
          }
        );
      }
    } else {
      this.applicationService.messageService.warning(`Please fill required fields`)
    }
  }

}
