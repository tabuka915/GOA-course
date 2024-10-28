function findCommonElements(array1, array2) {
    const commonElements = array1.filter(element => array2.includes(element));
    return commonElements;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const result = findCommonElements(array1, array2);

console.log(result); 
