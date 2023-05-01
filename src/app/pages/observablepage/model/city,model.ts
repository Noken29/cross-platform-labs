import {FactoryModel} from "./factory.model";

export class CityModel {
  name : string
  factories : FactoryModel[]

  constructor(name: string, factories : FactoryModel[]) {
    this.name = name
    this.factories = factories
  }
}
