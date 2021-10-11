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
////
