////Match Whitespace
/*
The challenges sos far have covered matching letters of the alphabet and numbers.
You can also match the whitespace(여백) or spaces between letters.

You can search for whitespace using \s, which is a lowercase s. This pattern not
only matches whitespace, but also carriage return, tab, form feed and new line
characters. You can think of it as similar to the character class [\r\t\f\n\v].
*/
/*
let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
*/
/*
This match all would return [" ", " "].
*/
////////////////////////////////////////////////////////////////////////////////
/*
Change the regex countWhiteSpace to look for multiple whitespace characters in
a string.
*/
/*
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
*/
////////////////////////////////////////////////////////////////////////////////
////Match Non-Whitespace Characters
/*
You learned about searching for whitespace using \s, with a lowercase s. You can
also search for everything except whitespace.

Search for non-whitespace using \S, which is an uppercase s. This pattern will
not match whitespace, carriage return, tab, from feed and new line characters.
You can think of it being similar to the character class [^\r\t\f\n\v].
*/
/*
let whiteSpace  = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;
whitespace.match(nonSpaceRegex).length;
*/
/*
The value returned by the .length method would be 32.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Change the regex countNonWhiteSpace to look for multiple non-whitespace characters
in a string.
*/
/*
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
*/
////////////////////////////////////////////////////////////////////////////////
////Specify Upper and Lower Number of Matches
/*
Recall that you use the plus sign + to look for one or more characters and the
asterisk * to look for zero or more characters. These are convenient but sometimes
you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers.
Quantity specifiers are used with curly brackets ({ and }). You put two numbers
between the curly brakcets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the
string ah, you regex would be /a{3,5}h/.
*/
/*
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
*/
/*
The first test call would return true, while the second would return false.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to
6 letter h's.
*/
/*
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);
*/
////////////////////////////////////////////////////////////////////////////////
////Specify Only the Lower Number of Matches
/*
You can specify the lower and upper number of patterns with quantity specifiers
using curly brackets. Sometimes you only want to specify the lower number of
patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by
a comma.

For example, to match only the string hah with the letter a appearing at least 3
times, your regex would be /ha[3,]h/.
*/
/*
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
*/
/*
In order, the three test calls would return true, false and true.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Change the regex haRegex to match the word Hazzah only when it has four or more
letter z's.
*/
/*
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);
*/
////////////////////////////////////////////////////////////////////////////////
////Specify Exact Number of Matches
/*
You can specify the lower and upper number of patterns with quantity specifiers
using curly brackets. Somtimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the
curly brackets.

For example, to match only the word hah with the letter a 3 times, you regex would
be /ha{3}h/;
*/
/*
let A4 ="haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
*/
/*
In order, the three test calls would return false, true and false.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Change the regex timeRegex to match the word Timber only when it has four letter
m's
*/
/*
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);
*/
////////////////////////////////////////////////////////////////////////////////
////Check for All or None
/*
Sometimes the patterns you want to search for may have parts of it that may or
may not exist. However, it may be important to check for them nonetheless.

You can specify the possible existence of an element with a question mark, ?.
This checks for zero or one of the preceding element. You can think of this symbol
as saying the previous element is optional.

For example, there are slight differences in American and British English and you
can use the question mark to match both spellings.
*/
/*
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(amerian);
rainbowRegex.test(british);
*/
/*
Both uses of the test method would return true.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Change the regex favRegex to match both the American English (favorite) and the
British English (favourite) version of the word.
*/
/*
let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);
*/
////////////////////////////////////////////////////////////////////////////////
////Positive and Negative Lookahead
/*
Lookaheads are patterns that tell JavaScript to look-ahead in your string to check
for patterns further along. This can be useful when you want to search for multiple
patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is
there, but won't actually match it. A positive lookahead is used as (?=...)
where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the
search pattern is not there. A negative lookahead is used as (?!...) where the
... is the pattern that you do not want to be there. The rest of the pattern is
returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.
*/
/*
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
*/
/*
Both of these match calls would return ["q"].

A more practical use of lookaheads is to check two or more patterns in one string.
Here is a (naively) simple password checker that looks for between 3 and 6 characters
and at least one number:
*/
/*
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters
long, and have two consecutive(연이은) digits.
*/
/*
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
*/
////////////////////////////////////////////////////////////////////////////////
////Check For Mixed Grouping of Characters
/*
Sometimes we want to check for groups of characters using a Regular Expression
and to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, you can use the following
Regular Expression: /|(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using the
test() method.
*/
/*
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
*/
/*
The test method here would return true.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor
Roosevelt in a case sensitive manner and it should make concessions for middle names.

Then fix the code so that the regex that you have created is checked against myString
and either true or false is returned depending on whether the regex matches.
*/
/*
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);
*/
//.은 /hu./ -> hum hug
//*은 /go*/ //-> "gooooooooooal" -> {"goooooooooo"}, "gut feeling" -> {"g"}
////////////////////////////////////////////////////////////////////////////////
////Reuse Patterns Using Capture Groups
/*
Say you want to match a word that occurs multiple times like below.
*/
//let repeatStr = "row row row your boat";
/*
You could use /row row row/, but what if you don't know the specific word repeated?
Capture groups can be used to find repeated substrings.

Capture groups are constructed by enclosing the regex pattern to be captured in
parenthese. In this case, the goal is to capture a word consisting of alphanumeric
characters so the capture group will be \W+ enclosed by parenthese: /(\w+)/.

The substring matched by the group is saved to a temporary "variable", which can
be accessed within the same regex using a backslash and the number of the capture
group (e.g. \1). Capture groups are automatically numbered by the position of their
opening parenthese (left to right), starting at 1.

The example below matches a word that occurs thrice(세 번) separated by spaces:
*/
/*
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr);  // Returns true
repeatStr.match(repeatRegex);  //Returns ["row row row", "row"]
*/
/*
Using the .match() method on a string will return an array with the matched
substring, along with its captured groups.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use capture groups in reRegex to match a string that consists of only the same
number repeated exactly three times separated by single spaces.
*/
/*
let repeatNum = "42 42 42 42";
let reRegex = /^(\d+)\s\1\s\1\s\1$/;
let result = reRegex.test(repeatNum);
*/
////////////////////////////////////////////////////////////////////////////////
////Use Capture Groups to Search and Replace
/*
Searching is useful. However, you can make searching even more powerful when it
also changes (or replaces) the text you match.

You an search and replace text in a string using .replace() on a string. The inputs
for .replace() is first the regex pattern you want to search for. The second parameter
is the string to replace the match or a function to do something.
*/
/*
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue"));
//결과
//The sky is blue.
*/
/*
The replace call would return the string The sky is blue..

You an also access capture groups in the replacement string with dollar signs ($).
*/
//"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
/*
The replace call would return the string Camp Code.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Write a regex fixRegex using three capture groups that will search for each word
in the string one two three. Then update the replaceText variable to replace
one two three with the string three two one and assign the result to the result
variable. Make sure you are utilizing capture groups in the replacement string
using the dollar sign ($) syntax.
*/
/*
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);
*/
////////////////////////////////////////////////////////////////////////////////
////Remove Whitespace from Start and End
/*
Sometimes whitespace characters around strings are not wanted but are there.
Typical processing of strings is to remove the whitespace at the start and end of it.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Write a regex and use the appropriate string methods to remove whitespace at the
beginnning and ends of strings.
*/
/*
let hello = " Hello, World! ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");
console.log(result);
//결과 Hello, World!
*/
