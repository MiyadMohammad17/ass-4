// First Problem:

// The "mindGame" function takes in an input parameter "inputData" and performs several arithmetic operations
//  on it (multiplying by 3, adding 10, dividing by 2, and subtracting 5) before returning the final result.

function mindGame(inputData) {
  let product = inputData * 3;
  let sum = product + 10;
  let quotient = sum / 2;
  let subtraction = quotient - 5;

  return subtraction;
}

console.log(mindGame(50));

// -----------------------------------

// Second Problem:

// The function "evenOdd" takes a string "name" as input and returns whether its length is even or odd.
// If the length is divisible by 2 with no remainder, it returns "even". Otherwise, it returns "odd".

function evenOdd(name) {
  let length = name.length;
  if (length % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(evenOdd("chatgpt"));

// ----------------------------------


// Third Problem:

// The function "isLGSeven" takes in a parameter "value" and checks if it is less than 7. If it is,
// it returns the difference between the value and 7. If it is not, it returns the value multiplied by 2.

function isLGSeven(value) {
  if (value < 7) {
    return value - 7;
  } else {
    return value * 2;
  }
}

console.log(isLGSeven(15));

// ----------------------------------

// Fourth Problem:

// The function "findingBadData" takes in an array of numbers as an argument and counts the number
// of negative numbers in the array. It returns the count of negative numbers found in the array.

function findingBadData(number) {
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(findingBadData([2, -5, -7, -13]));

// -------------------------------------

// Fifth Problem:

// The function "gemsToDiamond" calculates the total number of gems collected by three people (Mahin, Raju and Rifat)
// and returns either the total number of gems or the total -2000, depending on whether the total is greater than 2000 or not.

function gemsToDiamond(mahinsGems, rajusGems, RifatsGems) {
  let Mahin = mahinsGems * 21;
  let Raju = rajusGems * 32;
  let Rifat = RifatsGems * 43;
  let sum = Mahin + Raju + Rifat;
  if (sum > 1000*2) {
    return sum - 2000;
  } else {
    return sum;
  }
}

console.log(gemsToDiamond(1, 1, 1));

// assignment end...........
