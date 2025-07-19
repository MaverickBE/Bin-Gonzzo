const ListeImages = [
  { id: 1, name: "Ballon.webp" },
  { id: 2, name: "Banshee.webp" },
  { id: 3, name: "Bleasdale.webp" },
  { id: 4, name: "Boite_a_musique.webp" },
  { id: 5, name: "Cage_thoracique.webp" },
  { id: 6, name: "Carte_death.webp" },
  { id: 7, name: "Carte_soleil.webp" },
  { id: 8, name: "Colonne_vertebrale.webp" },
  { id: 9, name: "Cri_banshee.webp" },
  { id: 10, name: "Démon.webp" },
  { id: 11, name: "Djinn.webp" },
  { id: 12, name: "Eau_sale.webp" },
  { id: 13, name: "Edgefield.webp" },
  { id: 14, name: "EMF5.webp" },
  { id: 15, name: "Empreinte.webp" },
  { id: 16, name: "Esprit.webp" },
  { id: 17, name: "Full_t1.webp" },
  { id: 18, name: "Game_5min.webp" },
  { id: 19, name: "Game_parfaite.webp" },
  { id: 20, name: "Goryo.webp" },
  { id: 21, name: "Grafton.webp" },
  { id: 22, name: "Homme_nu.webp" },
  { id: 23, name: "Loop_reussi.webp" },
  { id: 24, name: "Lumiere_rouge.webp" },
  { id: 25, name: "Map_aleatoire.webp" },
  { id: 26, name: "Marche_dans_le_sel.webp" },
  { id: 27, name: "Miroir_casse.webp" },
  { id: 28, name: "Mist.webp" },
  { id: 29, name: "Mort.webp" },
  { id: 30, name: "No_encens.webp" },
  { id: 31, name: "Oni.webp" },
  { id: 32, name: "Ouija.webp" },
  { id: 33, name: "Ouija_cassee.webp" },
  { id: 34, name: "Pas_de_cachettes.webp" },
  { id: 35, name: "Patte_de_singe.webp" },
  { id: 36, name: "Photo_entite.webp" },
  { id: 37, name: "Piano.webp" },
  { id: 38, name: "Pied.webp" },
  { id: 39, name: "Polter.webp" },
  { id: 40, name: "Poupee_vaudou.webp" },
  { id: 41, name: "Prison.webp" },
  { id: 42, name: "Reveil.webp" },
  { id: 43, name: "Revenant.webp" },
  { id: 44, name: "Ridgeview.webp" },
  { id: 45, name: "Rocking_chair.webp" },
  { id: 46, name: "Sadako.webp" },
  { id: 47, name: "Sans_preuves.webp" },
  { id: 48, name: "Skin_boucher.webp" },
  { id: 49, name: "Spiritbox.webp" },
  { id: 50, name: "Sunny_meadows.webp" },
  { id: 51, name: "Tanglewood.webp" },
  { id: 52, name: "Thaye.webp" },
  { id: 53, name: "Voiture.webp" },
  { id: 54, name: "Willow.webp" },
  { id: 55, name: "Woodwind.webp" },
  { id: 56, name: "TV.webp" },
  { id: 57, name: "Yokai.webp" },
  { id: 58, name: "Temperatures_glaciales.webp" },
  { id: 59, name: "Orbes.webp" },
  { id: 60, name: "Hantu.webp" },
  { id: 61, name: "Sunny_restricted.webp" },
  { id: 62, name: "Game_sans_son.webp" },
  { id: 63, name: "Spectre.webp" },
  { id: 64, name: "Fantome.webp" },
  { id: 65, name: "Ombre.webp" },
  { id: 66, name: "Yurei.webp" },
  { id: 67, name: "Carte_lune.webp" },
  { id: 68, name: "Carte_wof.webp" },
  { id: 69, name: "Carte_pendu.webp" },
  { id: 70, name: "Point_hope.webp" },
  { id: 71, name: "Meteo_bloodmoon.webp" },
  { id: 72, name: "Douche.webp" },
  { id: 73, name: "Cercle_invoc.webp" },
  { id: 74, name: "Crane.webp" },
  { id: 75, name: "Obake.webp" },
  { id: 76, name: "Ecriture_fantome.webp" },
  { id: 77, name: "DOTS.webp" },
  { id: 78, name: "Skin_poulpe.webp" },
  { id: 79, name: "Meteo_brouillard.webp" },
  { id: 80, name: "Meteo_sunrise.webp" },
  { id: 81, name: "Meteo_neige.webp" },
  { id: 82, name: "Media_son.webp" },
  { id: 83, name: "Media_video.webp" },
  { id: 84, name: "Porte_claque.webp" },
  { id: 85, name: "Rire_demoniaque.webp" },
  { id: 86, name: "Skin_obake.webp" },
  { id: 87, name: "Souffle_bougie.webp" },
  // Ajoutez le reste des images ici
];

