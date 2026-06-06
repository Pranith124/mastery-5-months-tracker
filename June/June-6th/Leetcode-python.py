class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        n=len(nums)
        leftsum=[0]*n
        rightsum=[0]*n
        for i in range(1,n):
            leftsum[i]+=nums[i-1]+leftsum[i-1]
            rightsum[n-i-1]+=nums[n-i]+rightsum[n-i]
        for i in range(n):
            leftsum[i]=abs(leftsum[i]-rightsum[i])
        return leftsum

        