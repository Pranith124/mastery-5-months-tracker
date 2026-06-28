class Solution:
    def filterOccupiedIntervals(self, occupiedIntervals: List[List[int]], freeStart: int, freeEnd: int) -> List[List[int]]:
        occupiedIntervals.sort()
        m_intervals=[]
        m_intervals.append(occupiedIntervals[0])
        n=len(occupiedIntervals)
        for i in range(1,n):
            start=occupiedIntervals[i][0]
            end=occupiedIntervals[i][1]
            if m_intervals[-1][1]+1>=start:
                m_intervals[-1][1]=max(m_intervals[-1][1],end)
            else:
                m_intervals.append(occupiedIntervals[i])
        res=[]
        for intr in m_intervals:
            if (intr[0]>=freeStart and intr[0]<=freeEnd) or (intr[1]>=freeStart and intr[1]<=freeEnd):
                if (intr[0]>=freeStart and intr[0]<=freeEnd) and (intr[1]>=freeStart and intr[1]<=freeEnd):
                    continue
                elif (intr[0]>=freeStart and intr[0]<=freeEnd):
                    res.append([freeEnd+1,intr[1]])
                elif (intr[1]>=freeStart and intr[1]<=freeEnd):
                    res.append([intr[0],freeStart-1])
            elif (intr[0]<=freeStart and intr[1]>=freeEnd):
                res.append([intr[0],freeStart-1])
                res.append([freeEnd+1,intr[1]])
            else:
                res.append(intr)
        fr=[]
        for intr in res:
            if intr[0]>intr[1]:
                continue
            fr.append(intr)
        return fr

        