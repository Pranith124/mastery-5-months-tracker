from collections import defaultdict
class Solution:
    def assignEdgeWeights(self, edges: List[List[int]]) -> int:
        h=defaultdict(list)
        for i,j in edges:
            h[i].append(j)
            h[j].append(i)
        root=1
        d=deque()
        s=set()
        d.append(root)
        max_depth=-1
        mod=10**9+7
        while(d):
            for _ in range(len(d)):
                node=d.popleft()
                s.add(node)
                for i in h[node]:
                    if i not in s :
                        d.append(i)
            max_depth+=1
            max_depth%=mod
        return (2**(max_depth-1))%mod


        