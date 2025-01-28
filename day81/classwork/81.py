import re

def reverse_letter(string):
    # Remove any characters that are not letters using regex
    only_letters = re.sub(r'[^a-zA-Z]', '', string)
    # Reverse the resulting string
    reversed_string = only_letters[::-1]
    return reversed_string

# Test cases
print(reverse_letter("krishan"))       # Output: "nahsirk"
print(reverse_letter("ultr53o?n"))     # Output: "nortlu"
print(reverse_letter("ab23c"))         # Output: "cba"
print(reverse_letter("krish21an"))     # Output: "nahsirk"
