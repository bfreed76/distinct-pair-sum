function distinctPairSum(arr, k) {
  const newArr = [];

  if (arr.length < 2) {
    return newArr;
  }

  for (i = 0; i < arr.length; i++) {
    let current = arr[i]
    let next = arr[i+1]

    console.log("cur", current, "nex", next, "newArr", newArr)

    if (current + next === k) {
      newArr.push(current, next) 
      i++
    }

  }

  // let summed = [arr[i], arr[i + 1]]
  // summed === k ? newArr.push(summed) : null;
  // console.log(arr[i], "sec", arr[i + 1], "sum", summed);
  
  return newArr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Iterate through array if array is not empty.
// Add each pair of numbers starting from first and second elements.
// If the sum of the numbers equals k, slice them from arr and
// push that set of numbers into new array. OR push them into new array and 
// increment an additional time so that the same number isn't counted twice.
// Finally concat and return new array.
