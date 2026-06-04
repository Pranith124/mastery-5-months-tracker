class Solution:
    def totalWaviness(self, num1: int, num2: int) -> int:
        if num2<100:
            return 0
        res=0
        for n in range(num1,num2+1):
            number=str(n)
            for i in range(1,len(number)-1):
                if int(number[i])>int(number[i-1]) and int(number[i])>int(number[i+1]):
                    res+=1
                if int(number[i])<int(number[i-1]) and int(number[i])<int(number[i+1]):
                    res+=1
        return res
