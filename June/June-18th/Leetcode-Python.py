class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        total_minutes=(60*hour+minutes)
        big_hand=(6*minutes)%360
        small_hand=0.5*total_minutes
        res=abs(big_hand-small_hand)
        return min(res,360-res)
