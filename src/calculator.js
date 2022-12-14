export default class Calculator {

  constructor() {
    this.age = 0;
    this.lifeExpectancy = 0;
    this.mercuryAge = {value: 4.17, age: 0, lifeEx: 0, yearsLive: 0};
    this.venusAge = {value: 1.61, age: 0, lifeEx: 0, yearsLive: 0};
    this.marsAge = {value: .53, age: 0, lifeEx: 0, yearsLive: 0};
    this.jupiterAge = {value: .08, age: 0, lifeEx: 0, yearsLive: 0};
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

  getLifeExpectancy(age, birthEx) {
    if(age >= birthEx) {
      let pastEx = parseFloat((age - birthEx).toFixed(1));
      return pastEx;
    } else {
      let yearsLive = parseFloat((birthEx - age).toFixed(1));
      return yearsLive;
    }
  }

  setMerAge(age) {
    this.mercuryAge.age = parseFloat((age * this.mercuryAge.value).toFixed(1));
    this.mercuryAge.lifeEx = parseFloat(((this.calculateLifeExpectancy(age)) * this.mercuryAge.value).toFixed(1));
    const birthEx = parseFloat((71.8 * this.mercuryAge.value).toFixed(1));
    this.mercuryAge.yearsLive = this.getLifeExpectancy(this.mercuryAge.age, birthEx);
    return this.mercuryAge.age;
  }

  setVenAge(age) {
    this.venusAge.age = parseFloat((age * this.venusAge.value).toFixed(1));
    this.venusAge.lifeEx = parseFloat(((this.calculateLifeExpectancy(age)) * this.venusAge.value).toFixed(1));
    const birthEx = parseFloat((71.8 * this.venusAge.value).toFixed(1));
    this.venusAge.yearsLive = this.getLifeExpectancy(this.venusAge.age, birthEx);
    return this.venusAge.age;
  }

  setMarAge(age) {
    this.marsAge.age = parseFloat((age * this.marsAge.value).toFixed(1));
    this.marsAge.lifeEx = parseFloat(((this.calculateLifeExpectancy(age)) * this.marsAge.value).toFixed(1));
    const birthEx = parseFloat((71.8 * this.marsAge.value).toFixed(1));   
    this.marsAge.yearsLive = this.getLifeExpectancy(this.marsAge.age, birthEx);
    return this.marsAge.age;
  }

  setJupAge(age) {
    this.jupiterAge.age = parseFloat((age * this.jupiterAge.value).toFixed(1));
    this.jupiterAge.lifeEx = parseFloat(((this.calculateLifeExpectancy(age)) * this.jupiterAge.value).toFixed(1));
    const birthEx = parseFloat((71.8 * this.jupiterAge.value).toFixed(1)); 
    this.jupiterAge.yearsLive = this.getLifeExpectancy(this.jupiterAge.age, birthEx);
    return this.jupiterAge.age;
  }
}
