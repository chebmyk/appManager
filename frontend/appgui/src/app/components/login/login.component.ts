import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticateService} from "../../services/auth/authenticate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  credentials = {email: '', password: ''};
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthenticateService) { }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.messageService.clear();
      this.credentials = this.loginForm.value;
      this.authService.authenticate(this.credentials,() =>  this.router.navigateByUrl("/apps")).subscribe(
        () => {},
        () => {this.authService.messageService.error('Login failed');}
      );
    }
  }
}
