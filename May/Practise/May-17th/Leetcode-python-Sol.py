class Solution:
    def canReach(self, arr: List[int], start: int) -> bool:
        stack=deque([start])
        hash=set()
        n=len(arr)
        while(stack):
            for _ in range(len(stack)):
                curr=stack.popleft()
                hash.add(curr)
                if arr[curr]==0:
                    return True
                left=curr+arr[curr]
                right=curr-arr[curr]

                if left<n and left not in hash:
                    stack.append(left)
                if right>=0 and right not in hash:
                    stack.append(right)
        return False
                


        