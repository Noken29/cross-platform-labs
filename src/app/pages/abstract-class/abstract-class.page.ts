import { Component, OnInit } from '@angular/core';
import {VehicleModel} from "../../model/vehicle.model";
import {PlaneModel} from "../../model/plane.model";
import {ShipModel} from "../../model/ship.model";
import {v4 as uuidv4} from 'uuid';
import {CommonUtils} from "../../util/common.utils";

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {

  vehicles : VehicleModel[] = []

  constructor() { }

  generateVehicles(number : any) {
    let n = parseInt(number);
    this.vehicles = []
    for (let i = 0; i < n; i++) {
      let isPlane = Math.random() < 0.5;
      this.vehicles.push(this.newVehicle(isPlane))
    }
    console.log(this.vehicles)
  }

  newVehicle(isPlane : boolean) {
    if (isPlane) {
      return new PlaneModel('Plane#' + uuidv4(), CommonUtils.randomIntFromInterval(4, 10), CommonUtils.randomIntFromInterval(12, 40))
    }
    return new ShipModel('Ship#' + uuidv4(), CommonUtils.randomIntFromInterval(1, 300), CommonUtils.randomIntFromInterval(10000, 30000))
  }

  average(name : string) {
    let vehicles = this.vehicles.filter(e => e.name?.startsWith(name))
    if (vehicles.length === 0)
      return 0
    return vehicles.map(e => e.cost()).reduce((sum, current) => sum + current, 0) / vehicles.length
  }

  ngOnInit() {
  }

}
