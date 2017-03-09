/*
* @Author: jim
* @Date:   2017-03-09 11:07:57
* @Last Modified by:   16bh
* @Last Modified time: 2017-03-09 16:45:14
*/

'use strict';
//https://leetcode.com/problems/two-sum/
//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result =[];
    var len = nums.length;
    for (var i = 0 ; i<len ; i++) {
        for (var j=i+1;j<len;j++) {
            if (nums[i] + nums[j] == target) {
                result.push(i,j);
                return result;
            }
        }
    }
};

var nums = [3,2,4];
var target = 6;
console.log(twoSum(nums,target));
