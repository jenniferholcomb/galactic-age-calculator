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
    expect(calculator.setGalacticAge()).toEqual();
  });

  test('should set age property in planet objects within calculator class', () => {
    expect(calculator.setGalacticAge()).toEqual();
  });

  test('should calculate life expectancy for user, age 0-10', () => {
    expect(calculator.calculateLifeExpectancy(6)).toEqual();
  });

  // test('should return user age in Jupiter years', () => {
  //   expect(calculator.getJupiterAge(11.86)).toEqual(593);
  // });
});