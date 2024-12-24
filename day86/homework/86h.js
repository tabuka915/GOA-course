
const groups = {
    "ჯგუფი A": "ანასტასია",
    "ჯგუფი B": "დავითი",
    "ჯგუფი C": "მარიამი",
    "ჯგუფი D": "გიორგი",
    "ჯგუფი E": "ელენე"
};


console.log("მაპის ზომა:", Object.keys(groups).length);


for (const [group, best_student] of Object.entries(groups)) {
    console.log(`${group}: ${best_student}`);
}
