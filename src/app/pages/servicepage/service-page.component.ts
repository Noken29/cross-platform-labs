import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TabFunctionService} from "../../service/tab-function.service";
import {RowCalculateFunctionService} from "../../service/row-calculate-function.service";
import {RecursiveCalculateFunctionService} from "../../service/recursive-calculate-function.service";
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-servicepage',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss'],
})
export class ServicePage implements OnInit {

  @ViewChild('lineCanvas1') lineCanvas1?: ElementRef
  lineChart1?: Chart;

  @ViewChild('lineCanvas2') lineCanvas2?: ElementRef
  lineChart2?: Chart;

  @ViewChild('lineCanvas3') lineCanvas3?: ElementRef
  lineChart3?: Chart;


  values : {x: string, y1: string, y2: string, y3: string}[] = []

  constructor(private tabFunctionService: TabFunctionService,
              private rowCalculateFunctionService : RowCalculateFunctionService,
              private recursiveCalculateFunctionService : RecursiveCalculateFunctionService) {
    Chart.register(...registerables)
  }

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
    this.drawChart()
  }

  drawChart() {
    this.lineChart1?.destroy()
    this.lineChart2?.destroy()
    this.lineChart3?.destroy()
    this.lineChart1 = this.buildChart(this.values.map(e => {
      return {'x' : e.x, 'y' : e.y1}
    }), this.lineCanvas1)
    this.lineChart2 = this.buildChart(this.values.map(e => {
      return {'x' : e.x, 'y' : e.y2}
    }), this.lineCanvas2)
    this.lineChart3 = this.buildChart(this.values.map(e => {
      return {'x' : e.x, 'y' : e.y3}
    }), this.lineCanvas3)
  }

  buildChart(values: { x: string; y: string }[], lineCanvas: ElementRef | undefined) {
    return new Chart(lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: values.map(e => parseFloat(e.x)),
        datasets: [
          {
            label: 'Графік функції',
            borderColor: 'blue',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: values.map(e => parseFloat(e.y)),
            spanGaps: false
          }
        ]
      }
    })
  }

  ngOnInit() {
  }

}
