// Exo 1
let elements = document.querySelectorAll('#liste-competences *');
console.log(elements);

let competences = {
    HTML: 90,
    CSS: 80,
    JS: 100,
    React: 50,
    Laravel: 40
}

// Exo 2 & 3
let i = 0;
for (let e in competences) {

    elements[i].textContent = elements[i].textContent + competences[e];

    if (competences[e] < 50) {

        elements[i].style.backgroundColor = 'red';

    } else if (competences[e] > 50 && competences[e] < 100){

        elements[i].style.backgroundColor = 'green';
        elements[i].style.color = 'white';

    } else if (competences[e] == 100){

        elements[i].style.backgroundColor = 'gold';
        
    }
    
    i++;

}