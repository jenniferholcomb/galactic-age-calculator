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

  test('should calculate life expectancy if user, age 0-10', () => {
    expect(calculator.calculateLifeExpectancy(6)).toEqual(68.2);
  });

  test('should calculate life expectancy if user, age 11-20', () => {
    expect(calculator.calculateLifeExpectancy(14)).toEqual(57.1);
  });

  test('should calculate life expectancy if user, age 21-30', () => {
    expect(calculator.calculateLifeExpectancy(27)).toEqual(50.5);
  });
});