import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from "@angular/forms";
import {ValidationService} from "../../../services/validation/ValidationService";
import {FormErrors} from "../../../services/utils/Common";

@Component({
  selector: 'field-validation',
  templateUrl: './field-validation.component.html',
  styleUrls: ['./field-validation.component.css']
})
export class FieldValidationComponent implements OnInit {

  validationErrors: FormErrors[];

  @Input() control: AbstractControl;

  constructor(private validationService: ValidationService) { }

  ngOnInit() {
  }

  getValidationErrors() {
    this.validationErrors = this.validationService.validateControl(this.control);
  }

}
