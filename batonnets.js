const prompt = require("prompt-sync")();
let BatonnetTotal = 10;

// Verifier la validité du choix de joueur
const VerifyChoice = (nombreBatonnet) => {
  if (isNaN(nombreBatonnet)) {
    return false;
  } else {
    return nombreBatonnet == 1 || nombreBatonnet == 2 || nombreBatonnet == 3;
  }
};

const PlayRole = (player) => {
  let nombreBatonnet = parseInt(
    prompt(`Le joueur ${player} choisit un nombre de batonnets: `)
  );

  if (VerifyChoice(nombreBatonnet)) {
    if (nombreBatonnet > BatonnetTotal) {
      console.log(
        "Le nombre de batonnets choisi est supérieur au nombre de batonnets restants"
      );

      return true; // bad_choice = true (1)
    }

    BatonnetTotal -= nombreBatonnet;
    console.log("Il reste", BatonnetTotal, "batonnets");

    if (BatonnetTotal == 0) {
      console.log(`Joueur ${player} a gagné`);
      return false; // le jeu est terminé + gagnant trouvé
    }
  } else {
    return true; // bad_choice = true (2)
  }

  return true; // bad_choice = false + On continue a jouer ..
};
const Play = () => {
  let player = 1;
  while (BatonnetTotal > 0) {
    let bad_choice = PlayRole(player);
    if (!bad_choice) {
      break; // Un gagnant est trouvé
    }
    // Aprés que PlayRole() est exécuté avec succès, on change de joueur :
    player = player === 1 ? 2 : 1; // Switch players
  }
};
Play();
