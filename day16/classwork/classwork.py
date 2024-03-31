def my_sum_func(numbers_list): 
    sum = 0
   
    for i in numbers_list:
        sum = sum + i
    
    print(sum)

my_sum_func([1,2,3,4,5])








def find_min_max(numbers_list):
 min = numbers_list[1]
 max = numbers_list[1]
    
 for i in numbers_list:
    if min > i:
     min = i
    if max < i:
     max = i
    
print(min,max)

find_min_max([1,2,3,4,5])





def func(number_list):
    sum = 0
    quantity = 0
    
    for num in number_list:
        if num >= 1:
           sum = sum + num
        else:
           quantity = quantity + 0
   
    print(sum,quantity)

func([1,2,3,4,-1,-3])



















def sum(mylist):
    sumno = 0
    for i in mylist:
        sumno = sumno +i
        
    return sumno

lilister = [1,2,3,4,5]

print(sum(lilister))






