class Solution:
    def maxSum(self, nums: list[int], k: int, mul: int) -> int:
        nums.sort(reverse=True)
        totalsum=0
        for i in range(k):
            curr=nums[i]
            totalsum+=max(curr*mul,curr)
            mul-=1
        return totalsum



