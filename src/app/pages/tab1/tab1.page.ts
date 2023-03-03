import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  calcResult : number = 0

  calculate(first : any, second : any, third : any) {
    let a  = parseFloat(first)
    let b  = parseFloat(second)
    let c  = parseFloat(third)
    this.calcResult = a % 5 === 0 && b % 5 === 0 && c % 5 === 0 ? a + b + c : (a + b + c) ** 3;
  }


}
