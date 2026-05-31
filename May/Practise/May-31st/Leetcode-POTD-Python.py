class Solution:
    def asteroidsDestroyed(self, mass: int, asteroids: List[int]) -> bool:
        asteroids.sort()
        for ma in asteroids:
            if ma>mass:
                return False
            mass+=ma
        return True
        