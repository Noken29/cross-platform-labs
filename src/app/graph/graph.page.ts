import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {

  @ViewChild('lineCanvas') lineCanvas?: ElementRef
  lineChart?: Chart;

  constructor() {
    Chart.register(...registerables)
  }

  ngOnInit() { }

  graph(xBegin : any, xEnd : any, xStep : any, aValue : any) {
    let xB = parseFloat(xBegin), xE = parseFloat(xEnd), xS = parseFloat(xStep), a = parseFloat(aValue)
    let DEPairs = this.generateDEPairs(xB, xE, xS, a)
    console.log(DEPairs)
    this.drawChart(DEPairs)
  }

  drawChart(data : number[][]) {
    this.lineChart?.destroy()
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: data[0],
        datasets: [
          {
            label: 'Графіу функції',
            borderColor: 'blue',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: data[1],
            spanGaps: false
          }
        ]
      }
    })
  }

  generateDEPairs(xB : number, xE : number, xS : number, a : number) {
    let DEPairs = [[], []]
    for (let i = xB; i < xE; i += xS) {
      // @ts-ignore
      DEPairs[0].push(i.toFixed(1))
      // @ts-ignore
      DEPairs[1].push(this.calculateFunction(i, a))
    }
    return DEPairs
  }

  calculateFunction(x : number, a : number) {
    if (x <= 0)
      return Math.pow(5, Math.sin(x) + 2) * x + Math.sin(x)
    if (0 < x && x < a)
      return Math.pow(x, 3) + Math.pow(Math.abs(x) + 1, 0.1 * x)
    return Math.pow(Math.sin(x + 2), 3) / (Math.pow(Math.pow(Math.sin(x), 2) + Math.pow(Math.cos(x), 4), 0.25))
  }

}
