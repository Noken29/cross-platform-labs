import {AbstractControl, ValidatorFn} from "@angular/forms";
import {MagazineFormValidatorService} from "../service/magazine-form-validator.service";

let magazineFormValidator = new MagazineFormValidatorService();

export function ValidatorDate(control : AbstractControl) {
  if (!magazineFormValidator.validateDate(control.value))
    return {invalidDate : true}
  return null
}

export function ValidatorPagesNumber(control : AbstractControl) {
  if (!magazineFormValidator.validatePagesNumber(control.value))
    return {invalidPagesNumber : true}
  return null
}

export function ValidatorNumber(control : AbstractControl) {
  if (!magazineFormValidator.validateNumber(control.value))
    return {invalidNumber : true}
  return null
}
