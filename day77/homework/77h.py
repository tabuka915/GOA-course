def print_positions(rows, cols):
    for row in range(1, rows + 1):
        for col in range(1, cols + 1):
            print(f"row: {row} col: {col}")


print_positions(2, 2)






def print_pairs(n):
    pairs = []
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            if j > i:
                pairs.append((i, j))
    return pairs


pairs = print_pairs(3)
for pair in pairs:
    print(pair)
