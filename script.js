let arr = [
  1, 2, 3, 4, 5
];
let rezult = reduce(arr, callBack);

console.log(rezult);

function reduce(array, callBack, initialValue) {
  let ret;
  for (let i = 0; i < 1; i++) {
    if (initialValue) {
      ret = callBack(initialValue, array[i], i, array)
    } else {
      ret = callBack(i, array[i++], i, array)
    }
  }
  for (let i = 1; i < array.length; i++) {
    ret = callBack(ret, array[i], i, array)
  }
  return ret
}

function callBack(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
}