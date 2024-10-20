class Animal {  
    constructor(name) {    
      this.name = name;  
    }
  
    makeSound() {    
      console.log(this.name + ' makes a sound.');  
    }
  }
  
  let animal = new Animal('Lion');
  animal.makeSound();  // Lion makes a sound.
  