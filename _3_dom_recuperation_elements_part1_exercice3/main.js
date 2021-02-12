// EXO 1
let div3 = document.getElementsByTagName('div')[2];
console.log(div3.firstElementChild);

// EXO 2
console.log(div3.lastElementChild);

// EXO 3
let p = div3.getElementsByTagName('p')[0];

let i = p.getElementsByTagName('i')[0];

console.log(i.textContent);

// EXO 4 
let lastP = div3.getElementsByTagName('p')[1];
let b = lastP.getElementsByTagName('b')[0];

console.log(b.innerHTML)

// EXO 5 
console.log(i.parentElement);

// EXO 6
console.log(b.parentElement);

// EXO 7
console.log(lastDiv.firstElementChild.nextElementSibling);