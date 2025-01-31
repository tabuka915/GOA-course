def century(year):
    return (year + 99) // 100





import re

def to_camel_case(text):
    words = re.split('[-_]', text)
    return words[0] + ''.join(word.capitalize() for word in words[1:])
