class Solution:
    def countMajoritySubarrays(self, nums: List[int], target: int) -> int:
        res=0
        n=len(nums)
        for i in range(n):
            cnt=0
            for j in range(i,n):
                if nums[j]==target:
                    cnt+=1
                if 2*cnt>j-i+1:
                    res+=1
        return res

        