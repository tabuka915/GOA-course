def manual_pop(colection, delete_index):
    new_colection = []

    for index in range(0,len(colection)):
        if index != delete_index:
            new_colection.append(colection[index])

    return new_colection

names=["luka","lile","nia"]

print(manual_pop(names,0))


def manual_count(collection, item_to_count):
    count = 0

    for item in collection:
        if item == item_to_count:
            count = count + 1
    
    return count


names = [True, True, False, True]

print(manual_count(names, True))






def manual_index(collection, value):

    for index in range(0, len(collection)):
        if collection[index] == value:
            return index
    
    return -1


print(manual_index("Luka", "k"))





