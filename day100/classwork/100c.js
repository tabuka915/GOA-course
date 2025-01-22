
async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=3');
        const products = await response.json();

    
        const productContainer = document.getElementById('product-container');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            const productName = document.createElement('h2');
            productName.textContent = product.title;
            productDiv.appendChild(productName);

            const productPrice = document.createElement('p');
            productPrice.textContent = `Price: $${product.price}`;
            productDiv.appendChild(productPrice);

            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;
            productDiv.appendChild(productDescription);

            productContainer.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}


document.addEventListener('DOMContentLoaded', getProducts);
