import { TestBed } from '@angular/core/testing';

import { TabFunctionService } from './tab-function.service';

describe('TabFunctionService', () => {
  let service: TabFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('tab function', () => {
    let values = service.tabulateFunction()
    expect(values).toBeTruthy()
    expect(Math.exp(values[0].x).toFixed(4)).toBe(values[0].y.toFixed(4))
  })
});
