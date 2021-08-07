function compareArrays(arr1, arr2) {
  let result;

  if (arr1.length != arr2.length) {
    return false;
  }

  result = arr1.every((value, index) => arr2[index] === value)

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((value) => value > 0 && value % 3 === 0).map((value) => value * 10)
  
  return resultArr; // array
}
