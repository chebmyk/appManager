import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.css']
})
export class PasswordsComponent implements OnInit {

  @Input() passForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    let passControl: FormGroup;
         passControl = this.formBuilder.group({
           password: ['', [Validators.required, Validators.minLength(3)]],
           confirmPassword: ['', [Validators.required, Validators.minLength(3)]]
          },{validator: passwordMatchValidator, updateOn: 'blur' });

    function passwordMatchValidator(g: FormGroup) {
      if( g.get('password').value != g.get('confirmPassword').value){
        return g.get('confirmPassword').setErrors({mismatch: "Entered passwords are not the same"}) ;
      }
    }
    this.passForm.addControl("passwords",passControl);
  }
}
