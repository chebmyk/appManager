import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {Securiy} from "../../classes/user";
import {SharedData} from "../../services/common/sharedData";
import {AuthenticateService} from "../../services/auth/authenticate.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  private modifiedCredentials: Securiy = new Securiy();
  canCreate: boolean;
  canUpdate: boolean;

  public changePasswordForm = this.formBuilder.group({
    user: ['', [Validators.required]],
    currentPassword: ['', [Validators.required]]
  });

  constructor(private userService: UserService,
              private authService: AuthenticateService,
              private formBuilder: FormBuilder,
              private sharedData: SharedData) {}

  ngOnInit() {
    this.changePasswordForm.controls.user.setValue( this.sharedData.updatedUser);
    this.modifiedCredentials.user = this.changePasswordForm.controls.user.value;
    this.canCreate = this.authService.hasAccess('CREATE', 'Security');
    this.canUpdate = this.authService.hasAccess('UPDATE', 'Security');
  }

  savePassword(): void {
    this.userService.messageService.clear();

    if (!this.changePasswordForm.invalid) {
      let formValues = this.changePasswordForm.value;
      this.modifiedCredentials.user = formValues.user;
      this.modifiedCredentials.password = formValues.passwords.password;

     let currentCredentials = new Securiy();
     currentCredentials.user = this.authService.currentUser;
     currentCredentials.password = formValues.currentPassword;
     this.userService.checkPassword(currentCredentials).subscribe(
        () => {
          this.userService.resetPassword(this.modifiedCredentials).subscribe(
            () => {this.userService.messageService.success(`Password [${this.modifiedCredentials.user.email}] successfully updated`)},
            () => {});
        },
        () => {this.authService.messageService.error('Login failed: current User password is wrong');}
      );
    } else {
      this.userService.messageService.warning(`Input data is not valid`)
    }
  }
}
