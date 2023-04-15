import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MagazineFormValidatorService {

  constructor() { }

  validateDate(dateString : string) : boolean {
    try {
      let numbers = dateString.split('-').map(e => Number(e))
      numbers[1] -= 1
      let date = new Date(numbers[2], numbers[1], numbers[0])
      if (date.getDate() !== numbers[0] || date.getMonth() !== numbers[1] || date.getFullYear() !== numbers[2])
        return false
      if (date.getTime() > Date.now())
        return false
    } catch (e) {
      return false
    }
    return true
  }

  validatePagesNumber(pageNumber : number) : boolean {
    return pageNumber > 0 && pageNumber <= 40
  }

  validateNumber(number : string) : boolean {
    return number.startsWith('#') && ![undefined, NaN].includes(parseInt(number.substring(1)))
  }
}
