function arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [4, 5, 6];

console.log(arraysAreEqual(array1, array2)); 
console.log(arraysAreEqual(array1, array3)); 
