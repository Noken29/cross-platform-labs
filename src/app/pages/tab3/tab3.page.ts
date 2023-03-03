import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  a : number[][] = []
  sum : number = 0

  drawMatrixAndCalcSum(nNumber : any) {
    let n = parseInt(nNumber)
    let temp = 0
    for (let i = 0; i < n; i++) {
      this.a.push([])
      for (let j = 0; j < n; j++) {
        this.a[i][j] = Math.random()
        if (i === j) temp += this.a[i][j]
      }
    }
    this.sum = temp
  }

  getColor(i : number, j : number) {
    return i === j ? 'yellow' : ''
  }

}
