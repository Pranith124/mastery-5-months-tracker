class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        h=Counter(text)
        b=h['b']
        a=h['a']
        l=h['l']//2
        o=h['o']//2
        n=h['n']
        return min(b,a,l,o,n)
        