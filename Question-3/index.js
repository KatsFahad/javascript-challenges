/*Write a function named twoSum which takes two parameters: nums and target.
Given an array of integer nums and an integer target, 
return indices of the two numbers such that they add up to the target. 
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.*/

let nums = [2, 7, 11, 15];
let target = 9;

function twoSum(nums, target){
    let sum = 0;
    for (let i = 0; i<nums.length; i++){
        sum += nums[i];
        if (sum === target){
            return nums[i];
        }
    }
}

console.log(twoSum(nums, target));