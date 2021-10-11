////Drop it
/*
Given the array arr, iterate through and remove each element starting from the first
element (the 0 index) until the function func returns true when the iterated element
is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr
should be returned as an empty array.
*/
//내소스 - 심플하군... 더 심플하게....더...더!!
/*
function dropElements(arr, func) {
  var result = [];
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      result = arr.slice(i);
      break;
    }
  }
  return result;
}
*/
//솔루션 1 - 아 해당하지 않는 것을 앞에서 하나씩 지워도 되지
/*
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();  //맨 앞 제거
    console.log(arr);
  }
  return arr;
}
*/
//솔루션 2 - 와 findIndex에 함수를 넣어도 되는구나!
/*
function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func); //해당하는 첫 index를 반환하나부다
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}
*/
//솔루션 3 - 솔루션 1을 for문으로 바꾼 것, 내 소스랑 비슷
/*
function dropElements(arr, func) {
  let originalLen = arr.length;
  for(let i = 0; i < originalLen; i++) {
    if(func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
*/
//솔루션 4 - 이런 함수 속에 함수? 형식으로 만드는 경우가 많구나
/*
function dropElements(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
    ? (dropElements(arr.slice(i + 1), func, i))
    : arr;
}
*/
////////////////////////////////////////////////////////////////////////////////
////steamroller
/*
Flatten a nested array. You must account for varying levels of nesting.
*/
//내소스 - 줄였다!! 드디어 줄였드아아아!!
/*
function steamrollArray(arr, result) {
  if(result == null) result = [];
  arr.map(a => Array.isArray(a) ? steamrollArray(a, result) : result.push(a));
  return result;
}
*/
//솔루션 1 - 하하 내가 줄이기 전에 이거랑 비슷했지 하하
/*
function steamrollArray(arr) {
  const flattenedArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      flattenedArray.push(...steamrollerArray(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}
*/
//솔루션 2 - .some()...좋군 역시 함수 안에 함수구나
/*
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  //배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
*/
//솔루션 3 - 내가 하다가 막혔던 것을 조건으로 해결했구나 그래도 되는구낭
/*
function steamrollArray(arr) {
  return arr
    .toString()  //a,b
    .replace(",,", ",")  //1,2,,3 -> 1,2,3
    .split(",")
    .map(function(v) {
      if(v == "[object object]") {  //이거 예시 [1, [], [3, [[4]]]]에서 경험해따...
        return {};
      } else if(isNaN(v)) {
        return v;
      } else {
        return parseInt(v);  //만약 숫자인데 string된거면 다시 숫자로
      }
    });
}
*/
//솔루션 4 - 아 매개변수에서 =[]로 초기화해도 값이 전달되면 유지되는구나
/*
function steamrollArray(val,flatArr=[]) {
  val.forEach(item => {
    if(Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}
*/
//솔루션 5 - 크으으 다들 Array.isArray() 썼구나 인터넷에서 잘 찾았군 배열 깊이 검색하다가 나왔는데
//근데 !Array.isArray(elem) 왜 이거 앞에 !가 붙은건지 더 고민해봐야할듯
/*
function steamrollArray(arr, flatArr = []) {
  const elem = arr.pop(); //.pop()이 배열 맨 뒤 추출?, [1, [2], [3, [[4]]]]->[ 3, [ [ 4 ] ] ]
  return elem
    ? !Array.isArray(elem)  //배열인가 아닌가
      ? steamrollArray(arr, [elem, ...flatArr])  //배열이 아니면
      : steamrollArray(arr.concat(elem), flatArr)
    : flatArr;  //배열이면
}
*/
////////////////////////////////////////////////////////////////////////////////
