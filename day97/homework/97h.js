const task1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 1 complete");
    }, 2000);
});

task1.then(console.log);




const task2 = new Promise((_, reject) => {
    reject(new Error("Task 2 failed"));
});

task2.catch((error) => {
    console.error(error.message);
});








const task3 = new Promise((resolve) => {
    resolve(5);
});

task3
    .then((number) => {
        return number * 2;
    })
    .then((doubledNumber) => {
        console.log(doubledNumber);
    });


    const task4 = () => new Promise((resolve) => {
        setTimeout(() => {
            resolve("First");
        }, 2000);
    });
    
    task4()
        .then((message) => {
            console.log(message);
            return new Promise((resolve) => setTimeout(resolve, 1000));
        })
        .then(() => {
            console.log("Second");
        });
    



        const task5 = () => new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error("Task 3 failed"));
            }, 2000);
        });
        
        task5().catch((error) => {
            console.error(error.message);
        });
        


const task6 = () => new Promise((resolve) => {
    const delay = Math.random() * 4000 + 1000;
    setTimeout(() => {
        resolve("Task 1 complete");
    }, delay);
});

task6().then(console.log);



const task8 = () => new Promise((_, reject) => {
    const delay = Math.random() * 3000 + 1000;
    setTimeout(() => {
        reject(new Error("Task 3 failed"));
    }, delay);
});

task8().catch((error) => {
    console.error(error.message);
});



const task9 = () => new Promise((resolve) => {
    const delay = Math.random() * 4000 + 1000;
    const randomNumber = Math.random();
    setTimeout(() => {
        if (randomNumber > 0.5) {
            resolve("Task 1 complete");
        } else {
            resolve("Task 1 was quick");
        }
    }, delay);
});

task9().then(console.log);





const task10 = () => new Promise((resolve, reject) => {
    const delay = Math.random() * 3000 + 1000;
    const randomNumber = Math.random();
    setTimeout(() => {
        if (randomNumber < 0.3) {
            reject(new Error("Task 3 failed"));
        } else {
            resolve("Task 3 complete");
        }
    }, delay);
});

task10()
    .then(console.log)
    .catch((error) => {
        console.error(error.message);
    });



































