// EXO 1
let content = document.querySelector('#content');
console.log(content);

// EXO 2
let content1 = document.querySelectorAll('#content');
console.log(content1);

// EXO 3
let important = document.querySelector('.important');
console.log(important);

// EXO 4
let important1 = document.querySelectorAll('.important');
console.log(important1);

// EXO 5
let li = document.querySelectorAll('li');
li.forEach(element => {
    console.log(
        element.textContent.slice(0,element.textContent.length-1)
        +
        element.textContent.slice(element.textContent.length-1).toUpperCase()
    );
    
});

// EXO 6
let grandP = document.getElementById("content").getElementsByClassName("grandParagraphe")[0];

console.log(grandP.textContent);
