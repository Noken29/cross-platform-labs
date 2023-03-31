import { Injectable } from '@angular/core';
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class TabFunctionService {

  constructor(private logger : LoggingService) { }

  tabulateFunction(a  = -3 * Math.PI , b = 3 * Math.PI, calcFunction = (x : number) : number => Math.exp(x)) {
    let x = a, d = 0.1
    let values = []
    while (x < b) {
      let keyValue = {'x': x, 'y': calcFunction(x)}
      values.push(keyValue)
      this.logger.log('x: {}, y: {}', [keyValue.x, keyValue.y])
      x += d
    }
    return values
  }
}
