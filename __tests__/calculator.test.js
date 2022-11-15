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

  test('should calculate life expectancy if user, age 0-10', () => {
    expect(calculator.calculateLifeExpectancy(6)).toEqual(71.9);
  });

  test('should calculate life expectancy if user, age 11-20', () => {
    expect(calculator.calculateLifeExpectancy(14)).toEqual(73);
  });

  test('should calculate life expectancy if user, age 21-30', () => {
    expect(calculator.calculateLifeExpectancy(27)).toEqual(73.9);
  });

  test('should calculate life expectancy if user, age 31-40', () => {
    expect(calculator.calculateLifeExpectancy(37)).toEqual(74.2);
  });

  test('should calculate life expectancy if user, age 41-50', () => {
    expect(calculator.calculateLifeExpectancy(47)).toEqual(76.0);
  });

  test('should calculate life expectancy if user, age 51-60', () => {
    expect(calculator.calculateLifeExpectancy(57)).toEqual(77.2);
  });

  test('should calculate life expectancy if user, age 61-70', () => {
    expect(calculator.calculateLifeExpectancy(67)).toEqual(81.0);
  });

  test('should calculate life expectancy if user, age 71-80', () => {
    expect(calculator.calculateLifeExpectancy(77)).toEqual(85.6);
  });

  test('should calculate life expectancy if user, age 81-90', () => {
    expect(calculator.calculateLifeExpectancy(87)).toEqual(91.9);
  });

  test('should calculate life expectancy if user, age 91-100', () => {
    expect(calculator.calculateLifeExpectancy(97)).toEqual(99.8);
  });

  test('should set life expectancy property in calculator object', () => {
    expect(calculator.calculateLifeExpectancy(87)).toEqual(91.9);
  })

  test('should return calculated user age into Mercury years', () => {
    expect(calculator.setMerAge(calculator.age)).toEqual(208.5);
  });

  // test('should calculate user life expectancy for planet Mercury', () => {
  //   expect(calculator.setM(calculator.age)).toEqual()
  // })

  test('should return calculated user age into Venus years', () => {
    expect(calculator.setVenAge(calculator.age)).toEqual(80.5);
  });

  test('should return calculated user age into Mars years', () => {
    expect(calculator.setMarAge(calculator.age)).toEqual(26.5);
  });

  test('should return calculated user age into Jupiter years', () => {
    expect(calculator.setJupAge(calculator.age)).toEqual(4);
  });

});