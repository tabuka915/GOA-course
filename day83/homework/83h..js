
class mountain {
    constructor(name, image, description) {
      this.name = name;
      this.image = image;
      this.description = description;
    }
  
    createCard() {
      return `
        <div class="card">
          <img src="${this.image}" alt="${this.name}">
          <h2>${this.name}</h2>
          <p>${this.description}</p>
        </div>
      `;
    }
  }
  

  const animals = [
    new mountain('everest', 'everest.png', '8,848. (29,029)'),
    new mountain('k2', 'k2.png', '8,611. (28,251)'),
    new mountain('kangchenjunga', 'kangchenjunga.png', '8,586 (28,169)'),
  
    new mountain('makalu', 'makalu.png', '8,485 (27,838)' ),
   
  ];
  
  // Render animal cards
  const container = document.getElementById('mountain-cards');
  animals.forEach(animal => {
    container.innerHTML += animal.createCard();
  });
  

 
