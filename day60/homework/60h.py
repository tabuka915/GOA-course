import re

def increment_string(s):
    # Regular expression to match trailing digits
    match = re.search(r'(\d+)$', s)
    
    if match:
        # Extract the numeric part
        num_str = match.group(1)
        # Calculate the new incremented number, keeping leading zeros
        incremented_num = str(int(num_str) + 1).zfill(len(num_str))
        # Combine the non-numeric part with the incremented numeric part
        return s[:match.start()] + incremented_num
    else:
        # No numeric part, just append '1'
        return s + '1'

# Test cases
print(increment_string("foo"))       # Output: foo1
print(increment_string("foobar23"))  # Output: foobar24
print(increment_string("foo0042"))   # Output: foo0043
print(increment_string("foo9"))      # Output: foo10
print(increment_string("foo099"))    # Output: foo100






