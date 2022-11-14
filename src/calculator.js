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
    console.log(this.mercuryAge.age);
   // return this.mercuryAge.age;
  }

  // getVenusAge(value) {
  //   return this.age * value;
  // }

  // getMarsAge(value) {
  //   return this.age * value;
  // }

  // getJupiterAge(value) {
  //   return this.age * value;
  // }
}




// export function (side1, side2, side3) {
//   this.side1 = side1;
//   this.side2 = side2;
//   this.side3 = side3;
// }

// Triangle.prototype.checkType = function() {
//   return "I can't answer that yet!";
// };