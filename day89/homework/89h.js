function createStudentMap(students) {
    const studentMap = new Map();
    students.forEach(([name, score]) => {
        studentMap.set(name, score);
    });
    return studentMap;
}


const studentList = [
    ["ანა", 85],
    ["გიორგი", 92],
    ["მარიამი", 78]
];

const studentMap = createStudentMap(studentList);
console.log(studentMap);




function removeDuplicates(array) {
    return [...new Set(array)];
}


const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // [1, 2, 3, 4, 5]





function increaseScores(studentMap) {
    const newStudentMap = new Map();
    studentMap.forEach((score, name) => {
        newStudentMap.set(name, score + 5);
    });
    return newStudentMap;
}


const originalStudentMap = new Map();
originalStudentMap.set("ანა", 85);
originalStudentMap.set("გიორგი", 92);
originalStudentMap.set("მარიამი", 78);

const updatedStudentMap = increaseScores(originalStudentMap);
console.log(updatedStudentMap);
