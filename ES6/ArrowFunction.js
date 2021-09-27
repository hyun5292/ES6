////Use Arrow Functions to Write Concise Anonymous Functions 
/*
In Javascript, we often don't need to name our functions, especially when passing
a function as an argument to another function. Instead, we create inline functions.
We don't need to name these functions because we do not reuse them anywhere else.
To achieve this, we often use the following syntax:
*/
/*
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
*/
/*
ES6 provides us with the syntactic sugar to not have to write anonymous functions
this way, Instead, you can use arrow function syntax:
*/
/*
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
*/
/*
When there is no function body, and only a return value, arrow function syntax
allows you to omit the keyword return as well as the brackets surrounding the code.
This helps simplify smaller functions into one-line statements:
*/
//const myFunc = () => "value";
/*
This code will still return the string value by default.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Rewrite the function assigned to the variable magic which returns a new Date()
to use arrow function syntax. Also, make sure nothing is defined using the keyword var.
*/
/*
var magic = function() {
  return new Date();
}
*/
//정답
/*
const magic = () => {
  return new Date();
};
*/
////////////////////////////////////////////////////////////////////////////////
////Write Arrow Functions with Parameters
/*
Just like a regular function, you can pass arguments into an arrow function.
*/
/*
const doubler = (item) => item * 2;
doubler(4);
*/
//doubler(4) would return the value 8.
/*
If an arrow function has a single parameter, the parentheses(괄호) enclosing the parameter
may be omitted(생략하다).
*/
//const doubler = item => item * 2;
/*
It is possible to pass more than one argument into an arrow function.
*/
/*
const multiplier = (item, multi) => item * multi;
muptiplier(4, 2);
*/
////////////////////////////////////////////////////////////////////////////////
/*
Rewrite the myConcat function which appends contents of arr2 to arr1 so that the
function uses arrow function syntax.
*/
/*
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
}
*/
//정답
/*
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
*/
//결과
//[1, 2, 3, 4, 5]
