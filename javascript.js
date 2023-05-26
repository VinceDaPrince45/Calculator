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
// add whatever the input is to array and evalulate after
// change display value to current array/concatenation of numbers
// let array = [];
// let first;
// let second;
// let operator;

// const btns = document.querySelectorAll('button');
// for (const btn of btns) {
//     btn.addEventListener('click', () => {
//         if (btn.textContent == '+' || btn.textContent == '-' || btn.textContent == '*' || btn.textContent == '/') {
//             operator = btn.textContent;
//             first = parseInt(array.join(''));
//             array = [];
//             displayValue.textContent = btn.textContent;
//         } else if (btn.textContent == '=') {
//             second = parseInt(array.join('')); 
//             array = [];
//             operate(operator,first,second);
//         } else {
//             array.push(btn.textContent);
//             displayValue.textContent = array.join('');
//         }
//     });
// }

// may need to change num1 and num2 into more arbitrary values in a array of inputted numbers
// this will allow for operations on many numbers






//if AC, clear whole array, let num1 and num2 be blank
//if delete, remove last entered input, (pop function)
//if equal, evalulate three indexes before
//possibly use find function to get variables for first and second number in operation
//use decimal once, once = true;

let array = [];
let allNumbers = [];
let allOperators = [];
let number;

const btns = document.querySelectorAll('button');
for (const btn of btns) {
    btn.addEventListener('click', () => {
        if (btn.textContent == '+' || btn.textContent == '-' || btn.textContent == '*' || btn.textContent == '/') {
            operator = btn.textContent;
            allOperators.push(operator);
            number = parseInt(array.join(''));
            allNumbers.push(number);
            array = [];
            displayValue.textContent = btn.textContent;
        } else if (btn.textContent == '=') {
            number = parseInt(array.join(''));
            allNumbers.push(number) 
            array = [];
            if (allNumbers.length == 2) {
                operate(operator,first,second);
            } else if (allNumbers.length > 2) {
                for (let i = 0; i < allOperators.length; i++) {
                    operate(allOperators[i], allNumbers[0], allNumbers[1]);
                    allNumbers.splice(0,2,result);
                }
            }
        } else {
            array.push(btn.textContent);
            displayValue.textContent = array.join('');
        }
    });
}