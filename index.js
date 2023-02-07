// First Problem

function mindGame(data) {
  let a = data * 3;
  let b = a + 10;
  let c = b / 2;
  let d = c - 5;

  return d;
}

console.log(mindGame(50));

// Second Problem

function evenOdd(data) {
  let length = data.length;
  if (length % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(evenOdd("Batch7"));

// Third Problem

function isLGSeven(data) {
  if (data < 7) {
    return data - 7;
  } else {
    return data * 2;
  }
}

console.log(isLGSeven(15));

// Fourth Problem

function findingBadData(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (number[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(findingBadData([2, -5, -7, -13]));

// Fifth Problem

function gemsToDiamond(a, b, c) {
  let first = a * 21;
  let Second = b * 32;
  let third = c * 43;
  let sum = first + Second + third;
  if (sum > 2000) {
    return sum - 2000;
  } else {
    return sum;
  }
}

console.log(gemsToDiamond(1, 1, 1));

// assignment end...........
