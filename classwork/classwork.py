#user_word = input("Please enter uppercase word: ")

#result = ''

#for index in range(len(user_word)):
#    if index % 1 == 0:
#        result = result + user_word[index].upper()
#    else:
#        result = result + user_word[index].lower()

#print(result)






#names = ["luka", "gio", "lile", "nia"]

#for index in range(len(names)):
#    names[index] = names[index].capitalize()

#print(names)






#firstname = input("Please enter your firstname: ").capitalize()
#lastname = input("Please enter lastname: ").capitalize()

##result = firstname[0] + '.' + lastname[0]

#print(result)





def manual_find(collection, find_item):
    for index in range(len(collection)):
        if collection[index] == find_item:
            return index
    return -1
print(manual_find([1,2,3,4,5], 8))



#string_list = []

#for i in range(5):
#    word = input("Please enter word: ")
#    string_list.append(word)

#join_char = input("Please enter char to join strings in list: ")

#result = ""

#for index in range(len(string_list)):
#    if index % 2 == 0:
#        result = result + string_list[index] + join_char

#result = result[:-1]

#print(result)











