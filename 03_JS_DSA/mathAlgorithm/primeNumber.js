const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrimeNumber(2)); //true
console.log(isPrimeNumber(3)); //true
console.log(isPrimeNumber(4)); //false
console.log(isPrimeNumber(7)); //true
console.log(isPrimeNumber(9)); //false
