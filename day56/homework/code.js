function findLargestN(divisor, bound) {
    for (let N = bound; N > 0; N--) {
      if (N % divisor === 0) {
        return N; // We found it!
      }
    }
    return -1; // No valid N found within the given bounds
  }
  
  // Example usage:
  const D = 3; // Divisor
  const B = 20; // Bound
  const largestN = findLargestN(D, B);
  
  if (largestN !== -1) {
    console.log(`The largest N divisible by ${D} and <= ${B} is: ${largestN}`);
  } else {
    console.log(`No valid N found within the given bounds.`);
  }
  

{}



  