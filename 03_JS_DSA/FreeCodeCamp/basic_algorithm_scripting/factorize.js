function factorialize(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorialize(num - 1); //recursion method
}

// function factorialize(num) {
//   if (num <= 1) {
//     return 1;
//   }
//   let product = 1;
//   for (let i = 2; i <= num; i++) { //looping method
//     product *= i;
//   }
//   return product;
// }

console.log(factorialize(5));
