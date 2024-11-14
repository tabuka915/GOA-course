def count_odd_digits(number):
    count = 0
    for digit in str(number):
        if int(digit) % 2 != 0:
            count += 1
    return count


number = int(input("შეიტანეთ მთელი რიცხვი: "))
print("კენტი ციფრების რაოდენობა:", count_odd_digits(number))




def count_and_print_numbers(n, numbers):
    valid_numbers = []
    for number in numbers:
        if (number < 100) and ((number % 3 == 0 and number % 6 != 0) or (number % 5 == 0 and number % 10 != 0)):
            valid_numbers.append(number)
    

    print(len(valid_numbers))

    for num in valid_numbers:
        print(num)


n = int(input("შეიტანეთ რიცხვების რაოდენობა n: "))
numbers = list(map(int, input(f"შეიტანეთ {n} რიცხვი: ").split()))

count_and_print_numbers(n, numbers)



def count_left_symbols(n, symbols):
    counts = []
    for i in range(n):
        count = symbols[:i].count(symbols[i])
        counts.append(count)
    return counts


n = int(input("შეიტანეთ სიმბოლოების რაოდენობა: "))
symbols = input(f"შეიტანეთ {n} სიმბოლო: ").split()


result = count_left_symbols(n, symbols)
print(" ".join(map(str, result)))
