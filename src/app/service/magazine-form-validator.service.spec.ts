import { TestBed } from '@angular/core/testing';

import { MagazineFormValidatorService } from './magazine-form-validator.service';

describe('MagazineFormValidatorService', () => {
  let service: MagazineFormValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagazineFormValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('validate date', () => {
    expect(service.validateDate('02-04-1943')).toBeTrue()
    expect(service.validateDate('12-12-1943')).toBeTrue()
    expect(service.validateDate('32-02-1943')).toBeFalse()
    expect(service.validateDate('01-13-1943')).toBeFalse()
  });

  it('validate pages number', () => {
    expect(service.validatePagesNumber(39)).toBeTrue()
    expect(service.validatePagesNumber(40)).toBeTrue()
    expect(service.validatePagesNumber(-1)).toBeFalse()
    expect(service.validatePagesNumber(50)).toBeFalse()
  });

  it('validate number', () => {
    expect(service.validateNumber('#1243315')).toBeTrue()
    expect(service.validateNumber('#1')).toBeTrue()
    expect(service.validateNumber('1351354')).toBeFalse()
    expect(service.validateNumber('#')).toBeFalse()
  });
});
