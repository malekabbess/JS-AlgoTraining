//- Ecrire l’algorithme qui, à l’aide d’un tableau de tableaux, affiche
//la grille suivante :
//+---+---+---+
//|   |   |   |
//+---+---+---+
//|   |   |   |
//+---+---+---+
//|   |   |   |
//+---+---+---+
function AfficheGrille(t) {
  for (let i = 0; i < t.length; i++) {
    let row = t[i];
    let line = "+---+---+---+";
    let rowL = "|";

    for (let j = 0; j < row.length; j++) {
      rowL += " " + row[j] + " |";
    }

    console.log(line);
    console.log(rowL);
  }

  console.log("+---+---+---+");
}
let tab = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
AfficheGrille(tab);
