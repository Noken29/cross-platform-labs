import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private PARAM_PATTERN = '{}'

  constructor() { }

  log(message : string, params : any[]) {
    params.forEach(e => message = message.replace(this.PARAM_PATTERN, e))
    console.log(message)
  }
}
