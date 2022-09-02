/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = function (prices) {
  let n = prices.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (prices[j]<=prices[i]) {
        prices[i] = prices[i] - prices[j]
        break
      }
    }
  }
  return prices
};
