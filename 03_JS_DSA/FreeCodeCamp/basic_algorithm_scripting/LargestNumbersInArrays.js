// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function LargestOfArrays(arr) {
  let finalArray = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let largestNumber = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    finalArray.push(largestNumber);
  }
  return finalArray;
}

console.log(
  LargestOfArrays([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);
