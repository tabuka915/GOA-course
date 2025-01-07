document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');
    const resetButton = document.getElementById('reset');

    // Retrieve the counter value from local storage or default to 0
    let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;
    counter.textContent = count;

    increaseButton.addEventListener('click', () => {
        count++;
        counter.textContent = count;
        localStorage.setItem('count', count);
    });

    decreaseButton.addEventListener('click', () => {
        count--;
        counter.textContent = count;
        localStorage.setItem('count', count);
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        counter.textContent = count;
        localStorage.setItem('count', count);
    });
});
