my_list=(1,2,3,4,5,6,7,8,9,10)
even_list=[]
odd_list=[]

for num in my_list:
    if num % 2 ==0:
     even_list.append(num)
else:
    odd_list.append(num)
    print(even_list,odd_list)



fruits = [1,2,3]

fruits.pop(0)

fruits.pop(1)

print(fruits)