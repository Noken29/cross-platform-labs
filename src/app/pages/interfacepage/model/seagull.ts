import {Bird} from "./bird";
import {ISwimable} from "./i.swimable";

export class Seagull extends Bird implements ISwimable {
  swim(): void {
    console.log('Also I\'m seagull, i can swim')
  }


  override sayAboutMe(): string {
    super.fly()
    super.walk()
    this.swim()
    return this.sayName() + '.'
  }
}
