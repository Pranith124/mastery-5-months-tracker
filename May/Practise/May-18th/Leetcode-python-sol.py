class Solution:
    def minJumps(self, arr: List[int]) -> int:
        n=len(arr)
        chache=defaultdict(list)
        for i in range(len(arr)):
            chache[arr[i]].append(i)
        hash=set()
        res=0
        stck=deque([0])
        while(stck):
            for _ in range(len(stck)):
                curr=stck.popleft()
                if curr==n-1:
                    return res
                hash.add(curr)
                if curr+1<n and curr+1 not in hash :
                    stck.append(curr+1)
                if curr-1>=0 and curr-1 not in hash :
                    stck.append(curr-1)
                for c in chache[arr[curr]]:
                    if c not in hash :
                        stck.append(c)
                chache[arr[curr]].clear()
            res+=1
        return res
                


        