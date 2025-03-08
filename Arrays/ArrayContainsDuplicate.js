/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Using Hash Set
var containsDuplicate = function(nums) {
    
    const set = Set(nums.length);
    return nums.length != set.size;
};

// Using Hash Map
var containsDuplicate = function(nums) {
    // Using Hash Set
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            return true;
        }
        map.set(nums[i], 1);
    }
    return false
};
