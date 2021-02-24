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
let lesImages = document.querySelectorAll('#mignon2-container *');
let container2 = document.querySelector('#mignon2-container');
let imgMignon2 = container2.querySelector('img');
let imgs = [...lesImages];
let compteur = 1;

imgs.forEach(element => {
    element.addEventListener('click', () => {
        element.remove();
        console.log(imgs);
        compteur++;
        if (compteur == 5) {
            setTimeout(function(){
                for (let i = 0; i < 5; i++) {
                    let newImgMignon = document.createElement('img');
                    newImgMignon.setAttribute('src',imgMignon2.src);
                    newImgMignon.setAttribute('width', '200');
                    imgs.push(newImgMignon);
                    container2.appendChild(newImgMignon);
                }
            }, 1000);
        }
    })
});

container2.addEventListener('click', (e)=>{
    e.target.remove();
})