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
const CheckOrderNumbers = (a, b, c) => {
  if (a < b && b < c) {
    console.log("Les nombres sont dans l'ordre croissant");
  } else {
    console.log("Les nombres ne sont pas dans l'ordre croissant");
  }
};
CheckOrderNumbers();
tab.sort();
console.log("Le Tableau ordonné", tab);
