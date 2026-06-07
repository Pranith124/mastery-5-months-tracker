# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
        child_nodes=set()
        nodes = {}
        for node in descriptions:
            if node[0] in nodes:
                parent=nodes[node[0]]
            else:
                parent=TreeNode(node[0])
                nodes[node[0]]=parent
            if node[1] in nodes:
                child=nodes[node[1]]
            else:
                child=TreeNode(node[1])
                nodes[node[1]]=child
            if node[2]==1:
                parent.left=child
            else:
                parent.right=child
            child_nodes.add(node[1])
        for node in descriptions:
            if node[0] not in child_nodes:
                return nodes[node[0]]
        return None
