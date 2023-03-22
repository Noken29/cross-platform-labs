import {ISwimable} from "./i.swimable";
import {Entity} from "./entity";

export class Fish extends Entity implements ISwimable {

  constructor(name: string) {
    super(name);
  }

  swim(): void {
    console.log('I\'m fish, i can swim')
  }

  sayAboutMe(): string {
    this.swim()
    // @ts-ignore
    return this.sayName() + '.'
  }

}
