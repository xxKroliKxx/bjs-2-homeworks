
'use strict'

function solveEquation(a, b, c) {
  let arr = [];

  let d = Math.pow(b, 2) - (4 * a * c);
  if (d < 0) {
    return arr;
  } else if (d == 0) {

    arr[0] = (-b) / (2 * a);
    return arr;
  } else {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  if (typeof percent !== "number") {
    let nPercent = Number(percent)
    if (isNaN(nPercent) || nPercent === 0) {
      return 'Параметр "Процентная ставка" содержит неправильное значение "' + percent + '"';
    }
    percent = nPercent;
  }

  if (typeof amount !== "number") {
    let nAmount = Number(amount)
    if (isNaN(nAmount) || nAmount === 0) {
      return 'Параметр "Общая стоимость" содержит неправильное значение "' + amount + '"';
    }
    amount = nAmount;
  }
  if (amount <= 0) {
    return 'Сумма кредита не может быть отрицательной';
  }

  if (typeof contribution !== "number") {
    let nContribution = Number(contribution)
    if (isNaN(nContribution)) {
      return 'Параметр "Начальный взнос" содержит неправильное значение "' + contribution + '"';
    }
    contribution = nContribution;
  }
  // if (amount - contribution <= 0) {
  //   return 'Сумма взноса не может превышать суммы кредита, а так же быть отрицательной';
  // }

  if (!date.getTime) {
    return 'Не верно указан параметр date';
  } else if (date < new Date()) {
    return 'Дата кредитования не может быть меньше текущей даты';
  }


  let loanBody = amount - contribution;
  let loanTerm = numberOfMonths(new Date(), date);
  let interestPerMonth = percent * 0.01 / 12;
  let monthlyPayments = loanBody * (interestPerMonth + interestPerMonth / (Math.pow(1 + interestPerMonth, loanTerm) - 1));
  let totalAmount = monthlyPayments * loanTerm;
  totalAmount = Number(totalAmount.toFixed(2));
  console.log(totalAmount);
  return totalAmount;
}

function numberOfMonths(dateFrom, dateTo) {
  return dateTo.getMonth() - dateFrom.getMonth() +
    ((dateTo.getFullYear() - dateFrom.getFullYear()) * 12)
}
