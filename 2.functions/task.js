// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
  avg = 0;
  min = Infinity;
  max = -Infinity;

  arr.forEach(item => {
    sum += item
    min = min > item ? item : min;
    max = max < item ? item : max;
  });

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  arr.forEach(item => sum += item);
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  arrOfArr.forEach(item => {
    let sum = func(item);
    max = sum > max ? sum : max;
  });

  return max
}

// Задание 3
function worker2(arr) {
  let min, max;
  min = Infinity;
  max = -Infinity;

  arr.forEach(item => {
    min = min > item ? item : min;
    max = max < item ? item : max;
  });

  return max - min;
}
