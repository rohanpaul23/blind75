/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let res = -1;
    let l = 0;
    let r = nums.length -1;
    while(l<=r){
        if(nums[l]<nums[r]){
            res = nums[l];
            break;
        }
        let mid = Math.floor((r-l+1)/2);

        if(nums[mid] >= nums[r]){
            l = mid + 1;
        }
        else {
            r =  mid-1;
        }
    }
    return res;
} 
// const nums = [11,13,15,17];
const nums = [8,9,10,0,1,2,3,4,5,6,7];
console.log(findMin(nums))