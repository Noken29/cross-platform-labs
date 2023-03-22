import {v4 as uuidv4} from "uuid";
import {Seagull} from "./seagull";

describe('PlaneModel', () => {
  let seagull : Seagull

  beforeEach(() => {
    seagull = new Seagull('Fish#' + uuidv4())
  })

  it('Instance creation', () => {
    expect(seagull).toBeDefined()
  })

  it('Methods', () => {
    seagull.fly()
    seagull.walk()
    seagull.swim()
    console.log(seagull.sayName())
    console.log(seagull.sayAboutMe())
  })
})
