////Declare a Read-Only Variable with the const Keyword
/*
The keyword let is not the only new way to declare variables. In ES6, you can also
decare variables using the const keyword.

const has all the awesome features that let has, with the added bonus that variables
declared using const are read-only. They are a constant value, which means that
once a variable is assigned with const, it cannot be reassinged.
*/
/*
const FAV_PET = "Cats";
FAV_PET = "Dogs";
console.log(FAV_PET);
*/
//결과:
//Assignment to constant variable.
/*
As you can see, trying to reassign a variable declared with const will throw an error.
You should always name vairables you don't want to reassign using the const keyword.
This helps when you accidentally attempt to reassign a variable that is meant to stay
constant. A common practice when naming contstant is to use all uppercase letters,
with words separated by an underscore.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Change the code so that all variables are declared using let or const. Use let
when you want the variable to change, and const when you want the variable to
remain constant. Also, rename vairables declared with const to conform to common
practices, meaning constants should be in all caps.
*/
/*
function printManyTimes(str) {
  //var sentence = str + " is cool!";
  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");
*/
//결과:
//freeCodeCamp is cool!
//freeCodeCamp is cool!
//freeCodeCamp is cool!
//freeCodeCamp is cool!
//freeCodeCamp is cool!
//freeCodeCamp is cool!
////////////////////////////////////////////////////////////////////////////////
////Prevent Object Mutation
/*
As seen in the previous challenge, const declaration alone doesn't really protect
your data from mutation. To ensure your data doesn't change, JavaScript provides
a function Object.freeze to prevent data mutation.

Once the object is frozen, you can no longer add, update or delete properties
from it. Any attempt at changing the object will be rejected without an error.
*/
/*
let obj = {
  name: "FreeCodeCamp",
  review: "Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);
*/
//결과:
//error
/*
The obj.review and obj.newProp assignments will result in errors, and the console
will display the value {name: "FreeCodeCamp", review: "Awesome"}
*/
////////////////////////////////////////////////////////////////////////////////
/*
In this challenge you are going to use Object.freeze to prevent mathematical
constants from changing. You need to freeze the MATH_CONSTANTS object so that
no one is able to alter the value of PI, add or delete properties.
*/
/*
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  //Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }

  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log("PI = ", PI);
*/
////////////////////////////////////////////////////////////////////////////////
