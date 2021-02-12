/* <!-- ### 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", utilise une méthode pour récupérer un élémént via sa class
 --> */

 let myTartine = document.getElementsByClassName("tartine")[0]
 console.log(myTartine.innerHTML);
 /* ### 2. Pareil que le précédent mais cette fois si c'est via l'id "toast" */
 
 let myToast = document.getElementById("toast")
 
 /* ### 3. Affiche le dernier élément ayant la class tartine ( pas son contenu, l'élément entier) */
 let myTartine1 = document.querySelectorAll(".tartine")
 
 console.log(myTartine1[myTartine1.length-1]);