import {Component, OnInit} from '@angular/core';
import {Entity} from "./model/entity";
import {Human} from "./model/human";
import {Sex} from "./model/sex";
import {Dog} from "./model/dog";
import {Bird} from "./model/bird";
import {Seagull} from "./model/seagull";
import {Fish} from "./model/fish";

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {

  entities : Entity[] = []

  constructor() { }

  foo() {
    this.entities = []
    this.entities.push(new Human('John', 34, Sex.MALE))
    this.entities.push(new Human('Leyla', 14, Sex.FEMALE))
    this.entities.push(new Human('Alex', 19, Sex.MALE))
    this.entities.push(new Human('Luci', 20, Sex.FEMALE))
    this.entities.push(new Human('Ezra', 29, Sex.MALE))
    this.entities.push(new Dog('Muhtar', 1))
    this.entities.push(new Dog('Rocky', 3))
    this.entities.push(new Dog('Zhupelo', 5))
    this.entities.push(new Bird('Random bird #1'))
    this.entities.push(new Bird('Random bird #2'))
    this.entities.push(new Bird('Random bird #3'))
    this.entities.push(new Seagull('Random seagull #1'))
    this.entities.push(new Seagull('Random seagull #2'))
    this.entities.push(new Seagull('Random seagull #3'))
    this.entities.push(new Fish('Random fish #1'))
    this.entities.push(new Fish('Random fish #2'))
    this.entities.push(new Fish('Random fish #3'))
  }

  ngOnInit() {
  }

}
