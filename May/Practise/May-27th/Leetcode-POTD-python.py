class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        sm=[0]*26
        Cp=[0]*26
        res=0
        for ch in word:
            ascii=ord(ch)
            if ascii>=97:
                ind=ascii-97
            else:
                ind=ascii-65
            if ascii>=65 and ascii<=90:
                Cp[ind]+=1
            else:
                if Cp[ind]>0:
                    sm[ind]=0
                else:
                    sm[ind]+=1
                
        
        for i in range(26):
            if sm[i]>0 and Cp[i]>0:
                res+=1

        return res

            