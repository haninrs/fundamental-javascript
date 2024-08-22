// ● You are given an array prices where prices[i] is the price of a given stock on the ith day.
// ● You want to maximize your profit by choosing a single day to buy one stock and choosing a different
// day in the future to sell that stock.
// ● Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit,
// return 0.

// ● Example 1:             
    // ○ Input: prices = [7,1,5,3,6,4]  <- day 1,2,3,4,5,6 
    // ○ Output: 5    <- beli di day 2 (harganya 1) , jual di day 5 (harganya 6) 
    // ○ Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    // ○ Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// ● Example 2:
    // ○ Input: prices = [7,6,4,3,1]
    // ○ Output: 0
    // ○ Explanation: In this case, no transactions are done and the max profit = 0.

    let prices = [7,1,5,3,6,4]
    
    function stock(prices){
        let min = Math.min(...prices)  // cari nilai terkecil
        let idx = prices.indexOf(min)   // idx ke berapa nilai terkecil
        let newPrices = prices.splice(idx)  // bikin array baru mulainya dari idx nilai terkecil
        let max = Math.max(...newPrices)   // cari nilai terbesar
        let res = max - min             //
        
        return {min, idx, newPrices, res}
    }
    console.log(stock(prices));
    console.log(stock([2,4,1]));  // ini eror


    // function