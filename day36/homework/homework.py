person = {
    "name": "toko",
    "surname" : "tabukashvili",
    "age" : "15",
    "arr" : [1,2,3,5,6]
}
person['name']="george"
person.update({"name":"tornike"})
person.update({"car":"porshe"})

print(person)

print(person["name"],"/arr metodd")

print(person.values(),"valuessss")

x=person.keys()
print(person.keys())

print(person.items(),"items    ")


print(person["arr"][0])
print(len(person))

x=person["arr"]
print(x)

person["food"]="pizza"



person.pop("car")
person.popitem()
del person["name"]

person.clear()
print(person)