const factorial = (number) => {
  if (number <= 1) return 1;
  return BigInt(number) * BigInt(factorial(number - 1));
}

console.time("res");

// factorial(31_931);
factorial(1000);

console.timeEnd("res");