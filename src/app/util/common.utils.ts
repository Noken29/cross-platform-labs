
export class CommonUtils {
  private constructor() {
  }

  static randomIntFromInterval(min : number, max : number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
