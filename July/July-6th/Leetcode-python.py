class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        unmerged=1
        intervals.sort()
        latest_un_merged=intervals[0]
        for i in range(1,len(intervals)):
            prev=latest_un_merged
            curr=intervals[i]
            if (prev[0]<=curr[0] and prev[1]>=curr[1]) or (prev[0]>=curr[0] and prev[1]<=curr[1]):
                if (prev[0]>=curr[0] and prev[1]<=curr[1]):
                    latest_un_merged=curr
                continue
            else:
                unmerged+=1
                latest_un_merged=curr
        return unmerged

        