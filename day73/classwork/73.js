class Animal {  
    constructor(name) {    
      this.name = name;  
    }
  
    makeSound() {    
      console.log(this.name + ' makes a sound.');  
    }
  }
  
  let animal = new Animal('Lion');
  animal.makeSound();  
  




  class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getDetails() {
      return `${this.year} ${this.make} ${this.model}`;
    }
  }
  
  let car = new Car('Toyota', 'Corolla', 2020);
  console.log(car.getDetails());  
  


  class Human {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    introduce() {
      return `Hello, my name is ${this.name}. I'm ${this.age} years old and ${this.gender}.`;
    }
  }
  
  let human = new Human('Nino', 30, 'female');
  console.log(human.introduce());  
  

