// Exo 1
let h1 = document.querySelector('h1');
h1.innerText = 'Les attributs class et id';

// Exo 2
let h2 = document.querySelector('h2');
h2.innerText = 'Exercice 2 partie A';

// Exo 3
let h2_2 = document.querySelectorAll('h2')[1];
h2_2.innerText = 'Exercice 2 partie B';

// Exo 4
let p = document.querySelector('p');
p.innerHTML = `L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <strong> par coeur </strong> `;

// Exo 5
let p_2 = document.querySelectorAll('p')[1];
p_2.innerHTML = `La manipulation de l'attribut Style peut-être une <i>solution</i> rapide`

// Exo 6
h1.setAttribute('id', 'bigTitle');

// Exo 7
let div = document.querySelector('div');
div.setAttribute('class', 'container');

// Exo 8
let h2s = document.querySelectorAll('h2');
h2s.forEach(element => {
    element.setAttribute('class', 'title');
});

// Exo 9
let ps = document.querySelectorAll('p');
ps.forEach(element => {
    element.setAttribute('class', 'text');
});

// Exo 10
let section1 = document.querySelector('section');
section1.setAttribute('class', 'margin-bottom border-black padding');

// EXO 11
let section2 = document.querySelectorAll('section')[1];
section2.setAttribute('class', 'margin-top border-black padding');

// Exo 12
let div2 = document.querySelectorAll('section')[1].querySelector('div');
div2.setAttribute('style', 'background-color: blue; border: solid red 1px; height: 20px; width: 20px;');