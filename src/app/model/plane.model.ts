import {VehicleModel} from "./vehicle.model";

export class PlaneModel extends VehicleModel {
  height: number
  speed: number

  constructor(name : string, height : number, speed : number) {
    super(name);
    this.height = height;
    this.speed = speed;
  }

  cost(): number {
    return 100 * this.height * this.speed;
  }

}
