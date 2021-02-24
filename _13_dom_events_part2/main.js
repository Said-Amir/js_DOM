// Exo 3
let body = document.querySelector('body');
// let button = document.createElement('button');

// body.appendChild(button);
// button.textContent = 'addTitle';

// button.addEventListener('click',(e) => {
//     let titre = document.createElement('h2');
//     titre.textContent = 'salut';
//     body.appendChild(titre)
// })

// Exo 4
// let button2 = document.createElement('button');

// body.appendChild(button2);
// button2.textContent = 'Button Creator';

// button2.addEventListener('click',(e) => {
//     let btn = document.createElement('button');
//     btn.textContent = 'Exo 4';
//     body.appendChild(btn)
// })

// Exo 5
let p = document.createElement('p');
p.textContent = 'salut sale enfoiré ça va ou quoi ? ';
body.appendChild(p);

let button3 = document.createElement('button');
button3.textContent = 'Changer la couleur du paragraphe';
body.appendChild(button3);

button3.addEventListener('click',() => {
    p.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
})

// Exo 6
let button4 = document.createElement('button');
button4.textContent = 'Je lance une fonction';
body.appendChild(button4);

button4.addEventListener("click", ()=> {
    let titre = document.createElement('h1');
    titre.textContent = 'Je suis le titre de la page';
    body.appendChild(titre);

    let button5 = document.createElement('button');
    body.appendChild(button5);
    button5.textContent = 'Modifier Exo 6';

    button5.addEventListener("click", ()=> {
        titre.style.color = 'red';
    })
})