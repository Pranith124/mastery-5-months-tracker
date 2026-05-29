class Solution:
    def minElement(self, nums: List[int]) -> int:
        res=float('inf')
        for n in nums:
            digit_sum=0
            num=n
            while(num):
                digit_sum+=num%10
                num=num//10
            res=min(res,digit_sum)
        return res

        