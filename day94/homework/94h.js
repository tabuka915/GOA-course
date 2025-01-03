function greetUser(name, callback) {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
      callback();
    }, 2000);
  }
  
  greetUser('Alice', () => {
    console.log('Greeting message logged.');
  });
  



  function delayedMessage(message, callback) {
    setTimeout(() => {
      console.log(message);
      callback();
    }, 2000);
  }
  
  delayedMessage('Process started...', () => {
    console.log('Process completed.');
  });

  


  function processArray(numbers, callback) {
    setTimeout(() => {
      const squaredNumbers = numbers.map(num => num * num);
      callback(squaredNumbers);
    }, 2000);
  }
  
  processArray([1, 2, 3, 4], (result) => {
    console.log('Squared numbers:', result);
  });
  

  function changeColor(color, callback) {
    setTimeout(() => {
      document.body.style.color = color;
      callback();
    }, 2000);
  }
  
  changeColor('red', () => {
    console.log('Text color changed.');
  });
  




  function greetUserWithDelay() {
    const name = prompt('Please enter your name:');
    setTimeout(() => {
      alert(`Hello, ${name}! Thank you for your input.`);
    }, 3000);
  }
  
  greetUserWithDelay();
  




