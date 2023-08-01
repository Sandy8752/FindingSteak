const arr = [1, -2, 3, 4, 0, -5, 6, -7, -8];
// const result = findMaxStreaks(arr);

function findMaxStreaks(intArray) {
  let maxPositiveStreak = 0;
  let maxNegativeStreak = 0;
  let currentPositiveStreak = 0;
  let currentNegativeStreak = 0;

  for (let i = 0; i < intArray.length; i++) {
    if (intArray[i] > 0) {
      currentPositiveStreak++;
      currentNegativeStreak = 0;
      maxPositiveStreak = Math.max(maxPositiveStreak, currentPositiveStreak);
    } else if (intArray[i] < 0) {
      currentNegativeStreak++;
      currentPositiveStreak = 0;
      maxNegativeStreak = Math.max(maxNegativeStreak, currentNegativeStreak);
    }
  }

  return {
    maxPositiveStreak,
    maxNegativeStreak
  };
}
let intArray = [-1, -3, 2, 4, 9, -10, 24, -30, -33, -29, 1, 8, 19, 23];
console.log(findMaxStreaks(intArray));

