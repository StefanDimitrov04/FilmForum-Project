import { FormGroup, ValidatorFn } from "@angular/forms";


function passwordValidator(passwordControl: string, repeatPasswordControl: string): ValidatorFn {

   return (control) => {
    const groupPass = control as FormGroup;
    const passGroup = groupPass.get(passwordControl);
    const rePassGroup = groupPass.get(repeatPasswordControl);

    return passGroup?.value === rePassGroup?.value ? null : {passwordValidator: true};
   }
}