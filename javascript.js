// create basic arithmetic functions
let result;
function add(num1, num2) {
    result = Math.round(((num1+num2) + Number.EPSILON) * 100) / 100;
}

function subtract(num1, num2) {
    result = Math.round(((num1-num2) + Number.EPSILON) * 100) / 100;
}

function multiply(num1,num2) {
    result = Math.round(((num1*num2) + Number.EPSILON) * 100) / 100;
}

function divide(num1,num2) {
    result = Math.round(((num1/num2) + Number.EPSILON) * 100) / 100;
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
let copyAllNumbers;
let copyAllOperators;
let counter = 0;

const oper = document.querySelector('.operator');

const btns = document.querySelectorAll('button');
for (const btn of btns) {
    btn.addEventListener('click', () => {
        if (btn.textContent == '+' || btn.textContent == '-' || btn.textContent == '*' || btn.textContent == '/') {
            operator = btn.textContent;
            oper.textContent = btn.textContent;
            allOperators.push(operator);
            number = +(array.join(''));
            allNumbers.push(number);
            array = [];
            if (allOperators.length > 1) {
                copyAllNumbers = allNumbers;
                copyAllOperators = allOperators;
                operate(copyAllOperators[0],copyAllNumbers[0],copyAllNumbers[1]);
                copyAllNumbers.shift();
                copyAllNumbers.splice(0,2,result);
            }
        } else if (btn.textContent == '=') {
            number = +(array.join(''));
            oper.textContent = btn.textContent;
            allNumbers.push(number) 
            array = [];
            if (allNumbers.length == 2) {
                operate(operator,allNumbers[0],allNumbers[1]);
            array = [result];
            }
        } else {
            array.push(btn.textContent);
            counter
            for (const element of array) {
                if (element == '.') {
                    counter++;
                }
                if (counter > 1) {
                    displayValue.textContent = 'ERROR';
                } else {
                displayValue.textContent = array.join('');
            }
            }
        }
    });
}