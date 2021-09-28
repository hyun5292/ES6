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
////////////////////////////////////////////////////////////////////////////////
////Match Literal strings
/*
In the last challenge, you searched for the word Hello using the regular expression
/Hello/. That regex searched for a literal match of the string Hello. Here's another
example searching for a literal match of the string Kevin:
*/
/*
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
*/
/*
This test call win return true.

Any other forms of Kevin will not match. For example, the regex /Kevin/ will not
match kevin or KEVIN.
*/
/*
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
*/
/*
This test call will return false.

A future challenge will show how to match those other forms as well.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with
a literal match.
*/
/*
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);
*/
////////////////////////////////////////////////////////////////////////////////
////Match a Literal String with Different Possibilities
/*
Using regexes like /coding/, you can look for the pattern coding in another string.

This is powerful to search single strings, but it's limited to only one pattern.
You can search for multiple patterns using the alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted
to match the string yes or no, the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding
more patterns with more OR operators separating them, like /yes|no|maybe/.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Complete the regex petRegex to match the pets dog, cat, bird or fish.
*/
/*
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
*/
////////////////////////////////////////////////////////////////////////////////
////Ignore Case While Matching
/*
Up until now, you've looked at regexes to do literal matches of strings. But sometimes,
you might want to also match case differences.

Case (or sometimes letter case) is the difference between uppercase letters and
lowercase letters. Examples of uppercase are A, B and C. Examples of lowercase
are a, b and c.

You can match both cases using what is called a flag. There are other flags but
here you'll focus on the flag that ignore case - the i flag. You can use it by
appending it to the regex. An example of using this flag is /ignorecase/i. This
regex can match the strings ignorecase, igNoreCase and IgnoreCase.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex
should not match any abbrevaiations(약어) or variations(변형) with spaces.
*/
/*
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);
*/
////////////////////////////////////////////////////////////////////////////////
////Extract Matches
/*
So far, you have only been checking if a pattern exists or not within a string.
You can also extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex
inside the parenthese.

Here's an example:
*/
/*
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
*/
/*
Here the first match would return ["Hello"] and the second would return ["expressions"].

Note that the .match syntax is the "opposite" of the .test method you have been
using thus far:
*/
/*
'string'.match(/regex/);
/regex/.test('string');
*/
////////////////////////////////////////////////////////////////////////////////
/*
Apply the .match() method to extract the string coding.
*/
/*
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
*/
////////////////////////////////////////////////////////////////////////////////
////Find More Than the First Match
/*
So far, you have only been able to extract or search a pattern once.
*/
/*
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
*/
/*
Here match would return ["Repeat"];

To search or extract a pattern more than once, you can use the g flag.
*/
/*
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
*/
/*
And here match returns the value ["Repeat", "Repeat", "Repeat"].
*/
////////////////////////////////////////////////////////////////////////////////
/*
Using the regex starRegex, find and extract both Twinkle words from the string
twinkleStar.
*/
/*
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStart.match(starRegex);
*/
////////////////////////////////////////////////////////////////////////////////
////Match Anything with Wildcard Period
/*
Sometimes you won't (or don't need to) know the exact characters in your patterns.
Thinking of all words that match, say, a misspelling would take a long time.
Luckily, you can save time using the wildcard characters: .
The wildcard character . will match any one character. The wildcard is also called
dot and period. You can use the wildcard character just like any other character
in the regex. For example, if you wanted to match hug, huh, hut and hum, you can
use the regex /hu./ to match all four words.
*/
/*
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
*/
/*
Both of these test calls would return true.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun
and bun. Your regex should use the wildcard character.
*/
/*
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);
*/
////////////////////////////////////////////////////////////////////////////////
////Match Single Character with Multiple Possibilities
/*
You learned how to match literal patterns (/literal/) and wildcard character (/./).
Those are the extremes of regular expressions, where one finds exact mathes and the
other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes.
Character classes allow you to define a group of characters you wish to match
by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big and bug but not bog. You can create the
regex /b[aiu]g/ to do this. The [aiu] is the character class that will only
match the characters a, i or u.
*/
/*
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
*/
/*
In order, the four match calls would return the values ["big"], ["bag"], ["bug"]
and null.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find
all the vowels in the string quoteSample.
*/
/*
let quoteSample = "Beware of bugs in the above code I have onlly proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);
*/
////////////////////////////////////////////////////////////////////////////////
