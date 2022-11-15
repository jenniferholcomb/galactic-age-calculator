export default class Calculator {

  constructor() {
    this.age = 0;
    this.lifeExpectancy = 0;
    this.mercuryAge = {value: 4.17, age: 0, lifeEx: 0};
    this.venusAge = {value: 1.61, age: 0, lifeEx: 0};
    this.marsAge = {value: .53, age: 0, lifeEx: 0};
    this.jupiterAge = {value: .08, age: 0, lifeEx: 0};
  }

  setAge(age) {
    this.age = age;
  }

  // setMerAge(age) {
  //   this.mercuryAge.age = age * this.mercuryAge.value;
  //   return this.mercuryAge.age;
  // }
  // setGalacticAge() {
  //   this.mercuryAge.age = this.age * this.mercuryAge.value;
  //   this.venusAge.age = this.age * this.venusAge.value;
  //   this.marsAge.age = this.age * this.marsAge.value;
  //   this.jupiterAge.age = this.age * this.jupiterAge.value;
  // }

  calculateLifeExpectancy(age) {
    let lifeValue = this.lifeExpectancy;
    if(age <= 10) {
      lifeValue = parseFloat(((.9 * age) + 62.8).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 20) {
      lifeValue = parseFloat(((.95 * (age-10)) + 53.3).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 30) {
      lifeValue = parseFloat(((.92 * (age-20)) + 44.1).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 40) {
      lifeValue = parseFloat(((.9 * (age-30)) + 35.1).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 50) {
      lifeValue = parseFloat(((.87 * (age-40)) + 26.4).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 60) {
      lifeValue = parseFloat(((.79 * (age-50)) + 18.5).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 70) {
      lifeValue = parseFloat(((.65 * (age-60)) + 12).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 80) {
      lifeValue = parseFloat(((.49 * (age-70)) + 7.1).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 90) {
      lifeValue = parseFloat(((.32 * (age-80)) + 3.9).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else {
      lifeValue = parseFloat(((.16 * (age-90)) + 2.3).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    }
  }

}
