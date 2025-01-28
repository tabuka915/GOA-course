const array = [1, 2, 3, 4];
array.forEach((value) => {
    console.log(value); // Each value in the array will be logged to the console.
});




const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`); // Logs index and fruit value.
});




const numbers = [10, 20, 30];
let sum = 0;
numbers.forEach((number) => {
    sum += number;
});
console.log(sum); // Sum will be 60.




function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

// Example usage
myForEach([1, 2, 3, 4], (value) => {
    console.log(value); // Each value in the array will be logged to the console.
});



const numbers2 = [1, 2, 3, 4];
const doubled = numbers2.map((number2) => number2 * 2);
console.log(doubled); // [2, 4, 6, 8]



const names = ['John', 'Jane', 'Doe'];
const uppercasedNames = names.map((name) => name.toUpperCase());
console.log(uppercasedNames); // ['JOHN', 'JANE', 'DOE']



const lengths = ['apple', 'banana', 'cherry'].map((fruit) => fruit.length);
console.log(lengths); // [5, 6, 6]



function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// Example usage
const doubled2 = myMap([1, 2, 3, 4], (number) => number * 2);
console.log(doubled); // [2, 4, 6, 8]

