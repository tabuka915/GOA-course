# შექმნა მაპი 5 წყვილით
best_students = {
    "Math": "Alice",
    "Science": "Bob",
    "Literature": "Charlie",
    "History": "David",
    "Art": "Eve"
}

# მაპის ზომის ბეჭდვა
print("Map Size:", len(best_students))

# თითოეული ჯგუფის საუკეთესო მოსწავლის სახელი
print("Best students in each group:")
for group, student in best_students.items():
    print(f"{group}: {student}")
