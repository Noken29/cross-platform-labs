import { Injectable } from '@angular/core';
import {TabFunctionService} from "./tab-function.service";

@Injectable({
  providedIn: 'root'
})
export class RecursiveCalculateFunctionService {

  constructor(private tabulateService : TabFunctionService) { }

  static recursiveSum(x : number, xNext : number, a : number, y : number, i : number, n : number) : number {
    if (i === n)
      return y
    return this.recursiveSum(x, xNext * x, a * i, y + xNext / a, i + 1, n)
  }

  calculate(x : number, n : number = 12) : number {
    return RecursiveCalculateFunctionService.recursiveSum(x, x, 1, 1, 2, n)
  }

  tabulateFunction(a : number, b : number) {
    return this.tabulateService.tabulateFunction(a, b, this.calculate)
  }
}
