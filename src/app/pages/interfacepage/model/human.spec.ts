import {PlaneModel} from "../../../model/plane.model";
import {CommonUtils} from "../../../util/common.utils";
import {v4 as uuidv4} from "uuid";
import {Human} from "./human";
import {Sex} from "./sex";

describe('PlaneModel', () => {
  let maleHuman : Human, femaleHuman : Human

  beforeEach(() => {
    maleHuman = new Human('Human#' + uuidv4(), CommonUtils.randomIntFromInterval(0, 100), Sex.MALE)
    femaleHuman = new Human('Human#' + uuidv4(), CommonUtils.randomIntFromInterval(0, 100), Sex.FEMALE)
  })

  it('Instance creation', () => {
    expect(maleHuman).toBeDefined()
    expect(femaleHuman).toBeDefined()
  })

  it('Methods', () => {
    maleHuman.walk()
    maleHuman.swim()
    maleHuman.think()
    console.log(maleHuman.sayName())
    console.log(maleHuman.sayAboutMe())
    femaleHuman.walk()
    femaleHuman.swim()
    femaleHuman.think()
    console.log(femaleHuman.sayName())
    console.log(femaleHuman.sayAboutMe())
  })
})
