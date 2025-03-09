var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    let res = []
    const buckets = Array(nums.length + 1).fill([]); 
    nums.forEach(num => {
        freqMap.set(num, freqMap.get(num) + 1 || 1);
    })
    console.log(freqMap)

    for(const [num, freq] of freqMap) {
        if(buckets[freq].length === 0) {
            buckets[freq] = [num];
        }
        else {
            buckets[freq].push(num);
        }
        
    }
    for(let i = buckets.length - 1; i >=0; i--) {
        if (res[j].length !== 0) {
            res.push(...buckets[j])
            if (res.length === k) {
                break
            }
        }
    }
    return res;
};


const nums = [1,1,1,2,2,3]
const k = 2

console.log(topKFrequent(nums, k)) // [1, 2]