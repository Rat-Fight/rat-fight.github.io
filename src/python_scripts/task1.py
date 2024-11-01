def hanoi(n):
    if n == 1: 
        return 1
    
    return 2 * hanoi(n - 1) + 1

years = hanoi(64) / 60 / 60 / 24 / 365.25

print(years)