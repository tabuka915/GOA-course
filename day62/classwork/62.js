const myArray = [];
for (let i = 0; i <= 100; i++) {
  myArray.push(i);
}


let evenSum = 0;
for (let number of myArray) {
  if (number % 2 === 0) {
    evenSum += number;
  }
}

console.log("ლუწ რიცხვების ჯამი:", evenSum);



const myArray2 = []; 

myArray2.push("apple"); 
myArray.push("melon", "cherry"); 

console.log(myArray2); 


const fruits = ["Apple", "Banana", "Cherry", "melon"];


const lastFruit = fruits.pop();

console.log("Remaining fruits:", fruits); 
console.log("Removed fruit:", lastFruit);