// - Ecrire un algorithme qui fait un décompte de 60 secondes
// - A la fin du décompte, le message “BOOOM” est affiché
// - AMELIORATION : Faites le décompte en prenant en compte
// les minutes (une double boucle est nécessaire)

function Wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

async function Boom() {
  for (let min = 0; min <= 1; min++) {
    // En cette ligne on associe la valeur courante de minute à maxSec
    // Pour que si minute =1 est atteinte on annule les minutes alors
    // Avec cette solution on evite le boucle infinie (quand j'avais min<=0 comme condition d'arret et initialisation de min à 0)
    const maxSec = min === 1 ? 0 : 60;
    for (let sec = 0; sec <= maxSec; sec++) {
      console.log(min, ":", sec);
      await Wait();
    }
  }
  console.log("BOOOM");
}
Boom();
