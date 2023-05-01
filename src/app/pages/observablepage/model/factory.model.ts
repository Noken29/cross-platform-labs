import {FactoryType} from "./factory.type";

export class FactoryModel {
  name : string
  workers : number
  profit : number
  square : number
  type : FactoryType

  constructor(name: string, workers: number, profit: number, square: number, type: FactoryType) {
    this.name = name;
    this.workers = workers;
    this.profit = profit;
    this.square = square;
    this.type = type;
  }
}
