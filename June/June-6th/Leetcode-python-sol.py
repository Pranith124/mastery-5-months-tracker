class Solution:
    def earliestFinishTime(self, landStartTime: List[int], landDuration: List[int], waterStartTime: List[int], waterDuration: List[int]) -> int:
        landD=float('inf')
        waterD=float('inf')
        finish1=float('inf')
        finish2=float('inf')
        n=len(landStartTime)
        m=len(waterStartTime)
        for i in range(n):
            finish1=min(finish1,landStartTime[i]+landDuration[i])
        for i in range(m):
            waterD=min(waterD,waterStartTime[i]+waterDuration[i])
            finish2=min(finish2,max(finish1,waterStartTime[i])+waterDuration[i])
        for i in range(n):
            finish2=min(finish2,max(waterD,landStartTime[i])+landDuration[i])  
        return finish2
        
        