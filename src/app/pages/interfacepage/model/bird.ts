import {IFlyable} from "./i.flyable";
import {IWalkable} from "./i.walkable";
import {Entity} from "./entity";

export class Bird extends Entity implements IFlyable, IWalkable {

  constructor(name: string) {
    super(name);
  }

  fly(): void {
    console.log('I\'m bird, i can fly')
  }

  walk(): void {
    console.log('I\'m bird, i can walk')
  }

  sayAboutMe(): string {
    this.fly()
    this.walk()
    // @ts-ignore
    return this.sayName() + '.'
  }

}
