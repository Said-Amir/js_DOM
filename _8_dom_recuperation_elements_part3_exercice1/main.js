// Exo 1

let h2 = document.querySelector('h2');
console.log(h2.innerText);

// Exo 2

h2.innerText = "Exercice1";
console.log(h2.innerText);

// Exo 3

let nextP = h2.nextElementSibling;
nextP.innerText = "Exercice1";
console.log(nextP.innerText);

// Exo 4

let section1 = document.querySelector('section');
let id = section1.id

console.log(id);

// Exo 5

let h1 = document.querySelector('h1');
console.log(h1.className);

// Exo 6

let lesH1 = document.querySelectorAll('h1');
lesH1.forEach(element => {
    console.log(element.className);
});

// Exo 7

let input = document.querySelector('input');
console.log(input.attributes);

// Exo 8

console.log(input.attributes.type);

// Exo 9 

let input2 = document.querySelector('#inputPassword3');
input2.setAttribute('type','password');
console.log(input2.attributes.type);

// Exo 10

input.attributes.type.value = "color";
console.log(input.attributes.type);