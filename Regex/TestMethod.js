////Using the Test Method
/*
Regular expressions are used in programming languages to match parts of strings.
You create patterns to help you do that matching.

If you want to find the word the in the string The dog chased the cat, you could
use the following regular extpression: /the/. Notice that quote marks are not
required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the
.text() method. The .text() method takes the regex, applies it to a string (which
is placed inside the parentheses), and returns true or false if your pattern finds
something or not.
*/
/*
let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr));
//결과
//true
*/
/*The test method here returns true.*/
////////////////////////////////////////////////////////////////////////////////
/*
Apply the regex myRegex on the string myString using the .test() method.
*/
/*
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);
//결과
//true
*/
