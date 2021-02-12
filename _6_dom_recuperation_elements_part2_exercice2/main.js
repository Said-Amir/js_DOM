/* ### 1. Affiche le h3 qui est le premier enfant de la div content
 */
let myDivContent = document.getElementById("content")
console.log(myDivContent.firstElementChild)

/* ### 2. Affiche le titreNiv3
 */

let myTitreNiv3= document.getElementById('titreNiv3')
console.log(myTitreNiv3);

/* 3. Affiche l'élément qui précède le titreNiv3 */

console.log(myTitreNiv3.previousElementSibling);

/* 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling */

let myPetitParagraphe = document.getElementsByClassName('petitParagraphe')[0]
console.log(myPetitParagraphe.nextElementSibling);

/* 5. Affiche le parent des éléments ayant comme class "important"  */
let mySaOine = document.getElementsByClassName("important")[0]
console.log(mySaOine.parentElement);

/* 6. Affiche le premier enfant, du parent de "listElements" */
let myListElements = document.getElementById('listElements')
console.log(myListElements.parentElement.firstElementChild);
/* 7. Affiche l'élément qui succède le dernier élément ayant la class "important" */
let MylastImportant = document.getElementsByClassName("important")[3]
console.log(MylastImportant.nextElementSibling);
/* 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" */
let myTextGeneral = document.getElementById('textGeneral')
let myTextGeneral1 = myTextGeneral.nextElementSibling.nextElementSibling
console.log(myTextGeneral1);
/* 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom) */
let myFooter = document.getElementById('footer')

console.log(myFooter.getElementsByTagName('span')[0].parentElement.nextElementSibling);
/*  En partant de Nicolas, affiche Primo */
console.log(myFooter.getElementsByTagName('span')[1].parentElement.previousElementSibling.getElementsByTagName("span")[0].getElementsByTagName('b')[0].innerHTML);
/* 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe" */
let myGrandParagraphe = document.querySelector('grandParagraphe')
console.log(myGrandParagraphe);
/* 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dansu ne boucle */

let myLi = document.querySelectorAll("li")
myLi.forEach(e => {
    console.log(e)
});
;