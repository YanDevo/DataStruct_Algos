// Each new term in the Fibonacci sequence is generated by adding the previous two terms.
// By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million,
// find the sum of the even-valued terms.

let fib = (num) => {
  const fibb = [0, 1];
  for (let i = 2; i < num; i++) {
    fibb[i] = fibb[i - 1] + fibb[i - 2];
  }
  return fibb;
};

console.log(fib(5));

console.log('this is fib');
