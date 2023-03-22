import {v4 as uuidv4} from "uuid";
import {CommonUtils} from "../../../util/common.utils";
import {Dog} from "./dog";

describe('PlaneModel', () => {
  let dog : Dog

  beforeEach(() => {
    dog = new Dog('Dog#' + uuidv4(), CommonUtils.randomIntFromInterval(0, 20))
  })

  it('Instance creation', () => {
    expect(dog).toBeDefined()
  })

  it('Methods', () => {
    dog.walk()
    dog.swim()
    console.log(dog.sayName())
    console.log(dog.sayAboutMe())
  })
})
