// - Créez un algorithme qui possède trois variables a, b et c
// - Stockez un nombre dans chacune d’entre elles
// - Stockez b dans a, c dans b et a dans c
let a = 10;
let b = 20;
let c = 30;

console.log("Avant Permutation : ");
console.log("a : ", a);
console.log("b : ", b);
console.log("c : ", c);

let perm = a;
a = b;
b = c;
c = perm;

console.log("Après Permutation : ");
console.log("a : ", a);
console.log("b : ", b);
console.log("c : ", c);
