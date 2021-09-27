////Write Concise Declarative Function with ES6
/*
When defining functions withtin obects in ES5, we have to use the keyword function
as follows:
*/
/*
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
*/
/*
With ES6, you can remove the function keyword and colon altogether when defining
functions in objects. Here's an example of this syntax:
*/
/*
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My Name is ${this.name}.`;
  }
};
*/
////////////////////////////////////////////////////////////////////////////////
/*
Refactor the function setGear inside the object bicycle to use the shorthand
syntax describe above.
*/
/*
const bicycle = {
  gear: 2,
  //setGear: function(newGear) {
  setGear(newGear) {
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);
//결과
//3
*/
