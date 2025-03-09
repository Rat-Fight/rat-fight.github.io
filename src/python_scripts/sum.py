names = ["James", "Ali", "Bob", "Jose", "Mickle", "James", "Ali", "Ali", "James", "Jose"]


names_count = {}

for name in names:
    names_count[name] = names_count.get(name, 0) + 1
print(names_count)