import {PlaneModel} from "./plane.model";
import {ShipModel} from "./ship.model";
import {CommonUtils} from "../util/common.utils";
import {v4 as uuidv4} from "uuid";

describe('ShipModel', () => {
  let randomPassengersNumber : number, ship : ShipModel

  beforeEach(() => {
    randomPassengersNumber = CommonUtils.randomIntFromInterval(100, 1000)
    ship = new ShipModel('Ship#' + uuidv4(), randomPassengersNumber, CommonUtils.randomIntFromInterval(10000, 20000))
  })

  it ('Instance creation', () => {
    expect(ship).toBeDefined()
  })

  it('Cost calculation', function () {
    expect(5 * Math.pow(randomPassengersNumber, 2)).toEqual(ship.cost())
  });
})
