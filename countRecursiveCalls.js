const countRecursiveCalls = (count = 1) => {
  if (count === 1) return 1;
  return 1 + countRecursiveCalls(count - 1);
}

// console.log(countRecursiveCalls(31_931))
console.log(countRecursiveCalls(39_912))