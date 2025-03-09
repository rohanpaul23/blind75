var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n);
    const leftArray = new Array(n);
    const rightArray = new Array(n);

    leftArray[0] = 1;
    rightArray[n - 1] = 1;
    for (let i = 1; i < n; i++) {
        leftArray[i] = nums[i - 1] * leftArray[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        rightArray[i] = nums[i + 1] * rightArray[i + 1];
    }
    for (let i = 0; i < n; i++) {
        res[i] = leftArray[i] * rightArray[i];
    }
    return res;
};  
// Time complexity: O(n)