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
function whatIsInAName(collection, source) {
  var arr = [];

  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