function genererNouvelleCarte(images) {
  if (images === undefined) {
    // Mélanger les images
    images = shuffle(ListeImages);
    var seed = "";
    for (const image of images) {
      if (image.id <= 9) {
        seed += "0";
      }
      seed += image.id;
    }

    seed = seed.substring(0, 50);
    var url = "?seed=" + seed;
    window.history.pushState({ path: url }, "", url);
    console.log(url);

    // Afficher le bouton de partage
    document.getElementById("boutonPartager").style.display = "block";
  }

  // Récupérer la référence de la table
  var table = document.getElementById("carte");
  console.log("Carte générée");

  // Effacer le contenu de la table //
  table.innerHTML = "";

  // Récupérer la liste des images dans le dossier "images"
  var imagesFolder = "images/";

  // Remplir la table avec les images
  var count = 0;
  for (var i = 0; i < 5; i++) {
    var row = table.insertRow(i);
    for (var j = 0; j < 5; j++) {
      var cell = row.insertCell(j);
      var img = document.createElement("img");
      img.src = imagesFolder + images[count].name;
      img.alt = "Image " + (count + 1);

      // Créer un overlay pour la superposition du logo de validation
      var overlay = document.createElement("div");
      overlay.className = "overlay";

      // Ajouter un logo de validation (visible lorsque sélectionné)
      var logo = document.createElement("img");
      logo.src = "images/Bingo_confirme.webp";
      logo.alt = "Bingo_confirme";
      logo.className = "logo";

      overlay.appendChild(logo);
      cell.appendChild(img);
      cell.appendChild(overlay);

      cell.addEventListener("click", function () {
        toggleSelected(this);
        verifierBingo();
      });

      count++;
    }
  }
}

function ControlSeedURL() {
  var paramsString = window.location.search;
  var searchParams = new URLSearchParams(paramsString);
  if (searchParams.has("seed") === true) {
    if (searchParams.get("seed").length == 50) {
      CutSeed(searchParams.get("seed"));
    } else {
      alert("Mauvais format de seed");
    }
  }
}

ControlSeedURL();

function doublon(tableau) {
  var tableauunique = Array.from(new Set(tableau));
  return tableau.length !== tableauunique.length;
}

// Découpe le seed
function CutSeed(seed) {
  var ListeImagesGenerees = [];
  var tableidimages = seed.match(/.{1,2}/g);
  for (id of tableidimages) {
    for (image of ListeImages) {
      if (image.id == id) {
        ListeImagesGenerees.push(image);
      }
    }
  }
  // Vérifie s'il y a des doublons dans la liste d'ID
  if (doublon(ListeImagesGenerees)) {
    alert("Mauvais format de seed");
  } else {
    // Vérifie qu'il y a bien 25 ID's d'images
    if (ListeImagesGenerees.length == 25) {
      genererNouvelleCarte(ListeImagesGenerees);
    } else {
      alert("Mauvais format de seed");
    }
  }
}

function copierLien() {
  var lienGeneré = window.location.href;

  // Créer un élément textarea temporaire
  var textarea = document.createElement("textarea");
  textarea.value = lienGeneré;

  // Ajouter l'élément textarea à la page
  document.body.appendChild(textarea);

  // Sélectionner le texte dans l'élément textarea
  textarea.select();
  textarea.setSelectionRange(0, 99999); // Pour les navigateurs mobiles

  // Copier le texte dans le presse-papiers
  document.execCommand("copy");

  // Retirer l'élément textarea temporaire de la page
  document.body.removeChild(textarea);

  // Afficher une notification  après la copie
  alert("Lien copié dans le presse-papiers");
}

// Fonction pour mélanger un tableau
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// Fonction pour basculer l'état sélectionné d'une cellule
function toggleSelected(cell) {
  // Vérifier si la cellule est déjà sélectionnée
  if (cell.classList.contains("selected")) {
    // Supprimer la classe "selected"
    cell.classList.remove("selected");
    console.log("Case unselected");
  } else {
    // Ajouter la classe "selected"
    cell.classList.add("selected");
    console.log("Case selected");
  }

  jouerSonBingo();
}

// Fonction pour masquer la grille et afficher le bouton
function masquerGrille() {
  var table = document.getElementById("carte");
  var boutonGenerer = document.getElementById("boutonGenerer");

  // Vider le contenu de la grille
  table.innerHTML = "";

  // Afficher le bouton "Générer une nouvelle carte"
  boutonGenerer.style.display = "block";

  boutonGenerer.disabled = false;
}

