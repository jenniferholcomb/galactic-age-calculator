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

  calculateLifeExpectancy(age) {
    let lifeExpectancy = 0;
    if(age <= 10) {
      lifeExpectancy = parseFloat(((.9 * age) + 62.8).toFixed(1));
      return lifeExpectancy;
    } else if(age <= 20) {
      lifeExpectancy = parseFloat(((.95 * (age-10)) + 53.3).toFixed(1));
      return lifeExpectancy;
    } else {
      lifeExpectancy = parseFloat(((.92 * (age-20)) + 44.1).toFixed(1));
      return lifeExpectancy;
    }

  }

}
