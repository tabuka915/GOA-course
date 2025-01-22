fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(json => {
        console.log(json);
        document.body.innerHTML = `
            <div style="border:1px solid #ccc; padding:20px; margin:20px; border-radius:10px; width:300px;">
                <img src="${json.image}" alt="${json.title}" style="width:100%;">
                <h2>${json.title}</h2>
                <p>${json.description}</p>
                <p><strong>Price:</strong> $${json.price}</p>
            </div>
        `;
    });




    let promise = new Promise(function(resolve, reject) {
        // Simulation of async work
        setTimeout(() => resolve("Done!"), 1000);
      });
      
      promise
        .then(result => console.log(result)) // "Done!"
        .catch(error => console.log(error));
      







