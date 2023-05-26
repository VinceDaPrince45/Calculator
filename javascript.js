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

let num1;
let num2;
let operator;

function operate(operator, num1, num2) {
    switch(operator) {
        case '/':
            divide(num1,num2);
            break;
        case '*':
            multiply(num1,num2);
            break;
        case '+':
            add(num1,num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
    }
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

//add whatever the input is to array and evalulate after
let array = []

const btns = document.querySelectorAll('button');
for (const btn of btns) {
    btn.addEventListener('click', () => {
        array.push(btn.textContent);
        console.log(array);
    });
}

for (const element of array) {
    if (typeof parseInt(element) == Number) {
        
    }
}

//if AC, clear whole array
//if delete, remove last entered input, (pop function)
//if equal, evalulate three indexes before
//possibly use find function to get variables for first and second number in operation



