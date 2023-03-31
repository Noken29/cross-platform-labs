import { Injectable } from '@angular/core';
import {TabFunctionService} from "./tab-function.service";

@Injectable({
  providedIn: 'root'
})
export class RowCalculateFunctionService {

  constructor(private tabulateService : TabFunctionService) { }

  calculate(x : number, n = 50) {
    let y = 1
    let temp = 1
    for (let i = 1; i <= n; i++) {
      temp *= x / i
      y += temp
    }
    return y
  }

  tabulateFunction(a : number, b : number) {
    return this.tabulateService.tabulateFunction(a, b, this.calculate)
  }
}
