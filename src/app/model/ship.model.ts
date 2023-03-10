import {VehicleModel} from "./vehicle.model";

export class ShipModel extends VehicleModel {
  passengersNumber: number;
  port: number;

  constructor(name : string, passengersNumber : number, port : number) {
    super(name);
    this.passengersNumber = passengersNumber
    this.port = port
  }

  cost(): number {
    return 5 * Math.pow(this.passengersNumber, 2);
  }
}
