import { TestBed } from '@angular/core/testing';

import { RowCalculateFunctionService } from './row-calculate-function.service';
import {TabFunctionService} from "./tab-function.service";

describe('RowCalculateFunctionService', () => {
  let calculateService: RowCalculateFunctionService;
  let tabulateService: TabFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    calculateService = TestBed.inject(RowCalculateFunctionService);
    tabulateService = TestBed.inject(TabFunctionService);
  });

  it('should be created', () => {
    expect(calculateService).toBeTruthy();
  });

  it('calculate', () => {
    let values = tabulateService.tabulateFunction()
    expect(values[0].y.toFixed(2)).toBe(calculateService.calculate(values[0].x).toFixed(2))
  })
});
