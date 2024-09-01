function evenSum(num){
    let sum = 0;
    for(let i = 0; i <= num; i++){
        if(i % 2 === 0){
            sum += i;
        }
    }
    return sum;
}


console.log(evenSum(10)); //Output: 30


function evenSum(num){
    let sum = 0;
    for(let i = 2; i <= num; i += 2){
        sum += i;
    }
    return sum;
}


console.log(evenSum(10)); // Output: 30
