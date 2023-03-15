import {PlaneModel} from "./plane.model";
import {v4 as uuidv4} from "uuid";
import {CommonUtils} from "../util/common.utils";

describe('PlaneModel', () => {
  let randomHeight : number, randomSpeed : number, plane : PlaneModel

  beforeEach(() => {
    randomHeight = CommonUtils.randomIntFromInterval(3, 20)
    randomSpeed = CommonUtils.randomIntFromInterval(300, 500)
    plane = new PlaneModel('Plane#' + uuidv4(), randomHeight, randomSpeed)
  })

  it('Instance creation', () => {
    expect(plane).toBeDefined()
  })

  it('Cost calculation', () => {
    expect(100 * randomHeight * randomSpeed).toEqual(plane.cost())
  })
})
