// function to return numbers of fibonacci series
function fibonacciSeries(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
// console.log(fibonacciSeries(2)); [0,1]
// console.log(fibonacciSeries(3)); [0,1,1]
// console.log(fibonacciSeries(5)); [0,1,1,2,3]

// function to return sum of numbers of fibonacci series
function fiboSum(n) {
  if (n <= 0) {
    return 0;
  }

  let prev = 0;
  let current = 1;
  let sum = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + current;
    sum += next;

    prev = current;
    current = next;
  }

  return sum;
}

// console.log(fiboSum(0)); //0
// console.log(fiboSum(1)); //1
// console.log(fiboSum(2)); //2
// console.log(fiboSum(3)); //4
// console.log(fiboSum(5)); //12
