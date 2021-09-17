////Explore Differences Between the var and let Keywords
/*
One of the biggest problems with declaring variables with the var Keywords
is that you can overwrite variable declarations without an error.
*/
/*
var camper = 'James';
var camper = 'David';
console.log(camper);
*/
//결과:
//David
/*
Here the console will display the string David. As you can see in the code above,
the camper variable is originally declared as James and then overridden to be David.
In a small application, you might not run into this type of problem, but when
your code becomes larger, you might accidentally overwrite a variable that you
did not intend to overwrite. Because this behavior does not throw an error,
searching and fixing bugs becomes more difficult. A new keyword called let was introduced
in ES6 to solve this potential issue with this var keyword. If you were to replace
var with let in the variable declarations of the code above, the result would be an error.
*/
/*
let camper = 'James';
let camper = 'David';
console.log(camper);
*/
//결과:
//error
/*
This error can be seen in the console of your browser. So unlike var, when using let,
a variable with the same name can only be declared one. Note the "use strict".
This enables Strict Mode, which catches common coding mistakes and "unsafe" actions.
For instance:
"use strict";
x = 3.14;
This will display an error that x is not defined.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Update the code so it only uses the let keyword.
*/
/*
//var catName;
//var quote;
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
  console.log(quote);
}
catTalk();
*/
//var 결과:
//Oliver says Meow!
//let 결과:
//Oliver says Meow!
////////////////////////////////////////////////////////////////////////////////
////Compare Scopes of the var and let Keywords
/*
When you declare a vairable with the var keyword, it is declared globally, or
locally if declared inside a function.

The let keyword behaves similarly, but with some extra features. When you declare
a variable with the let keyword inside a block, statement or expression, its scope
is limited to that block, statement or expression.
For example:
*/
/*
var numArray = [];
for (var i  = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
*/
//결과:
//[0,1,2]
//3
/*
With the var keyword, i is declared globally. So when i++ is executed, it updates
the global variable. This code is similar to the following:
*/
/*
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
*/
//결과:
//[0,1,2]
//3
/*
This behavior will cause problems if you were to create a function and store it
for later use inside a for loop that uses the i variable. This is because the
stored function will always refer to the value of the updated global i variable.
*/
/*
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    }
  }
}
console.log(printNumTwo());
*/
//결과:
//3
/*
As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned
to i was updated and the printNumTow() returns the global i and not the value i
had when the function was created in the for loop. The let keyword does not follow
this behavior:
*/
/*
let printNumTwo;
for(let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
*/
//결과:
//2
//error: i is not defined
/*
i is not defined because it was not declared in the global scope. It is only
decalred within the for loop statment. printNumTwo() returned the correct value
because three different i variables with unique values (0, 1 and 2) were created
by the let keyword within the loop statement.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Fix the code so that i declared in the if statement is a seperate variable than
i declared in the first line of the function. Be certain not to use the var keyword
anywhere in your code.

This exercise is designed to illustrate the differnce between how var and let
keyword assign scope to the declared variable. When programming a function similar
to the one used in this exercise, it is often better to use different variable
names to avoid confusion.
*/
/*
function checkScope() {
  //var i = 'function scope';
  "use strict";
  let i = 'function scope';
  if (true) {
    //i = 'block scope';
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
checkScope();
*/
//var 결과:
//Block scope i is: block scope
//Function scope i is: block scope
//let 결과:
//Block scope i is: block scope
//Function scope i is: function scope
////////////////////////////////////////////////////////////////////////////////
