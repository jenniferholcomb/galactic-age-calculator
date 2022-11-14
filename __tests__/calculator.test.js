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

  test('should calculate user age into Galactic years', () => {
    expect(calculator.setGalacticAge(calculator.age)).toEqual(12);
  });

  test('should set age property in mercuryAge object within calculator class', () => {
     expect(calculator.setGalacticAge(calculator.age)).toEqual(12);
  });

  // test('should return user age in Mars years', () => {
  //   expect(calculator.getMarsAge(1.88)).toEqual(94);
  // });

  // test('should return user age in Jupiter years', () => {
  //   expect(calculator.getJupiterAge(11.86)).toEqual(593);
  // });
});