////Set Default Parameters for Your Functions
/*
In order to help us create more flexible functions, ES6 introduces default parameters
for functions.
Check out this code:
*/
/*
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));
console.log(greeting());
*/
//결과
//Hello John
//Hello Anonymous
/*
The console will display the strings Hello John and Hello Anonymous.

The default parameter kicks in(시작하다) when the argument is not specified(it is undefined).
As you can see in the example above, the parameter name will receive its default
value Anonymous when you do not provied a value for the parameter. You can add default
values for as many parameter as you want.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Modify the function increment by adding default paramters so that it will add 1
to number if value is not specified.
*/
/*
const increment = (number, value = 1) => number + value;
console.log(increment(0, ));
*/
//결과
//1
