
export abstract class VehicleModel {
  name? : string

  protected constructor(name: string) {
    this.name = name
  }

  abstract cost(): number
}