function afficherBingo() {
  var bingoMessage = document.getElementById("bingo-message");
  var selectedCells = document.querySelectorAll(".selected");

  // Vérification horizontale, verticale et diagonale
  for (var i = 0; i < 5; i++) {
    // Vérification horizontale
    if (verifierLigne(i)) {
      // Ajoute la classe "fade" aux cellules de la ligne gagnante
      for (var j = 0; j < 5; j++) {
        var cell = document.getElementById("carte").rows[i].cells[j];
        cell.classList.add("fade");
      }
      break;
    }

    // Vérification verticale
    if (verifierColonne(i)) {
      // Ajoute la classe "fade" aux cellules de la colonne gagnante
      for (var k = 0; k < 5; k++) {
        var cell = document.getElementById("carte").rows[k].cells[i];
        cell.classList.add("fade");
      }
      break;
    }

    // Vérification diagonale (de gauche à droite)
    if (verifierDiagonaleGaucheDroite()) {
      // Ajoute la classe "fade" aux cellules de la diagonale gagnante
      for (var l = 0; l < 5; l++) {
        var cell = document.getElementById("carte").rows[l].cells[l];
        cell.classList.add("fade");
      }
      break;
    }

    // Vérification diagonale (de droite à gauche)
    if (verifierDiagonaleDroiteGauche()) {
      // Ajoute la classe "fade" aux cellules de la diagonale gagnante
      for (var m = 0; m < 5; m++) {
        var cell = document.getElementById("carte").rows[m].cells[4 - m];
        cell.classList.add("fade");
      }
      break;
    }
  }

  bingoMessage.style.display = "block";
  console.log("BINGO");

  setTimeout(function () {
    bingoMessage.style.display = "none";
    masquerGrille();
  }, 10000);
}

// Fonction pour vérifier s'il y a une ligne de 5 cases validées
function verifierLigne(rowIndex) {
  var table = document.getElementById("carte");
  var row = table.rows[rowIndex];
  var cells = row.getElementsByTagName("td");
  var selectedCount = 0;

  for (var i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains("selected")) {
      selectedCount++;
    }
  }

  return selectedCount === 5;
}

// Fonction pour vérifier s'il y a une colonne de 5 cases validées
function verifierColonne(colIndex) {
  var table = document.getElementById("carte");
  var rows = table.rows;
  var selectedCount = 0;

  for (var i = 0; i < rows.length; i++) {
    var cell = rows[i].cells[colIndex];
    if (cell.classList.contains("selected")) {
      selectedCount++;
    }
  }

  return selectedCount === 5;
}

// Fonction pour vérifier s'il y a une diagonale de 5 cases validées de gauche à droite
function verifierDiagonaleGaucheDroite() {
  var table = document.getElementById("carte");
  var rows = table.rows;
  var selectedCount = 0;

  for (var i = 0; i < rows.length; i++) {
    var cell = rows[i].cells[i];
    if (cell.classList.contains("selected")) {
      selectedCount++;
    }
  }

  return selectedCount === 5;
}

// Fonction pour vérifier s'il y a une diagonale de 5 cases validées de droite à gauche
function verifierDiagonaleDroiteGauche() {
  var table = document.getElementById("carte");
  var rows = table.rows;
  var selectedCount = 0;

  for (var i = 0; i < rows.length; i++) {
    var cell = rows[i].cells[4 - i];
    if (cell.classList.contains("selected")) {
      selectedCount++;
    }
  }

  return selectedCount === 5;
}

// Fonction pour vérifier et afficher le message "Bingo"
function verifierBingo() {
  var table = document.getElementById("carte");

  // Vérification horizontale, verticale et diagonale
  for (var i = 0; i < 5; i++) {
    // Vérification horizontale
    if (verifierLigne(i)) {
      afficherBingo();
      return;
    }

    // Vérification verticale
    if (verifierColonne(i)) {
      afficherBingo();
      return;
    }

    // Vérification diagonale (de gauche à droite)
    if (verifierDiagonaleGaucheDroite()) {
      afficherBingo();
      return;
    }

    // Vérification diagonale (de droite à gauche)
    if (verifierDiagonaleDroiteGauche()) {
      afficherBingo();
      return;
    }
  }

  // Vérifier si exactement 5 cases sont sélectionnées
  var selectedCells = document.querySelectorAll(".selected");
  if (selectedCells.length === 5) {
    // Vérifier si les 5 cases sont dans la même ligne, colonne ou diagonale
    var firstRowIndex = selectedCells[0].parentNode.rowIndex;
    var firstColIndex = selectedCells[0].cellIndex;

    if (
      verifierLigne(firstRowIndex) ||
      verifierColonne(firstColIndex) ||
      verifierDiagonaleGaucheDroite() ||
      verifierDiagonaleDroiteGauche()
    ) {
      afficherBingo();
    }
  }
}

function jouerSonBingo() {
  var audio = document.getElementById("bingoSound");
  audio.volume = 0.2;
  audio.play();
}
