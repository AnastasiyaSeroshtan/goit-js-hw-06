function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls input');
// console.log(inputEl);
console.log(inputEl.value);

const btnCreateEl = document.querySelector('button[data-create]');
// console.log(btnCreateEl);

const btnDestroyEl = document.querySelector('button[data-destroy]');
// console.log(btnDestroyEl);

const boxesEl = document.querySelector('#boxes');
// console.log(boxesEl);

// inputEl.addEventListener('input', handleEnterElementInput);


btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', handleCleanDiv);

function handleCleanDiv () {
  boxesEl.innerHTML = "";
}



function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    console.log(box);
    box.style.width = `${30 + i*10}px`;
    box.style.height = `${30 + i*10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(box);
  }
  
}

console.log(createBoxes(5))




