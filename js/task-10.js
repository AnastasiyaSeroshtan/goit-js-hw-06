function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', handleCleanDiv);

function createBoxes() {
  for (let i = 0; i < inputEl.value; i += 1) {
    const box = document.createElement('div');
    console.log(box);
    box.style.width = `${30 + i*10}px`;
    box.style.height = `${30 + i*10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(box);
  }
}

function handleCleanDiv () {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}



