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


// btnCreateEl.addEventListener('click', createBoxes(inputEl.value));

// function handleEnterElementInput(){
//   const am = inputEl.value;
//   console.log(am);
//   return am;
// }




const createBoxes = (amount) => {
  const box = document.createElement('div');
  console.log(box);
  box.style.width = `${40}px`;
  box.style.height = `${40}px`;
  box.style.backgroundColor = getRandomHexColor();
  
  
  boxesEl.appendChild(box);

  return box;
}

console.log(createBoxes(3))




