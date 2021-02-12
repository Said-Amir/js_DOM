// EXO 1
let h12 = document.getElementsByTagName('h1')[1];

console.log(h12.innerHTML)

// EXO 2 
let lastLi = document.getElementsByTagName('li')[3];

console.log(lastLi.innerHTML);

// EXO 3
let firstP = document.getElementsByTagName('p')[0];

console.log(firstP.textContent.toUpperCase());

// EXO 4 

let i = document.querySelectorAll('li');

console.log(i)

i.forEach(element => {
    console.log(element.textContent.toUpperCase())
});