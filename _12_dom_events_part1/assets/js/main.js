// Exo 1

let body = document.querySelector('body');
let button = document.createElement('button');
body.appendChild(button);

button.textContent = 'Je suis un bouton';

button.addEventListener("click", (e) => {
    button.textContent = `J'ai été cliqué`;
})

// Exo 2
let button2 = document.createElement('button');
body.appendChild(button2);

button2.textContent = 'Je suis un bouton';

let i = 1;
button2.addEventListener("click", (e) => {
    button2.textContent = `J'ai été cliqué ${i} fois`;
    i++;
})