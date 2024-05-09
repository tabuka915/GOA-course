#0
def manual_pop(numberlist, delete_index):
    new_numberlist = []

    for index in range(0,len(numberlist)):
        if index != delete_index:
            new_numberlist.append(numberlist[index])

    return new_numberlist

numbers=[1,2,3,4,5,6,7]

print(manual_pop(numbers,0))

#1

def manual_count(collection, item_to_count):
    count = 0

    for item in collection:
        if item == item_to_count:
            count = count + 1
    
    return count


names = [1, 2, 3, 1]


print(manual_count(names, 1))




