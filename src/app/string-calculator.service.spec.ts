import { TestBed } from '@angular/core/testing';
import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0 for an empty string', () => {
    expect(service.add('')).toEqual(0);
  });

  it('should return the number itself for a single number string', () => {
    expect(service.add('1')).toEqual(1);
  });

  it('should return the sum of comma-separated numbers', () => {
    expect(service.add('1,2,3')).toEqual(6);
  });

  it('should handle new lines between numbers', () => {
    expect(service.add('1\n2,3')).toEqual(6);
  });

  it('should support different delimiters', () => {
    expect(service.add('//;\n1;2')).toEqual(3);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => service.add('1,-2,3,-4')).toThrowError('Negative numbers not allowed: -2, -4');
  });
});
