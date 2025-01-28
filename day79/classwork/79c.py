class StudentGroup:
    def __init__(self):
        self.groups = {
            "literature": [],
            "math": [],
        }

    def add_student(self, group_name, student_name):
        if group_name in self.groups:
            self.groups[group_name].append(student_name)
        else:
            print(f"Group {group_name} does not exist.")

    def get_students(self, group_name):
        if group_name in self.groups:
            return self.groups[group_name]
        else:
            print(f"Group {group_name} does not exist.")
            return []

# პროგრამის მაგალითი გამოყენება
groups = StudentGroup()
groups.add_student("literature", "Alice")
groups.add_student("math", "Bob")
groups.add_student("literature", "Charlie")
groups.add_student("math", "David")

print("Literature Group:", groups.get_students("literature"))
print("Math Group:", groups.get_students("math"))
