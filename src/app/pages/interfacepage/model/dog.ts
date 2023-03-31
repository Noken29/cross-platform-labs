import {IWalkable} from "./i.walkable";
import {ISwimable} from "./i.swimable";
import {Entity} from "./entity";

export class Dog extends Entity implements IWalkable, ISwimable {
  age? : number

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }

  swim(): void {
    console.log('I\'m dog, i can swim')
  }

  walk(): void {
    console.log('I\'m dog, i can walk')
  }

  sayAboutMe(): string {
    this.swim()
    this.walk()
    // @ts-ignore
    return this.sayName() + '. I\'m ' + this.age + ' years old.'
  }

}
