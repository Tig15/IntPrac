function greatestProfit(prices){
    let minBuyPrice = prices[0];
    let maxSellPrice = prices[1];
    let maxProfit = maxSellPrice - minBuyPrice;

    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            const profit = prices[j] -prices[i]
            if(profit>maxProfit){
                maxProfit = profit
                minBuyPrice = prices[i]
                maxSellPrice = prices[j]
            }
        }
    }

    return {minBuyPrice, maxSellPrice, maxProfit}
}

const input = [3,5,6,7,2,10]
console.log(greatestProfit(input))

// Using Math Method...
