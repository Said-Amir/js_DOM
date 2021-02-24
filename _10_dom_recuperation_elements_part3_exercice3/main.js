// 1 

let myElements = document.querySelectorAll('#object *');
console.log(myElements);

// 1.1

/* let myElements = document.querySelector('#object').children
console.log(myElements); */

// 2 

let objet = {
    nom: "Bilal",
    age: 24,
}

let tab = Object.keys(prop);

// 3

tab.forEach(element => {
    console.log(Object.keys(objet));
});

// 4 

// let tabl = Object.entries(prop) => retourne l'attribut et la valeur

let tabl = Object.values(prop)

tabl.forEach(element => {
    console.log(element);
});


// 5 


let tabl = Object.values(prop)

tabl.forEach((element, index) => {
    console.log(index);
});

// 6 


myElements.forEach((element, index) => {
    element.textContent = Object.values(prop)[index]
});

// 1
let myElements = document.querySelectorAll("#object *");
console.log(myElements);

// 2
let objet = {
    nom: "bilal",
    age: 24,
};
console.log(Object.keys(objet));

// 3
for (let elem in objet) {
    console.log(elem);
}

// 4
for (let elem in objet) {
    console.log(objet[elem]);
}

// 5
Object.values(objet).forEach((value, index) => {
    console.log(value, index);
});

// 6
Object.values(myElements).forEach((value, index) => {
    value.textContent = Object.values(objet)[index];
});