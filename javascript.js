// create basic arithmetic functions
let result;
function add(num1, num2) {
    result = num1+num2;
}

function subtract(num1, num2) {
    result = num1-num2;
}

function multiply(num1,num2) {
    result = num1*num2;
}

function divide(num1,num2) {
    result = num1/num2;
}

// create operate function that calls on arithmetic functions

function operate(operator, num1, num2) {
    switch(operator) {
        case '/':
            divide(num1,num2);
            displayValue.textContent = result;
            break;
        case '*':
            multiply(num1,num2);
            displayValue.textContent = result;
            break;
        case '+':
            add(num1,num2);
            displayValue.textContent = result;
            break;
        case '-':
            subtract(num1,num2);
            displayValue.textContent = result;
            break;
    }
}

// link to display value
const displayValue = document.querySelector('.display');

// to get num1 and num2, create array that is assigned to variable and then deleted, create variable that contains operator, and create new array that contains number after operator
//add whatever the input is to array and evalulate after
let array = [];
let first;
let second;
let operator;

const btns = document.querySelectorAll('button');
for (const btn of btns) {
    btn.addEventListener('click', () => {
        if (btn.textContent == '+' || btn.textContent == '-' || btn.textContent == '*' || btn.textContent == '/') {
            operator = btn.textContent;
            first = parseInt(array.join(''));
            array = [];
            displayValue.textContent = btn.textContent;
        } else if (btn.textContent == '=') {
            second = parseInt(array.join('')); 
            array = [];
            operate(operator,first,second);
        } else {
            array.push(btn.textContent);
            displayValue.textContent = array.join('');
        }
    });
}

// change display value to current array/concatenation of numbers








//if AC, clear whole array, let num1 and num2 be blank
//if delete, remove last entered input, (pop function)
//if equal, evalulate three indexes before
//possibly use find function to get variables for first and second number in operation

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

