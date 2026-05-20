class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        sa=set()
        sb=set()
        n=len(A)
        C=[]
        for i in range(n):
            C.append(len(list(set(A[:i+1]) & set(B[:i+1]))))
        return C
            

        