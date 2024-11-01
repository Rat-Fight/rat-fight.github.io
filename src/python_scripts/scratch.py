nums = [0,0,1,1,1,2,2,3,3,4]

nums_len = len(nums)
k = 0
i = 0
while i < nums_len:
    element = nums[i]

    if element in nums[i + 1:]:
        nums.pop(i)

        print("Condition True")
        print(i, nums)
    else:
        print("Condition False")
        i += 1
        print(i, nums)


print(nums)

print(len(nums))