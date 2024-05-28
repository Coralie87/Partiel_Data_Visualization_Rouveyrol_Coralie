document.addEventListener('DOMContentLoaded', (event) => {
    let counter = 0;

    const counterDisplay = document.getElementById('counter');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');
    const resetButton = document.getElementById('reset');

    increaseButton.addEventListener('click', () => {
        counter++;
        updateCounter();
    });

    decreaseButton.addEventListener('click', () => {
        counter--;
        updateCounter();
    });

    resetButton.addEventListener('click', () => {
        counter = 0;
        updateCounter();
    });

    function updateCounter() {
        counterDisplay.textContent = counter;
    }
});
