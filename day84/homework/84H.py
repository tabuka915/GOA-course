def check_vowel_consonant(ch):
    vowels = 'aeiou'
    if ch.lower() in vowels:
        return "ხმოვანი"
    else:
        return "თანხმოვანი"


ch = input("შემოიტანეთ სიმბოლო: ")
print(check_vowel_consonant(ch))




def max_product(nums):
    nums.sort()
    return nums[-1] * nums[-2]


numbers = list(map(int, input("შემოიტანეთ 4 რიცხვი: ").split()))
print(max_product(numbers))
