import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  calcResult : number = 0

  calculate(first : any, second : any) {
    let a = parseInt(first)
    let b = parseInt(second)
    let res = 1
    for (let i = a; i <= b; i++) {
      res *= (i % 7 == 0 && i < 30) ? i : 1
    }
    this.calcResult = res
  }
}
