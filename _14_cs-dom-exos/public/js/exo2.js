// Exo 1
let bouton = document.querySelector('button');
let containerMignon = document.querySelector('#mignon-container');
let imgMignon = containerMignon.querySelector('img');
bouton.addEventListener('click', () => {
    let newMignon = document.createElement('img');
    newMignon.setAttribute('src',imgMignon.src);
    newMignon.setAttribute('width', '200');
    containerMignon.appendChild(newMignon);
})

// Exo 2
let container2 = document.querySelector('#mignon2-container');
let imgMignon2 = container2.querySelector('img');
let compteur = 1;

container2.addEventListener('click', (e)=>{
    e.target.remove();
    compteur++;
    if (compteur == 5) {
        setTimeout(function(){
            for (let i = 0; i < 5; i++) {
                let newImgMignon = document.createElement('img');
                newImgMignon.setAttribute('src',imgMignon2.src);
                newImgMignon.setAttribute('width', '200');
                container2.appendChild(newImgMignon);
                compteur = 0;
            }
        }, 1000);
    }
});

// Exo 3
let ul = document.querySelector('ul');
let li2 = document.createElement('li');
let li3 = document.querySelectorAll('#exo-add-li > ul > li')[1];
li2.textContent = 'li num 2';

ul.insertBefore(li2,li3);

// Exo 4
let bouton12 = document.querySelector('#exo-li-from-input').querySelector('button');
let myUl = document.querySelector('#exo-li-from-input > ul');
let inputTodo = document.querySelector('.form-control');

bouton12.addEventListener('click', () =>{
    if (inputTodo.value.trim() !== "") {
        let myLi = document.createElement('li');
        myLi.textContent = inputTodo.value;
        myUl.appendChild(myLi);
        inputTodo.value = "";
    }
})