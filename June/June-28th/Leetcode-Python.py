class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr: List[int]) -> int:
        arr.sort()
        res=1
        curr=1 
        n=len(arr)      
        for i in range(1,n):
            if arr[i]>curr+1:
                curr+=1
            else:
                curr=arr[i]
            res=max(res,curr)
        return res

        