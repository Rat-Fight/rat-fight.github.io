from collections import deque

bracket_dict = {
    ')': '(',
    ']': '[',
    '}': '{',
}

s = "()"

stack = deque()

def brackets_fun(stack):
    if s[0] in ')}]': return False

    for bracket in s:
        if bracket in ')}]':
            
            if len(stack) > 0 and bracket_dict[bracket] == stack[-1]:
                stack.pop()
            else:
                return False
        else:
            stack.append(bracket)

    return not len(stack)




print(brackets_fun(stack))