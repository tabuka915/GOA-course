# ჯგუფების და მათი საუკეთესო მოსწავლეების დიქტიონარი (მაპი)
groups = {
    "ჯგუფი A": "ანასტასია",
    "ჯგუფი B": "დავითი",
    "ჯგუფი C": "მარიამი",
    "ჯგუფი D": "გიორგი",
    "ჯგუფი E": "ელენე"
}

# მაპის ზომა
print("მაპის ზომა:", len(groups))

# საუკეთესო მოსწავლეების სახელები
for group, best_student in groups.items():
    print(f"{group}: {best_student}")
