let prompt = require("prompt-sync")();

let n = prompt("Saisir le niveau du triangle :");

// La premiere partie du triangle (croissante)
for (let i = 1; i <= n; i++) {
  let star = "";

  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}
// La deuxiéme partie du triangle (decroissante)
for (let i = n - 1; i >= 1; i--) {
  let star = "";

  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}
