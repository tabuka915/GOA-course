import random

def shuffle_array(arr):

    n = len(arr)

    for i in range(n - 1, 0, -1):

        j = random.randint(0, i)

        arr[i], arr[j] = arr[j], arr[i]
    return arr


array = [1, 2, 3, 4, 5]
shuffled_array = shuffle_array(array)
print(shuffled_array)
