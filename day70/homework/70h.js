// const names = ["luka","anna","giorgi"];

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
//     console.log(i);
// };

// console.log("----------FOR EACH------------");

// names.forEach((value) => {
//     console.log(value);
// });


// const numbers = [1,2,3,4,5,6];

// let sum = 0;

// numbers.forEach((num) => {
//     sum += num;
// });

// console.log(sum);

// const numbers = [1,2,3,4,5,6];

// function manualForEach(arr, customFunction){
//     for(let i = 0; i < arr.length; i++){
//         customFunction(arr[i], i, arr);
//     }
// }

// manualForEach(numbers, (value) => {
//     console.log(value);
// });

// const numbers = [4, 9, 16, 25];

// const newNumbers = numbers.map((num) => {
//   return -num; 
// });

// console.log(numbers);
// console.log(newNumbers);

// function manualMap(arr, customFunction){
//     let resultArr = [];
//     for(let i = 0; i < arr.length; i++){
//         resultArr.push(customFunction(arr[i], i, arr));
//     };
//     return resultArr;
// };

// const numbers = [4, 9, 16, 25];

// const newNumbers = manualMap(numbers, (num, _, __) => {
//     return -num;
// });

// console.log(newNumbers);
// console.log(numbers);

const numbers = [4, -9, 16, 25,-4,-7,5,-1,9];

// const filteredNumbers = numbers.filter((number) => {
//     return number >= 0;
// })

// console.log(filteredNumbers);
// console.log(numbers);

const positiveNums = manualFilter(numbers, (number) => {
    return number >= 0;
});

console.log(positiveNums);

function manualFilter(arr, customFunc){
    const resultArr = [];
    for(let i = 0; i < arr.length; i++){
        if(customFunc(arr[i], i, arr)){
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}