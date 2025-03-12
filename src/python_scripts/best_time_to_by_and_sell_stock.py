
def first_non_repeating_character(s):
    # Write your code here
    print(s)
    chars = set()
    for i, c in enumerate(s):
        if not c in chars:
            chars.add(c)
        else:
            return i

        
s = "loveleetcode"
print(first_non_repeating_character(s))