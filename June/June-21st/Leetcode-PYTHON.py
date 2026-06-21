class Solution:
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        costs.sort()
        buy=0
        for i in range(len(costs)):
            if costs[i]<=coins:
                buy+=1
                coins-=costs[i]
        return buy

        