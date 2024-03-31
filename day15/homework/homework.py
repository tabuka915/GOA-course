b = "tornike, tabukashvili!"
print(b[9:10])    
print(b[-13:-12])
print(b)




# condition statmenti
#input("please Enter your palindrom word:")

#corect_palindrom="civic"

#if corect_palindrom >= "toko":

#    print("corect")
#else:
#   print("uncorect")



str1="goal oriented academy"
str2=" "
for i in str1:
    if i !=" ":
        str2 = str2 + i
print(str2)

mylist=[3,2,4]
result=(mylist)
print(result)




def average_arithmetic(number_list):
    jami = sum(number_list)
    result = jami // len(number_list)
    print(result)

average_arithmetic([1,2,3])





def my_replace(word,char1,char2):
    replaced_word = ''
    
    for i in word:
        if i == char1:
            replaced_word = replaced_word + char2 
        else:
            replaced_word = replaced_word + i
    
    print(replaced_word)

my_replace("Luka Tskhvaradze", "k", "i")


