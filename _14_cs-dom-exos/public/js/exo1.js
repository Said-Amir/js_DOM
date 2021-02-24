// Récuperation body 
let body = document.querySelector('body');

// Exo 1
let counter = document.querySelector('#exo-counter');
let btn = counter.querySelector('button');
let span = counter.querySelector('span');
let counterIndex = 0;

btn.addEventListener("click", () => {
    counterIndex++;
    span.innerHTML = counterIndex;
})

// Exo 2
let on = document.querySelector('#square');

on.addEventListener('click', () => {

    if (on.className == 'on') {
        on.innerHTML = 'off';
    }else{
        on.innerHTML = 'on';
    }
    on.classList.toggle('off');
    on.classList.toggle('on');

})

// Exo 3
let titre = document.querySelectorAll('h2');
let titres = [...titre];
let ul = false;

document.addEventListener('keypress', (e) => {
    let keyCode = e.key;

    if(keyCode == 6){
        if (ul == false) {
            titres.forEach((element, index) => {
                element.innerText = `${index+1}. ${element.innerText}`
            });
            ul++;
            console.log(compteur);
            
        } else if(ul == true) {
            titres.forEach((element) => {
                element.innerText = element.innerText.substr(2);
            });
            ul=false;
        }
    }
})

// Exo 4
let carre = document.querySelector('#multi-click');
let compteur = 0;
carre.addEventListener('click', ()=>{
    switch (compteur) {
        case 0:
            carre.style.borderRadius = '50%';
            compteur++;
            break;
        case 1:
            carre.style.backgroundColor = 'red';
            compteur++;
            break;
        case 2:
            carre.style.borderRadius = '0';
            carre.style.backgroundColor = 'white';
            compteur = 0;
            break;
        default:
            break;
    }
})

// Exo 5
let input = document.querySelector('#pick-color');
let p = input.nextElementSibling;
input.addEventListener('change',()=>{
    p.style.color = input.value;
})