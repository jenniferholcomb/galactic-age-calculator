export default class Calculator {

  constructor() {
    this.age = 0;
    this.mercuryAge = {value: .24};
    this.venusAge = {value: .62};
    this.marsAge = {value: 1.88};
    this.jupiterAge = {value: 11.86};
  }

  setAge(age) {
    this.age = age;
  }

  getGalacticAge(value) {
    return this.age * value;
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