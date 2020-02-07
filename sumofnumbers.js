const testData = [1, 2, 3, 4, 5];

function sumOfNumsFor(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}
console.log(sumOfNumsFor(testData));

function sumOfNumsWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}
console.log(sumOfNumsWhile(testData));

// function sumOfNumsRecursion(nums) { }
