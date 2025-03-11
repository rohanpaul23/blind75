/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0;
    let j = i+1;
    let maxProfit = 0;

    while(i<j && j<prices.length){
        if(prices[j] > prices[i]){
            maxProfit = Math.max(prices[j] - prices[i],maxProfit);
            j++;
        }
        else{
            i++;
            j++;
        }
    }
    return maxProfit
};

const prices = [7,6,4,3,1]
console.log(maxProfit(prices))