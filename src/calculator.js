export default class Calculator {

  constructor() {
    this.age = 0;
    this.mercuryAge = {value: .24, age: 0};
    this.venusAge = {value: .62, age: 0};
    this.marsAge = {value: 1.88, age: 0};
    this.jupiterAge = {value: 11.86, age: 0};
  }

  setAge(age) {
    this.age = age;
  }

  setGalacticAge() {
    this.mercuryAge.age = this.age * this.mercuryAge.value;
    this.venusAge.age = this.age * this.venusAge.value;
    this.marsAge.age = this.age * this.marsAge.value;
    this.jupiterAge.age = this.age * this.jupiterAge.value;
  }

  calculateLifeExpectancy() {
    const ageZero = 71.8;
    const ageHundred = 2.3;
    const lifeExpectancy = this.age * i really don't know
  }

}
