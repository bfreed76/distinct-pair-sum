function distinctPairSum(arr, k) {
  const newObj = {};

  if (arr.length < 2) {
    return [];
  }

  for (i = 0; i < arr.length; i++) {
    let current = arr[i]
    let next = arr[i+1]

    if (current + next === k) {
      newObj[current] = [current, next]
      i++
    }

  }
  
  return Object.values(newObj);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log(distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log(distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));

  console.log("");

  console.log("Expecting: []");
  console.log(distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 100));

  console.log("");

  console.log("Expecting: []");
  console.log(distinctPairSum([], 100));

  console.log("");

  console.log("Expecting: [[59, 41]]");
  console.log(distinctPairSum([59, 41], 100));

  console.log("");

  console.log("Expecting: []");
  console.log(distinctPairSum([59], 100));

  console.log("");

  console.log("Expecting: [[0, 0], [10, -10], [3, -3]]");
  console.log(distinctPairSum([1, 0, 0, 10, -10, 5, 4, 3, -3, -3], 0));
}

module.exports = distinctPairSum;

// Create newObj to get an array of arrays as return object type.
// If arr has less than 2 elements, return an empty array.
// Loop through array, incrementing once each loop. Assign variables to
// current and next elements. If current and next equal k, then add
// key (current, or whatever but must be unique) and value ([current, next]) pair.
// Then, to return an arr of arrays, return Object.values of newObj. This will
// return only the values of newObj, which are arrays of distinct pairs.
