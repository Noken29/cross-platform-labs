import {FactoryModel} from "./factory.model";

export class CityModel {
  key? : string | null
  name : string
  factories : FactoryModel[]

  constructor(name: string, factories : FactoryModel[]) {
    this.name = name
    this.factories = factories
  }
}
