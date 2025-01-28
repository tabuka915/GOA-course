def get_user_info():
    email = input("გთხოვთ, შეიყვანეთ თქვენი იმეილი: ")
    password = input("გთხოვთ, შეიყვანეთ თქვენი პაროლი: ")
    age = input("გთხოვთ, შეიყვანეთ თქვენი ასაკი: ")
    gender = input("გთხოვთ, შეიყვანეთ თქვენი სქესი: ")

    print("\nშეყვანილი ინფორმაცია:")
    print(f"იმეილი: {email}")
    print(f"პაროლი: {password}")
    print(f"ასაკი: {age}")
    print(f"სქესი: {gender}")

# პროგრამის ძირითადი ნაწილი
if __name__ == "__main__":
    get_user_info()
