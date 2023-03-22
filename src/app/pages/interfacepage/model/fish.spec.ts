
import {v4 as uuidv4} from "uuid";
import {Fish} from "./fish";

describe('PlaneModel', () => {
  let fish : Fish

  beforeEach(() => {
    fish = new Fish('Fish#' + uuidv4())
  })

  it('Instance creation', () => {
    expect(fish).toBeDefined()
  })

  it('Methods', () => {
    fish.swim()
    console.log(fish.sayName())
    console.log(fish.sayAboutMe())
  })
})
