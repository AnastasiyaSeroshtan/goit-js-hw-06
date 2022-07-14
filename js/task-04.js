const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = valueEl.textContent = 0;

btnDecr.addEventListener('click', handlerDecrementButtonClick);
btnIncr.addEventListener('click', handlerIncrementButtonClick);

function handlerDecrementButtonClick () {
    valueEl.innerHTML = counterValue -= 1;
};

function handlerIncrementButtonClick () {
    valueEl.innerHTML = counterValue += 1;
};

