import {IThinkable} from "./i.thinkable";
import {IWalkable} from "./i.walkable";
import {ISwimable} from "./i.swimable";
import {Entity} from "./entity";
import {Sex} from "./sex";

export class Human extends Entity implements IThinkable, IWalkable, ISwimable {
  age? : number
  sex? : Sex

  constructor(name: string, age: number, sex: Sex) {
    super(name);
    this.age = age;
    this.sex = sex;
  }

  swim(): void {
    console.log('I\'m human, i can swim')
  }

  think(): void {
    console.log('I\'m human, i can think')
  }

  walk(): void {
    console.log('I\'m human, i can walk')
  }

  sayAboutMe(): string {
    this.think()
    this.swim()
    this.walk()
    // @ts-ignore
    return this.sayName() + '. I\'m ' + this.age + ' years old and i\'m ' + this.sex.toString().toLowerCase() + '.'
  }

}
