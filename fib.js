const fib = (laps, oldNumber = 1, oldestNumber = 0) => {
  if (laps === 0) return oldestNumber;
  if (laps === 1) return oldNumber;
  const sum = BigInt(oldNumber) + BigInt(oldestNumber);
  return fib(laps - 1, sum, oldNumber);
};

console.time("res");
// fib(1_000_000)
fib(5_000)
console.timeEnd("res");