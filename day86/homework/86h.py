
groups = {
    "ჯგუფი A": "ანასტასია",
    "ჯგუფი B": "დავითი",
    "ჯგუფი C": "მარიამი",
    "ჯგუფი D": "გიორგი",
    "ჯგუფი E": "ელენე"
}


print("მაპის ზომა:", len(groups))


for group, best_student in groups.items():
    print(f"{group}: {best_student}")
