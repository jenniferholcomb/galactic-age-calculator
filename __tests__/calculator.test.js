import { TestScheduler } from 'jest';
import Calculator from './../src/calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
    calculator.setAge(50);
  });

  test('should set the age property for the calculator object', () => {
    expect(calculator.age).toEqual(50);
  });

  test('should return user age in Mercury years', () => {
    expect(calculator.getMercuryAge(.24)).toEqual(12);
  });

  test('should return user age in Venus years', () => {
    expect(calculator.getVenusAge(.62)).toEqual(31);
  });
});