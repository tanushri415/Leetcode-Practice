// Given an array nums of size n, return the majority element.The majority element is the element that appears more than ⌊n / 2⌋ times.You may assume that the majority element always exists in the array.



//     Example 1:

// Input: nums = [3, 2, 3];
// Output: 3
// Example 2:

// Input: nums = [2, 2, 1, 1, 1, 2, 2];
// Output: 2;


// Constraints:

// n == nums.length;
// 1 <= n <= 5 * 104
//     - 109 <= nums[i] <= 109;


var majorityElement = function (nums) {
    let k = nums.length / 2;
    let countMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!countMap.has(nums[i])) {
            const occurance = nums.filter((num) => num === nums[i]).length;
            countMap.set(nums[i], occurance);
        }
    }

    for (let key of countMap.keys()) {
        if (countMap.get(key) > k) {
            return key;
        }
    }
};
const output = majorityElement([3, 2, 3]);
console.log(output);

// solution approach 2

var majorityElement = function (nums) {
    let dict = {};

    // Count the occurrences of each element
    nums.forEach((element) => {
        if (!dict.hasOwnProperty(element)) {
            dict[element] = 1;
        } else dict[element]++;
    });

    //{ '2': 1, '3': 2 } - 1st test case
    //{ '1': 3, '2': 4 } - 2nd test case

    // Find the element with the maximum count
    let keys = Object.keys(dict);
    keys.sort((a, b) => dict[b] - dict[a]);
    return keys[0];
};