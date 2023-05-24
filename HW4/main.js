const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

let count = 0;

incrementBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
    counterValue.style.color = 'green';
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        counterValue.textContent = count;
        counterValue.style.color = 'red';
    }
});


const promptBtn = document.getElementById('promptBtn');
const textValue = document.getElementById('textValue');

promptBtn.addEventListener('click', () => {
    const inputValue = prompt('Введите текст:');
    if (inputValue !== null) {
        textValue.textContent = inputValue;
    }
});


const lights = document.querySelectorAll('.light');
const stopText = document.getElementById('stopText');
const goText = document.getElementById('goText');

const color = prompt('Введите цвет (Красный или Зеленый):');

if (color === 'Красный') {
    lights[0].classList.add('active-red');
    stopText.textContent = 'STOP';
} else if (color === 'Зеленый') {
    lights[2].classList.add('active-green');
    goText.textContent = 'GO';

} else {
    alert('Введите корректный цвет (Красный или Зеленый)');
}


