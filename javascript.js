function add(num1, num2) {
    return num1+num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function multiply(num1,num2) {
    return num1*num2;
}

function divide(num1,num2) {
    return num1/num2
}

// const clear = document.querySelector('.clear');
// const seven = document.querySelector('.seven');
// const four = document.querySelector('.four');
// const one = document.querySelector('.one');
// const enlarge = document.querySelector('.enlarge');
// const dlt = document.querySelector('.delete');
// const eight = document.querySelector('.eight');
// const five = document.querySelector('.five');
// const two = document.querySelector('.two');
// const zero = document.querySelector('.zero');
// const percent = document.querySelector('.percent');
// const nine = document.querySelector('.nine');
// const six = document.querySelector('.six');
// const three = document.querySelector('.three');
// const decimal = document.querySelector('.decimal');
// const division = document.querySelector('.divide');
// const multiplication = document.querySelector('.multiply');
// const subtraction = document.querySelector('.subtract');
// const addition = document.querySelector('.add');
// const equal = document.querySelector('.equal');

const btns = document.querySelectorAll('button');
for (const btn of btns) {
    btn.addEventListener('click', () => {
        console.log(btn.textContent)
    });
}
