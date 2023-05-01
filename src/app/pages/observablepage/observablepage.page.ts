import {Component, OnDestroy, OnInit} from '@angular/core';
import {CityModelRepository} from "./repository/city.model.repository";
import {CityModel} from "./model/city,model";
import {FactoryType} from "./model/factory.type";
import {FactoryModel} from "./model/factory.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit, OnDestroy {

  cities : CityModel[] = []
  citySubscription? : Subscription
  selectedCity? : CityModel
  selectedCityIndex? : number

  constructor(public cityModelRepository : CityModelRepository) { }

  handleCityChange(event : any) {
    console.log(event)
    if (event.detail.value as number) {
      this.selectedCity = this.cities[event.detail.value]
      this.selectedCityIndex = event.detail.value as number
    } else {
      throw new Error('Wrong type.')
    }
  }

  handleCitySave(cityName : any) {
    let name = cityName as string
    if (name === undefined || name === '') {
      alert('Type city name first!')
      return
    }
    this.cityModelRepository.save(new CityModel(name, []))
  }

  handleFactorySave(factoryName : any, factoryProfit : any, factoryWorkers : any, factorySquare : any, factoryType : any) {
    if (this.selectedCityIndex === undefined) {
      alert('Select city first!')
      return;
    }
    if (factoryName === undefined || factoryName === '') {
      alert('Type factory name!')
      return
    }
    let city = this.cities[this.selectedCityIndex]
    city.factories.push(new FactoryModel(factoryName as string, factoryName as number, factoryWorkers as number, factorySquare as number, factoryType as FactoryType))
  }

  ngOnInit() {
    this.citySubscription = this.cityModelRepository.cities.subscribe((cities: CityModel[]) => {this.cities = cities})
  }

  ngOnDestroy() {
    this.citySubscription?.unsubscribe()
  }
}
