import {v4 as uuidv4} from "uuid";
import {Bird} from "./bird";

describe('PlaneModel', () => {
  let bird : Bird

  beforeEach(() => {
    bird = new Bird('Bird#' + uuidv4())
  })

  it('Instance creation', () => {
    expect(bird).toBeDefined()
  })

  it('Methods', () => {
    bird.walk()
    bird.fly()
    console.log(bird.sayName())
    console.log(bird.sayAboutMe())
  })
})
