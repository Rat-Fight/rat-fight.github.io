class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """

        min_price = prices[0]
        max_price = prices[0]

        for i in prices:
            if i < min_price:
                min_price = i

            if i > max_price:
                max_price = i

        return max_price - (min_price if max_price - min_price >= 0 else 0)