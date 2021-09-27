////Create Strings using Template Literals
/*
A new feature of ES6 is the template literal. This is a special type of string that
makes creating complex strings easier.

Template literal allow you to create multi-line strings and to use string interplation
features to create strings.

Consider the code below:
*/
/*
const person = {
  name: "Zodiac Hasbro",
  age: 56
};
const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;

console.log(greeting);
//결과
//Hello, my name is Zodiac Hasbro! I am 56 years old.
*/
/*
The console will display the strings Hello, my name is Zodiac Hasbro! and I am 56
years old..

A lot of things happend there. Firstly, the example uses backticks(`), not quote('or"),
to wrap the string. Secondly, notice that the string is multi-line, both in the code
and the output. This saves inserting \n within strings. The ${variable} syntax used
above is a placeholder. Basically, you won't have to use concatenation with the
+ operator anymore. To add vairables to strings, you just drop the vairable in a
template string and wrap it with ${ and }. Similarly, you can include other expressions
in your string literal, for example ${a+b}. This new way of creating strings gives
you more flexibility to create robust strings.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use template lieral syntax with backticks to create an array of list element (li)
strings. Each list element's text should be one of the array elements from the
failure property on the result object and have a class attribute with the value
text-warning. The makelist function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below).
[
  '<li class="text-warning">novar</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
*/
/*
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return failureItems;
}
const failureList = makeList(result.failure);
console.log(failureList);
*/
