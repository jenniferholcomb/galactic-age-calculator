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

  calculateLifeExpectancy(age) {
    let lifeValue = this.lifeExpectancy;
    if(age <= 10) {
      lifeValue = parseFloat(((.009 * age) + 71.8).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 20) {
      lifeValue = parseFloat(((.05 * (age-10)) + 72.8).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 30) {
      lifeValue = parseFloat(((.08 * (age-20)) + 73.3).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 40) {
      lifeValue = parseFloat(((.01 * (age-30)) + 74.1).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 50) {
      lifeValue = parseFloat(((.13 * (age-40)) + 75.1).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 60) {
      lifeValue = parseFloat(((.11 * (age-50)) + 76.4).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 70) {
      lifeValue = parseFloat(((.35 * (age-60)) + 78.5).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 80) {
      lifeValue = parseFloat(((.51 * (age-70)) + 82).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else if(age <= 90) {
      lifeValue = parseFloat(((.68 * (age-80)) + 87.1).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    } else {
      lifeValue = parseFloat(((.84 * (age-90)) + 93.9).toFixed(1));
      this.lifeExpectancy = lifeValue;
      return lifeValue;
    }
  }

  setMerAge(age) {
    this.mercuryAge.age = age * this.mercuryAge.value;
    this.mercuryAge.lifeEx = parseFloat(((this.calculateLifeExpectancy(age)) * this.mercuryAge.value).toFixed(1));
    return this.mercuryAge.age;
  }

  setVenAge(age) {
    this.venusAge.age = age * this.venusAge.value;
    this.venusAge.lifeEx = parseFloat(((this.calculateLifeExpectancy(age)) * this.venusAge.value).toFixed(1));
    console.log(this.venusAge.lifeEx);
    return this.venusAge.age;
  }

  setMarAge(age) {
    this.marsAge.age = age * this.marsAge.value;
    return this.marsAge.age;
  }

  setJupAge(age) {
    this.jupiterAge.age = age * this.jupiterAge.value;
    return this.jupiterAge.age;
  }

}
