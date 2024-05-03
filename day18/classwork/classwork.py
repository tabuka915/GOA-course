#def my_find(colection,value_to_find):
 #   for index in range (len(colection)):
#        if colection[index ] == value_to_find:
 #          return index

#print(my_find("lile","i"))  

def my_join(string_list,join_char):
    result= ''
    for word in string_list:
        result+word+join_char
    return result[0:-1]
print (my_join(["luka","lile","nia"],"-"))



