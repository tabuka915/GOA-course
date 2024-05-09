def manual_pop(numberlist, delete_index):
    new_numberlist = []

    for index in range(0,len(numberlist)):
        if index != delete_index:
            new_numberlist.append(numberlist[index])

    return new_numberlist

numbers=[1,2,3,4,5,6,7]

print(manual_pop(numbers,0))