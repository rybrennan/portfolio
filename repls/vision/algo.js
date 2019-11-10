// let arr1 = [2, 1, 5, 9, 4, 3]
// //[1,2,3,4]
// //what is the logi
// const subArr = (arr) => {
//   const set1 = new Set(arr);
//   let current;
//   let count = 0;
//   let longest = 1;

//   set1.forEach((number) => {
//     if (!set1.has(number - 1)) {
//       current = number;
//       while (set1.has(current + 1)) {
//         count ++;
//         current = current + 1;
//       }
//       if (count > longest) {
//         longest = count;
//       }
//     }
//   });
//   return longest;
// };
// console.log(subArr(arr1))
//when i iterate over all of elements. if i have a number that is smaller, then I know that is not the starting point

// let arr = [3,4,3,-7,5,5,5];

// var maxSubArray = function(nums) {
//   let max = nums[0];
//   let sum = nums[0];

//   for (var i = 1; i < nums.length; i ++) {
//     if (nums[i] + sum > nums[i]) {
//       sum = sum + nums[i];
//     } else {
//       sum = nums[i];
//     }
//     max = Math.max(max, sum);
//   }

//   return max
// };

// console.log(maxSubArray( [3, 4, -7, 5, 0]))

// const findSeq = (arr) => {
//   let set = new Set(arr);
//   let max = 0;
//   let count = 1;
//   set.forEach((number) => {
//     //our starting point
//     if (!set.has(number - 1)) {
//       let current = number;
//       while(set.has(current + 1)) {
//         count ++;
//         current = current + 1;
//       }
//       max = Math.max(max, count);
//       count = 1;
//     }
//   });
//   return max
// }
// console.log(findSeq([2,5,9,4,3,6]))




// const findCont = (arr) => {
//   let allTimeMax = 0;
//   let count = 0;
//   let max = 0;

//   for (var i = 0; i < arr.length; i ++) {
//     count += arr[i];
//     max = Math.max(count, max)
//   }

//   return max;
// };

// console.log(findCont([1,2,-1]))


// const largetsContigousSum = (arr) => {
//   let max = arr[0];
//   let sum = arr[0];

//   for (let i = 1; i < arr.length; i ++) {
//     const number = arr[i];
//     //checking to see if SUM is NOT negative
//     if (sum + number > number) {
//       sum = number + sum;
//       if (sum > max) {
//         max = sum;
//       }
//     } else {
//       //trashing the negative sum and resetting
//       sum  = number;
//     }
//   }
//   return max;
// }
// console.log(largestContigousSum([-2,1,-3,4,-1,2,1,-5,4]));
//output: 6
// [4,-1,2,1] has the largest sum = 6.

//0,1,1,2,3,5,8,11

const fib = (n) => {
  if (n === 0 || n == 1) {
    return n;
  }
  let prevPrev = 0;
  let prev = 1;
  let current;

  for (var i = 1; i < n; i ++) {
    //4,3,2,1

    current = prev + prevPrev; //1 / 2
    prevPrev = prev;
    prev = current;
    console.log('Current', current);
    console.log('PP', prevPrev)
    console.log('prev', prev)
    console.log('-----')
  }
  return current
}
console.log('answer', fib(6))



