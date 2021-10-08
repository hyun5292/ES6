////Sum All Numbers in a Range
/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus
the sum of all the numbers between them. The lowest number will not always come
first.

For example, sumAll([4, 1]) should return 10 because sum of all the numbers between
1 and 4 (both inclusive) is 10.
*/
//내 소스
/*
function sumAll(arr) {
  let sum = 0;
  let start = 0, end = 0;
  if(arr[0] < arr[1]) {
    start = arr[0];
    end = arr[1];
  }
  else {
    start = arr[1];
    end = arr[0];
  }
  for(let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
*/
//솔루션 1 - 나랑 제일 비슷ㅋㅋ
/*
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}
*/
//솔루션 2 - ?? 무슨 공식이 있는건가??
/*
const sumAll = arr => {
  const startNum = arr[0];                            // 4
  const endNum = arr[1];                              // 1
  const numCount = Math.abs(startNum - endNum) + 1;   // |4 - 1| + 1 = 4
  const sum = ((startNum + endNum) * numCount) / 2;   //((4 + 1) * 4) / 2 = 10
  return sum;
};
*/
//솔루션 3 - 가장 심플하고 간단한?
/*
function sumAll(arr) {
  let sumBetween = 0;
  for(let i = Math.min(...arr); i < = Math.max(...arr); i++) {
    sumBetween += i;
  }
  reutrn sumBetween;
}
*/
//솔루션 4 - 배운 것 응용력 갑 근데 복잡해ㅋㅋ 개발자들 시키면 이렇게 안할듯
/*
function sumAll(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last
    ? first + sumAll([first + 1, last])
    : first;
}
*/
////////////////////////////////////////////////////////////////////////////////
////Diff Two Arrays
/*
Compare two arrays and return a new array with any items only found in one of the
given arrays, but not both. In other words, return the symmetric difference of
the two arrays.
*/
//내 소스 - 구차하다 증말ㅋㅋ
/*
function diffArray(arr1, arr2) {
  var newArr = [];
  for(let i = 0; i < arr1.length; i++) {
    if(arr2.indexOf(arr1[i]) == -1) {
      newArr.push(arr1[i]);
    }
  }
  for(let i = 0; i < arr2.length; i++) {
    if(arr1.indexOf(arr2[i]) == -1) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
*/
//솔루션 1 - 아 메서드 1개를 재사용해도 되는데 난 2번을 썼구나 하핳
/*
function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    for (var i = 0; i < first.length; i++) {
      if(second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}
*/
//솔루션 2 - 아 와 천재다 일단 합쳐서 포함 안된 경우를 찾았구나
/*
function diffArray(arr1, arr2) {
  return arr1
  .concat(arr2)
  .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
*/
//솔루션 3 - 뭔가 솔루션 1을 더 간단하게 만든 느낌
/*
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1) //a 중에서 b에 없는 것만 골라내서 return
  }
}
*/
////////////////////////////////////////////////////////////////////////////////
////Seek and Destroy
/*
You will be provided with an initial array (the first argument in the destroyer
function), followed by one or more arguments. Remove all elements from the initial
array that are of the same value as these arguments.

Note: You have to use the argument object.
*/
//내 소스 - ㅎㅎ 앞에 문제랑 같은 거 같아서 써봤다, 대신 매개변수 ...arr2는 내 아이디어
/*
function destroyer(arr1, ...arr2) {
  return arr1
  .concat(arr2)
  .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
*/
//솔루션 1 - 가장 기초적인 방법이라 할 수 있는 중첩 for문 이걸 생각 안한거 아니쥐 근데 null이 아닌것까지 배제해줬구나
/*
function destroyer(arr) {
  let valsToRemove = Object.values(arguments).slice(1);

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < valsToRemove.length; j++) {
      if(arr[i] === valsToRemove[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(item => item !==null);
}
*/
//솔루션 2 - 모르는 기능까지 써서 헷갈린당
/*
function destroyer(arr) {
  //Array.from() - 배열같은 객체나 반복 가능한 객체를 얕게? 복사
  //Array.from('foo') -> Array ["f", "o", "o"]
  //Array.from([1, 2, 3], x => x + x) -> [2, 4, 6]
  var valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}
*/
//솔루션 3 - 아... 내 개념이 틀린건 아니지만 어느정도 잘못됐구낭...
//굳이 배열 2개를 서로 비교하는게 아니라 concat은 필요없구낭 그래도 뿌듯ㅋㅋ
/*
function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}
*/
////////////////////////////////////////////////////////////////////////////////
////Wherefore(그런 이유로?) art thou(왜 너는ㅋ )
/*
Make a function that looks through an array of objects (first argument) and returns
an array of all objects that have matching name and value pairs (second argument).
Each name and value pair of the source object has to be present in the object
from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the
second argument is {last: "Capulet"}, then you must return the third object from
the array (the first argument), because it contains the name and its value, that
was passed on as the second argument.
*/
//내 소스 - 와 어찌저찌 성공해따...!
/*
function whatIsInAName(collection, source) {
  var arr = [];
  var indexVal = Object.keys(source);

  for(let i = 0; i < collection.length; i++) {
    var rstCnt = 0;
    for(let j = 0; j < indexVal.length; j++) {
      if(collection[i][indexVal[j]] === source[indexVal[j]]) {
        rstCnt += 1;
      }
    }
    if(rstCnt === indexVal.length) {
      arr.push(collection[i]);
    }
  }

  return arr;
}
*/

