import { TestBed } from '@angular/core/testing';

import { RecursiveCalculateFunctionService } from './recursive-calculate-function.service';
import {RowCalculateFunctionService} from "./row-calculate-function.service";
import {TabFunctionService} from "./tab-function.service";

describe('RecursiveCalculateFunctionService', () => {
  let calculateService: RecursiveCalculateFunctionService;
  let tabulateService: TabFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    calculateService = TestBed.inject(RecursiveCalculateFunctionService);
    tabulateService = TestBed.inject(TabFunctionService);
  });

  it('should be created', () => {
    expect(calculateService).toBeTruthy();
  });

  it('calculate', () => {
    let values = tabulateService.tabulateFunction()
    console.log("ASDA: " + values[1].x)
    expect(values[1].y.toFixed(2)).toBe(calculateService.calculate(values[1].x).toFixed(2))
  })
});
