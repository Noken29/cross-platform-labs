import { Component, OnInit } from '@angular/core';
import {TabFunctionService} from "../../service/tab-function.service";
import {RowCalculateFunctionService} from "../../service/row-calculate-function.service";
import {RecursiveCalculateFunctionService} from "../../service/recursive-calculate-function.service";

@Component({
  selector: 'app-servicepage',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss'],
})
export class ServicePage implements OnInit {

  values : {x: string, y1: string, y2: string, y3: string}[] = []

  constructor(private tabFunctionService: TabFunctionService,
              private rowCalculateFunctionService : RowCalculateFunctionService,
              private recursiveCalculateFunctionService : RecursiveCalculateFunctionService) { }

  calculate(a : any, b : any) {
    let from = parseInt(a), to =  parseInt(b)
    let values = this.tabFunctionService.tabulateFunction(from, to)
    let rowValues = this.rowCalculateFunctionService.tabulateFunction(from, to)
    let recursiveValues = this.recursiveCalculateFunctionService.tabulateFunction(from, to)
    this.writeToPage(values, rowValues, recursiveValues)
  }

  writeToPage(stockValues : {x: number, y: number}[],  rowCalculatedValues : {x: number, y: number}[], recursiveCalculatedValues : {x: number, y: number}[]) {
    this.values = []
    const fix = 4
    for (let i = 0; i < stockValues.length; i++) {
      this.values.push({
        'x' : stockValues[i].x.toFixed(fix),
        'y1' : stockValues[i].y.toFixed(fix),
        'y2' : rowCalculatedValues[i].y.toFixed(fix),
        'y3' : recursiveCalculatedValues[i].y.toFixed(fix)
      })
    }
  }

  ngOnInit() {
  }

}