//솔루션 1 - 나는 for문으로 커버한 걸 .filter로 대체
/*
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      if(
        //collection에 srcKeys[i]라는 name이 없고 값이 다른 경우
        !obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;  //이 경우만 거르고
      }
    }
    return true;  //나머지는 OK
  });
}
*/
//솔루션 2 - 나도 .every()를 쓰려고 노력했으나 실패해따...ㅠ 더 많이 자주 써봐야 할 듯ㅠㅠ
/*
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}
*/
//솔루션 3 - 다시 공부해야게쒀 .reduce() 자식...
/*
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys
    .map(function(key) {
      //collection에 srcKeys[i]라는 name이 있고 값이 같은 경우
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    })
    .reduce(function(a, b) {  //얘가 아직 이해가 안감ㅠ
      return a && b;
    });
  });
}
*/
////////////////////////////////////////////////////////////////////////////////
////Spinal(척추) Tap Case
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/
//내 소스 - 이게 최선이당ㅠ
/*
function spinalCase(str) {
  var newStr = str.split(/\W+/i);
  var result = newStr.join('-').toLowerCase();

  return result;
}
*/
//솔루션 1
/*
function spinalCase(str) {
  var regex = /\s+|_+/g;  //\s는 여백, _조합어
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");  // ex)cAse?를 case로 대체

  return str.replace(regex, "-").toLowerCase();  //regex를 -로 대체 후 소문자화
}
*/
//솔루션 2
/*
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");  //얘가 내 문제를 해결해주나부다

  return str
  .toLowerCase()
  .split(/(?:_| )+/)  //?이거 패턴
  .join("-");
}
*/
//솔루션3
/*
function spinalCase(str) {
  return str
  .split(/\s|_|(?=[A-Z])/)  //공백 또는 - 또는 A-Z를 기준으로 나누기
  .join("-")
  .toLowerCase();
}
*/
////////////////////////////////////////////////////////////////////////////////
////Pig Latin
//(어린 아이 말장난 - boy를 oybay라 하는 것과 같이 맨 앞자음을 어미로 돌리고 그 뒤에
//ay를 붙히는 것처럼 하는 말장난)
/*
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant(자음) or consonant
cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Inputs strings are guaranteed to be
English words in all lowercase.
*/
//내소스 - pig Latin 자체가 규칙이 뚜렸하진 않지만 어쨌든 돌아간당ㅋㅋㅋ
/*
function translatePigLatin(str) {
  if((/^[aeiou]/i).test(str)) {
    return str + "way";
  } else {
    if((/^rh/i).test(str)) {
        return str + "ay";
    } else {
      var first = str.match(/[a-z]*?[aeiou]/i)[0];
      first = first.substr(0, first.length-1);
      str += first;
      str = str.substr(first.length, str.length);
      return str + "ay";
    }
  }
}
*/
//솔루션 1 - 원리는 이해가지만 부분부분은 이해가 안간당...
/*
function translatePigLatin(str) {
  //자음으로 시작하는 최소한의 알파벳, 하지만 대문자로 시작하면 어뜨케? i를 안붙여주넹
  let consonantRegex = /^[^aeiou]+/;  //rhythm 이건 자음이 아예 없다고 치는 건가
  let myConsonants = str.match(consonantRegex);  //오 나랑 비슷한 생각이야
  return myConsonants !== null
    ? str
        //여기에 왜 consonantRegex가 들어가지?? 일단 그 교체될 부분을 가리키는 거 같은데
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}
*/
//솔루션 2 - 오 나름 깔끔하고 제일 이해하기 쉬워서 가장 마음에 든다
/*
function translatePigLatin(str) {
  var pigLatin = "";
  var regex = /[aeiou]/gi;

  if(str[0].match(regex)) {  //이거는 모음으로 시작하는 경우
    pigLatin = str + "way";
  } else if(str.match(regex) === null) {  //단어가 자음으로만 있는 경우
    pigLatin = str + "ay";
  } else {
    var vowelIndice = str.indexOf(str.match(regex)[0]);  //단어에서 모음의 위치
    //모음 시작 위치부터 끝까지
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return pigLatin;
}
*/
//솔루션 3 - 소스가 짧은게 무조건 좋기보단 직독직해가 쉬운게 좋은 거 같다
/*
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";  //단어가 모음으로 시작하는 경우
  const consonantCluster = str.match(/^[^aeiou]+/)[0]; //자음으로 시작하는 경우
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}
*/
//솔루션 4 - 호오 엄청 깔꼼 근데 주석처리가 안되넹ㅋㅋ
/*
function translatePigLatin(str) {
  return str
  */
    //.replace(/^[aeiou]\w*/, "$&way") //모음으로 시작하는 경우
    //자음으로 시작하는 경우, $1이 (^[^aeiou]+), $2가 (\w*)인가
/*    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}*/
//솔루션 5 - 호오 재밌는 방법이야
/*
function translatePigLatin(str, charPos = 0) {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0])  //모음으로 시작하면
    ? str + (charPos === 0 ? 'way' : 'ay')  //맨 처음 시작이면 way, 아니면 ay
    : charPos === str.length  //맨 마지막 철자면
      ? str + 'ay'  //ay
      //str.slice(1) -> 맨 처음 철자 빼고
      : translatePigLatin(str.slice(1) + str[0], charPos + 1);  //아니면 반복 -> 모음이 나올때까지 반복하는 듯
}
*/
////////////////////////////////////////////////////////////////////////////////
