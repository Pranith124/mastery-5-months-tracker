class Solution:
    def check(self, nums: List[int]) -> bool:
        n=len(nums)
        for i in range(len(nums)):
            curr=i
            cnt=0
            status=True
            while(cnt<n-1):
                if nums[curr%n]>nums[(curr+1)%n]:
                    status=False
                cnt+=1
                curr+=1
            if status:
                return status
        return False

        