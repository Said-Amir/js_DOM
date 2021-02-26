// Exo 1
let inputAdd1 = document.querySelectorAll('input')[0];
let inputAdd2 = document.querySelectorAll('input')[1];
let answer = document.querySelector('#response1');
let equal = document.querySelectorAll('button')[0];

equal.addEventListener('click', () => {
    let rep = parseInt(inputAdd1.value)+parseInt(inputAdd2.value);
    answer.textContent = rep;
})

// Exo 2
let inputAdd3 = document.querySelectorAll('input')[2];
let inputAdd4 = document.querySelectorAll('input')[3];
let equal2 = document.querySelectorAll('button')[1];
let answer2 = document.querySelector('#response2');
let rep;

equal2.addEventListener('click', () => {
    let selectVal = document.querySelector('select').value;
    switch (selectVal) {
        case '+':
            rep = parseInt(inputAdd3.value)+parseInt(inputAdd4.value);
            answer2.textContent = rep;
            break;
        case '-':
            rep = parseInt(inputAdd3.value)-parseInt(inputAdd4.value);
            answer2.textContent = rep;
            break;
        case '*':
            rep = parseInt(inputAdd3.value)*parseInt(inputAdd4.value);
            answer2.textContent = rep;
            break;
        case '/':
            rep = parseInt(inputAdd3.value)/parseInt(inputAdd4.value);
            answer2.textContent = rep;
            break;
        default:
            break;
    } 
})

// Exo 3
let inputAdd5 = document.querySelectorAll('input')[4];
let inputAdd6 = document.querySelectorAll('input')[5];
let answer3 = document.querySelector('#response3');
let equal3 = document.querySelectorAll('button')[2];
let plus = document.querySelectorAll('button')[3];
let moins = document.querySelectorAll('button')[4];
let fois = document.querySelectorAll('button')[5];
let div = document.querySelectorAll('button')[6];
let operator = document.querySelector('#operatorsExo3 span');
let op = "+";
let rep2;

plus.addEventListener('click', () => {
    operator.innerHTML = '<i class="fas fa-plus"></i>';
    op = "+";
})

moins.addEventListener('click', () => {
    operator.innerHTML = '<i class="fas fa-minus"></i>';
    op = "-";
})

fois.addEventListener('click', () => {
    operator.innerHTML = '<i class="fas fa-times"></i>';
    op = "*";
})

div.addEventListener('click', () => {
    operator.innerHTML = '<i class="fas fa-divide"></i>';
    op = "/";
})

equal3.addEventListener('click', () => {
    switch (op) {
        case "+":
            rep2 = parseInt(inputAdd5.value)+parseInt(inputAdd6.value);
            answer3.textContent = rep2;
            break;
        case "-":
            rep2 = parseInt(inputAdd5.value)-parseInt(inputAdd6.value);
            answer3.textContent = rep2;
            break;
        case "*":
            rep2 = parseInt(inputAdd5.value)*parseInt(inputAdd6.value);
            answer3.textContent = rep2;
            break;
        case "/":
            rep2 = parseInt(inputAdd5.value)/parseInt(inputAdd6.value);
            answer3.textContent = rep2;
            break;
        default:
            break;
    }
})

// Exo 4
let inputAdd7 = document.querySelectorAll('input')[6];
let inputAdd8 = document.querySelectorAll('input')[7];
let answer4 = document.querySelector('#response4');
let equal4 = document.querySelectorAll('button')[7];
let operator2 = document.querySelector('#exo-4 .box-body span');
let op2 = '+';

let un = document.querySelectorAll('#numbersExo4 button')[0];
let deux = document.querySelectorAll('#numbersExo4 button')[1];
let trois = document.querySelectorAll('#numbersExo4 button')[2];
let quatre = document.querySelectorAll('#numbersExo4 button')[3];
let cinq = document.querySelectorAll('#numbersExo4 button')[4];
let six = document.querySelectorAll('#numbersExo4 button')[5];
let sept = document.querySelectorAll('#numbersExo4 button')[6];
let huit = document.querySelectorAll('#numbersExo4 button')[7];
let neuf = document.querySelectorAll('#numbersExo4 button')[8];
let zero = document.querySelectorAll('#numbersExo4 button')[9];

let plus2 = document.querySelectorAll('#operatorsExo4 button')[0];
let moins2 = document.querySelectorAll('#operatorsExo4 button')[1];
let fois2 = document.querySelectorAll('#operatorsExo4 button')[2];
let div2 = document.querySelectorAll('#operatorsExo4 button')[3];

let rep3
plus2.addEventListener('click', () => {
    operator2.innerHTML = '<i class="fas fa-plus"></i>';
    op2 = "+";
})

moins2.addEventListener('click', () => {
    operator2.innerHTML = '<i class="fas fa-minus"></i>';
    op2 = "-";
})

fois2.addEventListener('click', () => {
    operator2.innerHTML = '<i class="fas fa-times"></i>';
    op2 = "*";
})

div2.addEventListener('click', () => {
    operator2.innerHTML = '<i class="fas fa-divide"></i>';
    op2 = "/";
})

let onOff = false;

inputAdd7.addEventListener('click',(e) => {
    onOff = false;
    console.log(e);
    console.log(inputAdd7);
})

inputAdd8.addEventListener('click',(e) => {
    onOff = true;
    console.log(e);
    console.log(inputAdd8);
})

un.addEventListener('click',() => {
    if (onOff == false) {
        inputAdd7.value += 1;
    }else{
        inputAdd8.value += 1;
    }
})

deux.addEventListener('click',() => {
    if (onOff == false) {
        inputAdd7.value += 2;
    }else{
        inputAdd8.value += 2;
    }
})

trois.addEventListener('click',() => {
    if (onOff == false) {
        inputAdd7.value += 3;
    }else{
        inputAdd8.value += 3;
    }
})

quatre.addEventListener('click',() => {
    if (onOff == false) {
        inputAdd7.value += 4;
    }else{
        inputAdd8.value += 4;
    }
})

cinq.addEventListener('click',() => {
    if (onOff == false) {
        inputAdd7.value += 5;
    }else{
        inputAdd8.value += 5;
    }
})

six.addEventListener('click',() => {
    if (onOff == false) {
        inputAdd7.value += 6;
    }else{
        inputAdd8.value += 6;
    }
})

sept.addEventListener('click',() => {
    if (onOff == false) {
        inputAdd7.value += 7;
    }else{
        inputAdd8.value += 7;
    }
})

huit.addEventListener('click',() => {
    if (onOff == false) {
        inputAdd7.value += 8;
    }else{
        inputAdd8.value += 8;
    }
})

neuf.addEventListener('click',() => {
    if (onOff == false) {
        inputAdd7.value += 9;
    }else{
        inputAdd8.value += 9;
    }
})

zero.addEventListener('click',() => {
    if (onOff == false) {
        inputAdd7.value += 0;
    }else{
        inputAdd8.value += 0;
    }
})

equal4.addEventListener('click',() => {
    switch (op2) {
        case "+":
            rep3 = parseInt(inputAdd7.value)+parseInt(inputAdd8.value);
            answer4.textContent = rep3;
            break;
        case "-":
            rep3 = parseInt(inputAdd7.value)-parseInt(inputAdd8.value);
            answer4.textContent = rep3;
            break;
        case "*":
            rep3 = parseInt(inputAdd7.value)*parseInt(inputAdd8.value);
            answer4.textContent = rep3;
            break;
        case "/":
            rep3 = parseInt(inputAdd7.value)/parseInt(inputAdd8.value);
            answer4.textContent = rep3;
            break;
        default:
            break;
    }
})