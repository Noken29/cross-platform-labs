import {CityModel} from "../model/city,model";
import {Injectable} from "@angular/core";
import {FactoryModel} from "../model/factory.model";
import {FactoryType} from "../model/factory.type";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CityModelRepository {
  cities : BehaviorSubject<CityModel[]> = new BehaviorSubject<CityModel[]>([])

  constructor() {
    let factories : FactoryModel[] = []
    factories.push(new FactoryModel('City#1_Factory#1', 10, 10000, 5, FactoryType.FOOD))
    factories.push(new FactoryModel('City#1_Factory#2', 100, 100000, 10, FactoryType.METALLURGY))
    factories.push(new FactoryModel('City#1_Factory#3', 5, 5000, 0.6, FactoryType.TEXTILE))
    factories.push(new FactoryModel('City#1_Factory#4', 150, 500000, 30, FactoryType.ENERGETIC))
    let citiesCopy = this.cities.getValue()
    citiesCopy.push(new CityModel('City#1', factories))
    this.cities.next(citiesCopy)
    factories = []
    factories.push(new FactoryModel('City#2_Factory#1', 10, 10000, 5, FactoryType.FOOD))
    factories.push(new FactoryModel('City#2_Factory#2', 100, 100000, 10, FactoryType.METALLURGY))
    factories.push(new FactoryModel('City#2_Factory#3', 5, 5000, 0.6, FactoryType.TEXTILE))
    factories.push(new FactoryModel('City#2_Factory#4', 150, 500000, 30, FactoryType.ENERGETIC))
    citiesCopy = this.cities.getValue()
    citiesCopy.push(new CityModel('City#2', factories))
    this.cities.next(citiesCopy)
  }

  save(city : CityModel) {
    let citiesCopy = this.cities.getValue()
    citiesCopy.push(city)
    this.cities.next(citiesCopy)
  }

}
