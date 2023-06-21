// - Exercice 2
// - Ecrire un algorithme qui prend une variable age en entrée
// - Si age est supérieur ou égal à 18, affichez “Je suis majeur !”
// - Sinon affichez “Je suis mineur !'

let prompt = require("prompt-sync")();
let age = prompt("Saisir votre age :");
age >= 18 ? console.log("Je suis majeur !") : console.log("Je suis mineur !");
