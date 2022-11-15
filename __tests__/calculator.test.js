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

  test('should calculate life expectancy if user, age 31-40', () => {
    expect(calculator.calculateLifeExpectancy(37)).toEqual(41.4);
  });

  test('should calculate life expectancy if user, age 41-50', () => {
    expect(calculator.calculateLifeExpectancy(47)).toEqual(32.5);
  });

  test('should calculate life expectancy if user, age 51-60', () => {
    expect(calculator.calculateLifeExpectancy(57)).toEqual(24.0);
  });

  test('should calculate life expectancy if user, age 61-70', () => {
    expect(calculator.calculateLifeExpectancy(67)).toEqual(16.6);
  });

  test('should calculate life expectancy if user, age 71-80', () => {
    expect(calculator.calculateLifeExpectancy(77)).toEqual(10.5);
  });

  test('should calculate life expectancy if user, age 81-90', () => {
    expect(calculator.calculateLifeExpectancy(87)).toEqual(6.1);
  });

  test('should calculate life expectancy if user, age 91-100', () => {
    expect(calculator.calculateLifeExpectancy(97)).toEqual(3.4);
  });

});