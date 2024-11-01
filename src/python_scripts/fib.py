import time

def fib_cached(n, cache={0: 1, 1: 1}):

    if n in cache:
        return cache[n]

    cache[n] = fib_cached(n - 1, cache) + fib_cached(n - 2, cache)

    return cache[n]

def fib(n): 
    if n == 1 or n == 2: return 1

    return fib(n - 1) + fib(n - 2)


def do_with_time(func1):
    start_time = time.time()
    print(func1(40))
    end_time = time.time()
    print(end_time - start_time)

do_with_time(fib_cached)
print("\n")


