import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {
    ///^[^\s@]{3,}@(gmail|abv)\.(bg|com)$/

    const domainStrings = domains.join('|');
    const regexp = RegExp(`[^@]{3,}@(gmail|abv)\.(${domainStrings})$`);
    return (control) => {
        return control.value === '' || regexp.test(control.value) ? null : {emailValidator: true};
    }
}