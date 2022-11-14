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

  test('should return user age in Galactic years', () => {
    expect(calculator.getGalacticAge(this.mercuryAge.value)).toEqual(12);
  });

  // test('should return user age in Venus years', () => {
  //    expect(calculator.getVenusAge(.62)).toEqual(31);
  // });

  // test('should return user age in Mars years', () => {
  //   expect(calculator.getMarsAge(1.88)).toEqual(94);
  // });

  // test('should return user age in Jupiter years', () => {
  //   expect(calculator.getJupiterAge(11.86)).toEqual(593);
  // });
});