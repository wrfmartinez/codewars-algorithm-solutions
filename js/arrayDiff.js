function arrayDiff(a, b) {
  // This function takes two arrays for parameters
  // Remove all occurences of values from array a that match the values in array b
  // Keepiing their order

  // 1. Iterate through array b
  // 2. Iterate through array a
  // 3. Check if each value in array a matches the values in array b
  // 4. Remove that value from array a if it does match using .splice() since .pop() does not remove a value at the current index but rather the value at the end of an array

  for (let i = 0; i < b.length; i++) {
    for (let j = a.length - 1; j >= 0; j--) {
      if (b[i] === a[j]) {
        a.splice(j, 1);
      }
    }
  }

  return a;
}

console.log(arrayDiff([1, 2, 2, 2, 3],[2]));