# condition statmenti
name=input("please Enter your corect name:")
password=input("please Enter your corect password:")
repeat_password =input("please enter your password again:")


if password == repeat_password:
    print(name,"registered succefuly")
else:
    print("invailed password")