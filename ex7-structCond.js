// - Exercice 7
// - Ecrire un algorithme qui prend 3 nombres en entrée, stockés
// dans 3 variables
// - Vérifier si les nombres sont donnés dans l’ordre croissant
// - Amélioration : remettez-les dans l’ordre

let prompt = require("prompt-sync")();
let firstNumber = parseFloat(prompt("Saisir le premier nombre :"));
let secondNumber = parseFloat(prompt("Saisir le deuxième nombre :"));
let thirdNumber = parseFloat(prompt("Saisir le troisième nombre :"));
let tab = [a, b, c];
const checkOrderNumbers = (a, b, c) => {
  const numbersInTab = [a,b,c]
  const isOrdered = [a,b,c].sort().join(' ') === [a,b, c].joind(' ')
  console.log(isOrdered ? "Les nombres sont dans l'ordre croissant" : "Les nombres ne sont pas dans l'ordre croissant")
};

checkOrderNumbers(1, 2, 3)
CheckOrderNumbers();
tab.sort();
console.log("Le Tableau ordonné", tab);
