/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let longestLength = 0;
    const map = new Map();
    for (let i = 0; i < nums.length; i++){
        map.set(nums[i], false)
    }

    nums.forEach(num => {
        let currLength = 1;
        let nextNum = num + 1;

        while (map.has(nextNum) && map.get(nextNum) === false) {
            currLength++;
            map.set(nextNum, true)
            nextNum++
        }

        let prevNum = num - 1;

        while (map.has(prevNum) && map.get(prevNum) === false) {
            currLength++;
            map.set(prevNum, true)
            prevNum--;
        }
        longestLength = Math.max(longestLength,currLength)
    });
    return longestLength;
};