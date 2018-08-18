import {Injectable} from "@angular/core";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {FormErrors} from "../utils/Common";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ValidationService {

  private getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let messages = {
      'required': 'Field is required',
      'email': 'This email address is invalid',
      'maxlength': `Max length  length ${validatorValue.requiredLength}`,
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
      'min': `Min value limit ${validatorValue.requiredLength}`,
      'max': `Max value exceeded ${validatorValue.requiredLength}`
    };

    if (messages[validatorName]) {
      return messages[validatorName];
    }
    return validatorValue;
  }

  public validateForm(form: FormGroup): FormErrors[] {
    let formErrors: FormErrors[] = [];
    Object.values(form.controls).forEach(control => {
      formErrors = formErrors.concat(this.validateControl(control));
    });
    return formErrors;
  }

  private getName(control: AbstractControl): string | null {
    let group = <FormGroup>control.parent;
    if (!group) {
      return null;
    }
    let name: string;
    Object.keys(group.controls).forEach(key => {
      let childControl = group.get(key);
      if (childControl !== control) {
        return;
      }
      name = key;
    });
    return name;
  }

  public validateControl(control: AbstractControl): FormErrors[] {
    let formErrors: FormErrors[] = [];
    if (control.invalid) {
      let fieldName = this.getName(control);
      for (let error in control.errors) {
        if (control.errors.hasOwnProperty(error) && control.touched) {
          formErrors.push({field: fieldName, message: this.getValidatorErrorMessage(error, control.errors[error])});
        }
      }
    }
    return formErrors;
  }
}
