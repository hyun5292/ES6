////Match Characters that Occur One or More Times
/*
Sometimes, you need to match a character (or group of characters) that appears one
or more times in a row. This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. Remember, the character
or pattern has to be present consecutively. That is, the character has to repeat
one after the other.

For example, /a+/g would find one match in abc and return ["a"]. Because of the
+, it would also find a single match in aabc and return ["aa"].

If it were instead checking the string abab, it would find two matches and return
["a", "a"] because the a characters are not in a row - there is a b between them.
Finally, since there is no a in the string bcd, it wouldn't find a match.
*/
////////////////////////////////////////////////////////////////////////////////
/*
You want to find matches when the letter s occurs one or more times in Mississippi.
Write a regex that uses the + sign.
*/
/*
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
console.log(result);
//결과
//[ "ss", "ss" ]
*/
////////////////////////////////////////////////////////////////////////////////
////Match Characters that Occur Zero or More Times
/*
The last challenge used the plus + sign to look for characters that occur one or
more times. There's also an option that matches characters that occur zero or more
times.

The character to do this is the asterisk or star: *.
*/
/*
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
*/
//let goRegex = /go*/;
/*
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));
*/
/*
In order, the three match calls would return the values ["goooooooo"], ["g"] and
null.
*/
////////////////////////////////////////////////////////////////////////////////
/*
For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh!
behind the scenes. Create a regex chewieRegex that uses the * character to match
an uppercase A character immediately followed by zero or more lowercase a characters
in chewieQuote. Your regex does not need flags or character classes, and it sould
not match any of the other quotes.
*/
//let chewieRegex = /Aa*/;
//let result = chewieQuote.match(chewieRegex);
////////////////////////////////////////////////////////////////////////////////
////Find Characters with Lazy Matching
/*
In regular expressions, a greedy match finds the longest possible part of a string
that fits the regex(정규식) pattern and returns it as a match. The alternative is
called a lazy match, which finds the smallest possible part of the string that
satisfies the regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically
a pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titanic"].
It finds the largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic"
matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].
*/
////////////////////////////////////////////////////////////////////////////////
/*
Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is
coming</h1>". Remeber the wildcard . in a regular expression matches any character.
*/
/*
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);
*/
////////////////////////////////////////////////////////////////////////////////
////Find One or More Criminals in a Hunt
/*
Time to pause and test your new regex writing skills. A group of criminals escaped
from jail and ran away, but you don't know how many. However, you do know that they
stay close together when they are around other people. You are responsible for
finding all of the criminals at once.

Here's an example to review how to do this:

The regex /z+/ matches the letter z when it appears one or more times in a row.
It would find matches in all of the following strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"

But it does not find matches in the following strings since there are no letter
z characters:

""
"ABC"
"abcabc"
*/
////////////////////////////////////////////////////////////////////////////////
/*
Write a greedy regex that finds one or more criminals within a group of other people.
A criminal is represented by the capital letter C.
*/
//let recreminals = /C+/;
////////////////////////////////////////////////////////////////////////////////
////Match Beginning String Patterns
/*
Prior challenges showed that regular expressions can be used to look for a number
of matches. They are also used to search for patterns in specific positions in strings.

In an earlier challenge, you used the caret character (^) inside a character set to
create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside
of a character set, the caret is used to search for patterns at the beginning of
strings.
*/
/*
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
*/
/*
The first test call would return true, while the second would return false.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use the caret character in a regex to find Cal only in the beginning of the string
rickyAndCal.
*/
/*
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);
*/
////////////////////////////////////////////////////////////////////////////////
////Match Ending String Patterns
/*
In the last challenge, you learned to use the caret character to search for patterns
at the beginning of strings. There is also a way to search for patterns at the
end of strings.

You can search the end of strings using the dollar sign character $ at the end
of the regex.
*/
/*
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
*/
/*
The first test call would return true, while the second would return false.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use the anchor character ($) to match the string caboose at the end of the string
caboose.
*/
/*
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);
*/
////////////////////////////////////////////////////////////////////////////////
////Match All Letters and Numbers
/*
Using character classes, you were able to search for all letters of the alphabet
with [a-z]. This kind of character class is common enough that there is a shorcut
for it, although it includes a few extra characters as well.

The closest character calss in JavaScript to match the alphabet is \w. This shortcut
is equal to [A-Za-z0-9_].This character class matches upper and lowercase letters
plus numbers. Note, this character class also includes the underscore character(_).
*/
/*
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
*/
/*
All four of these test calls would return true.

These shortcut character classes are also known as shorthand character classes.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use the shorthand character class \w to count the number of alphanumeric characters
in various quote and strings.
*/
/*
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;
*/
////////////////////////////////////////////////////////////////////////////////
////Match Everything But Letters and Numbers
/*
You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_]
using \w. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the \w with \W. Note, the opposite pattern uses
a capital letter. This shortcut is the same as [^A-Za-z0-9_].
*/
/*
let shorHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
*/
/*
The first match call would return the value ["%"] and the second would return ["!"].
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use the shorthand character class \W to count the number of non-alphanumeric characters
in various quotes and strings.
*/
/*
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabeRegex).length;
*/
////////////////////////////////////////////////////////////////////////////////
////Match All Numbers
/*
You've learned shortcuts for common string patterns like alphanumerics. Another
common pattern is looking for just digits or numbers.

The shortcut to look for digit character is \d, with al lowercase d. This is equal
to the character class [0-9], which looks for a single character of any number
between zero and nine.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use the shorthand character class \d to count how many digits are in movie titles.
Written out numbers("six" instead of 6) do not count.
*/
/*
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;
console.log(result);
*/
//결과 4
////////////////////////////////////////////////////////////////////////////////
////Match All Non-Numbers
/*
The last challenge showed how to search for digits using the shortcut \d with a
lowercase d. You can also search for non-digits using a similar shortcut that uses
an uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character
class [^0-9], which looks for a single character that is not a number between zero
and nine.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Use the shorthand character class for non-digits \D to count how many non-digits
are in movie titles. 
*/
/*
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;
*/
////////////////////////////////////////////////////////////////////////////////
////Restrict Possible Usernames
/*
Usernames are used everywhere on the internet. They are what give users a unique
identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that
users have to follow when creating their username.

1.Usernames can only use alpha-numeric characters.
2. The only numbers in the username have to be at the end. There can be zero or
   more of them at the end. Username cannot start with the number.
3. Username letters can be lowercase and uppercase.
4. Usernames have to be at least two characters long. A two-character username
   can only use alphabet letters as charcters.
*/
////////////////////////////////////////////////////////////////////////////////
/*
Change the regex userCheck to fit the constraints listed above.
*/
/*
let userName = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
*/
/*
/^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i
^[a-z]: 문자로 시작
[a-z]: 문자
+\d*$: 뒤에 숫자로 끝남 (*의 의미를 아직 잘 모르겠음)
|: 또는
^[a-z]: 문자로 시작
\d\d+$: 숫자2개 또는 그 이상으로 끝남
*/
