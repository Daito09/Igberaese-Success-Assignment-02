const assignment = require('./assignment.js');

const { sumOfNumbers, countEvenNumbers, celsiusToFahrenheit } = assignment;

if (sumOfNumbers && typeof sumOfNumbers === 'function'){
    console.log(sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

if (countEvenNumbers && typeof countEvenNumbers === 'function'){
    console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}
function countEvenNumbers(arrayOfNumbers){
  let count = 0
  for (let i = 0 < arrayOfNumbers.length; i++){
    if(arrayOfNumbers[i] % 2 == 0){
      count++
    }
  }
  return count;
}

if (celsiusToFahrenheit && typeof celsiusToFahrenheit === 'function'){
    console.log(celsiusToFahrenheit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}