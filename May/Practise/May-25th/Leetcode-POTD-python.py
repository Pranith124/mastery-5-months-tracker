class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        cap=[0]*26
        sm=[0]*26
        for ch in word:
            ascii=ord(ch)
            if ascii>=97:
                sm[ascii-97]+=1
            elif ascii>=65:
                cap[ascii-65]+=1
        res=0
        for i in range(26):
            if cap[i]>0 and sm[i]>0:
                res+=1
        return res


        