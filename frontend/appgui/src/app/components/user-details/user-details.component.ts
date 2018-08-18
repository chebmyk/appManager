import {Component, OnInit} from '@angular/core';
import {Securiy, User} from "../../classes/user";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Common} from "../../services/utils/Common";
import {SharedData} from "../../services/common/sharedData";
import {AuthenticateService} from "../../services/auth/authenticate.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  newUser: boolean;
  roles = Common.user_roles;
  canCreate: boolean;
  canUpdate: boolean;
  canReset: boolean;

  public userForm: FormGroup;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private authService: AuthenticateService,
              private router: Router,
              private location: Location,
              private sharedData: SharedData,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getUser();
    this.canCreate = this.authService.hasAccess('CREATE', 'User');
    this.canUpdate = this.authService.hasAccess('UPDATE', 'User');
    this.canReset = this.authService.hasAccess('UPDATE', 'Security');
    let readOnly: boolean = !(this.canCreate || this.canUpdate);
    this.userForm = this.formBuilder.group({
      id: [{value: '', disabled : readOnly}],
      name: [{value: '', disabled : readOnly}, [<any>Validators.required, <any>Validators.maxLength(200), <any>Validators.minLength(2)]],
      email: [{value: '', disabled : readOnly}, [Validators.required, Validators.email, <any>Validators.maxLength(200), <any>Validators.minLength(5)]],
      role: [{value: '', disabled : readOnly}, [Validators.required]]
    });
  }

  emailHelp() {
    if (this.userForm.controls.id.value === '' && this.userForm.controls.email.value === '') {
      if (this.userForm.controls.name) {
        this.userForm.controls.email.setValue(this.userForm.controls.name.value + '@');
      }
    }
  }

  getUser(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let userId = params.get('id');
      if (userId == 'add') {
        this.user = new User();
        this.newUser = true;
      } else {
        this.newUser = false;
        this.userService.getUser(+userId)
          .subscribe(user => {
            this.user = user;
            this.setUserFormGroup(this.user);
          });
      }
    });
  }

  setUserFormGroup(user: User): void {

    if(user.id != null){
      this.newUser = false;
      if(this.userForm.controls.hasOwnProperty("passwords")){
        this.userForm.removeControl("passwords");
      }
    }

    (<FormGroup>this.userForm).setValue({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }, {onlySelf: true});
  }

  backToUserList(): void {
    this.location.back();
  }

  save(): void {
    this.userService.messageService.clear();
    if (!this.userForm.invalid) {
      let user = this.userForm.value;
      this.user.role = user.role;
      this.user.name = user.name;
      this.user.email = user.email;

      if (this.user.id == null) {
        let security = new Securiy();
        security.user = this.user;
        security.password = user.passwords.password;

        this.userService.add(security).subscribe(
          usr => {
            this.user = usr;
            this.setUserFormGroup(this.user);
            this.userService.messageService.success(`User name [${this.user.name}] successfully created`)
          }, () => {});
      } else {
        this.userService.update(this.user).subscribe(
          user => {
            this.user = user;
            this.setUserFormGroup(this.user);
            this.userService.messageService.success(`User with name [${user.name}] successfully updated`)
          },
          () => {});
      }
    } else {
      this.userService.messageService.warning(`Please fill required fields`)
    }
  }

  goToResetPassword() {
    this.sharedData.updatedUser = this.user;
    this.router.navigate([`/users/${this.user.id}/password`]);
  }
}
