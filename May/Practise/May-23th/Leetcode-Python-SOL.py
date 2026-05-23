class Solution:
    def longestCommonPrefix(self, arr1: List[int], arr2: List[int]) -> int:
        hash=set()
        res=0
        for ch in arr1:
            i=0
            ch=str(ch)
            n=len(ch)
            while(i<n):
                hash.add(ch[:i+1])
                i+=1
        for ch in arr2:
            i=0
            ch=str(ch)
            n=len(ch)
            while(i<n):
                if ch[:i+1] in hash:
                    res=max(res,i+1)
                i+=1
        return res
