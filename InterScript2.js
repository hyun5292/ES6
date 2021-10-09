////DNA Pairing
/*
The DNA strand is missing the pairing element. Take each character, get its pair,
and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided
character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are
grouped into one encapsulating array.
*/
//내소스 - AT, GC, TA, CG 이 4가지로 이루어진 걸 말하는 듯
/*
function pairElement(str) {
  var strArr = str.split("");
  var result = [];
  for(let i = 0; i < strArr.length; i++) {
    switch(strArr[i]) {
      case 'G':
        result.push(['G', 'C']);
        break;
      case 'C':
        result.push(['C', 'G']);
        break;
      case 'A':
        result.push(['A', 'T']);
        break;
      case 'T':
        result.push(['T', 'A']);
        break;
    }
  }
  return result;
}
*/
//솔루션 1 - 나랑 똑같은데 for문 안에 switch를 밖으로 꺼낸 경우
/*
function pairElement(str) {
  var paired = [];
  var search = function(char) {
    switch(char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  for(var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}
*/
//솔루션 2
/*
function pairElement(str) {
  var pairs = {  //오 객체로
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  var arr = str.split("");
  //공부 메모에 배열용 반복문이라 되어있네
  return arr.map(x => [x, pairs[x]]);  //오 근데 어뜨케 이 한 문장으로 되는거지ㅋㅋ
}
*/
////////////////////////////////////////////////////////////////////////////////
//Missing letters
/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/
//내소스 - 갈수록 배운거보다는 그냥 java로 하고 있다ㅋㅋ
/*
function fearNotLetter(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var strArr = str.split("");
  var start = alphabet.indexOf(strArr[0]);
  var end = alphabet.indexOf(strArr[strArr.length-1]);
  for(let i = start; i < end; i++) {
    if(alphabet[i] !== strArr[Math.abs(start - i)]) {
      return alphabet[i];
    }
  }
  return undefined;
}
*/
//솔루션 1 - 내가 원한게 이거였어!!
/*
function fearNotLetter(str) {
  for(var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);

    //그래!! 하나씩 증가시키면서 비교할 수 있는 방법이 있을텐데 이걸 몰라쒀!!
    if(code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
*/
//솔루션 2 - 이게 진짜 자바스크립트 응용 소스라 할 수 있지
/*
function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str
    .split("")
    .forEach(letter => {
      if(letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
      } else {
        missing = String.fromCharCode(currCharCode);
      }
    });

  return missing;
}
*/
//솔루션 3 - 그래 알파벳 차이로 구하면 되는데ㅠ
/*
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if(str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {  //t - s = 1, v - t = 2, w - v = 1, x - w = 1
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
*/
////////////////////////////////////////////////////////////////////////////////
////Sorted Union
/*
Write a function that takes two or more arrays and returns a new array of unique
values in the order of the original provided arrays.

In other words, all values from all arrays should be included in their original
order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array
should not be sorted in numerical order.

Check the assertion tests for examples.
*/
//내 소스 - 더 간단히 줄일 수 있는 방법이 없을까...
/*
function uniteUnique(...arr) {
  var newArr = arr[0];

  for(let i = 1; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(newArr.indexOf(arr[i][j]) === -1) {
        newArr.push(arr[i][j]);
      }
    }
  }

  return newArr;
}
*/
//솔루션 1 - 나랑 비슷!
/*
function uniteUnique(arr1, arr2, arr3) {
  var finalArray = [];

  for(var i = 0; i < arguments.length; i++) {  //[arr1, arr2, arr3] => arguments
    var arrayArguments = arguments[i];
    for(var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];
      if(finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}
*/
//솔루션 2 - 다들 arguments 키워드를 썼구나
/*
function uniteUnique(arr) {
  var args = [...arguments];
  var result = [];
  for(var i =0; i < args.length; i++) {
    for(var j = 0; j < args[i].length; j++) {
      if(!result.inlcudes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}
*/
//솔루션 3 - 앞 뒤 배열을 비교하는 개념은 똑같음
/*
function uniteUnique(arr1, arr2, arr3) {
  var newArr;
  var args = Array.prototype.slice.call(arguments);  //익명 함수 호출
  newArr = args.reduce(function(arrA, arrB){
    return arrA.concat(
      arrB.filter(function(i) {
        return arrA.indexOf(i) === -1;
      })
    )
  });

  return newArr;
}
*/
//솔루션 4 - 와 indexOf랑 pos를 비교하니까 딱 맞게 나오는구나 신기
/*
function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while(arguments[i]) {  //매개변수 부분에 안써놔도 함수 호출할 때 보내면 쓸 수 있구나
    concatArr = concatArr.concat(arguments[i]);  //[ 1, 3, 2, 5, 2, 1, 4, 2, 1 ]
    i++;
  }
  var uniqueArray = concatArr.filter(function(item, pos) {  //var 키워드가 빠졌다
    return concatArr.indexOf(item) == pos;  //pos는 0부터 8까지
  });
  return uniqueArray;
}
*/
//솔루션 5 - 나도 Set을 쓸까 했는데 와 이렇게 간단할 수가.. concat을 썼으면 성공이었구나
/*
function uniteUnique(...arrays) {
  const flatArray = [].concat(...arrays);
  return [...new Set(flatArray)];
}
*/
//솔루션 6
/*
function uniteUnique(...arr) {
  return [...new Set(arr.flat())];  //와 .flat(): [1, 3, 2, [5, 2, 1, 4]] -> [1, 3, 2, 5, 2, 1, 4] 이렇게 납작하게? 만드는 기능
}
//const uniteUnique = (...arr) => [...new Set(arr.flat())];
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
*/
////////////////////////////////////////////////////////////////////////////////
////Convert HTML Entities
/*
Convert the characters &, <, >, " (double quote) and '(apostrophe), in a string
to their corresponding HTML entities.
*/
//내 소스 - var regStr = /[<>&\'\"]/gi; 이거 알아놨는데ㅠ 결국 2개 이상일 경우를 못하넹
/*
function convertHTML(str) {
  var chars = {
    '&': "&amp;",
    '<': "&lt;",
    '>': "&gt;",
    '\"': "&quot;",
    '\'': "&apos;"
  };

  var strArr = str.split("");
  for(let i = 0; i < strArr.length; i++) {
    if(chars.hasOwnProperty(strArr[i])) {
      strArr[i] = chars[strArr[i]];
    }
  }
  return strArr.join("");

}
*/
//솔루션 1 - 오홍 switch를 썼군
/*
function convertHTML(str) {
  var temp = str.split("");

  for(var i =0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}
*/
//솔루션 2 - 내가 시도하다가 실패한 거를 더 줄였네ㅠ 와 이렇게 하면 되는구나...
/*
function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}
*/
//솔루션 3 - 그래 split으로 나누고 join으로 합치는거 하려다가 실패해따구ㅠㅠ
/*
function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)  //움 &amp; || & => 이건가 ?
    .join("");
}
*/
////////////////////////////////////////////////////////////////////////////////
////Sum All Odd Fibonacci Numbers
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that
are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every addtional number
in the sequence is the sum of the two previous numbers. The first six numbers of
the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less
than or equal to 10 are 1, 1, 3 and 5.
*/
//내소스 - 자바스크립트인가 그냥 자바인가...
/*
function sumFibs(num) {
  var fibo = [1, 1];
  var result = fibo[0] + fibo[1];
  var i = 2;
  while(true) {
    fibo.push(fibo[i - 2] + fibo[i - 1]);
    if(fibo[i] > num) break;
    else if(fibo[i] % 2 === 1) result += fibo[i];
    i++;
  }
  return result;
}
*/
//솔루션 1 - 배열 안쓰면 이렇게 해야하는구낭
/*
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while(currNumber <= num) {
    if(currNumber % 2 !== 0) {  //홀수일 경우
      result += currNumber;  //더하겠지...
    }
    currNumber += prevNumber;  //그렇지 이전값+현재값 해야지, 1, 2, 3, 5, 8, ...
    prevNumber = currNumber - prevNumber;  //1-0=1, 2-1=1, 3-1=2, 5-2=3, 8-3=5, ...
  }

  return result;
}
*/
//솔루션 2 - unshift()는 배열 맨 앞에 추가
/*
function sumFibs(num) {
  if (num <= 0) return 0;
  const arrFib = [1, 1];
  let nextFib = 0;

  while((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }
  //.filter() -> 홀수인 것, .reduce() -> a는 뭐고 b는 뭘까 지금까지전체값더한것+현재 값?
  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}
*/
////////////////////////////////////////////////////////////////////////////////
