#def func(number_list):
#    sum = 0

    
#    for num in number_list:
#        if num >= 4:
 #          sum = sum + num                
#   print(sum)

#func([1,2,3,4,5])















#def func(number_list):
#    sum = 0
#
#    
#    for num in number_list:
#        if num >= 5:
#           sum = sum + num                
#    print(sum)

#func([1,2,3,4,5])









#myDict = {"surname": "John", "human": "Norway"}
#mySeparator = "TEST"

#x = mySeparator.join(myDict)

#print(x)




def summ(list):

    even_list =[]
    odd_list = []
    for i in list:
        if i % 2==0:
            even_list.append(i)
        else:
            odd_list.append(i)
            sum_even=sum(even_list)
            sum_odd=sum(odd_list)
            return[sum_even,sum_odd]

print(sum([1,2,3,4,5]))
print(sum([1,2,3,4,5,6,7,8,9,10]))

even_list=[2,4]
sum(even_list)