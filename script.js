function genererNouvelleCarte() {
    // Récupérer la référence de la table
    var table = document.getElementById("carte");
    console.log("Carte générée");

// Fonction pour mélanger un tableau
function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Fonction pour basculer l'état sélectionné d'une cellule
function toggleSelected(cell) {
    ;
    // Vérifier si la cellule est déjà sélectionnée
    if (cell.classList.contains("selected")) {
        // Supprimer la classe "selected"
        cell.classList.remove("selected");
        console.log("Case unselected");
    } else {
        // Ajouter la classe "selected"
        cell.classList.add("selected");
        console.log("Case selected")
    }

    jouerSonBingo();
}

    // Effacer le contenu de la table
    table.innerHTML = "";

    // Récupérer la liste des images dans le dossier "images"
    var imagesFolder = "images/";
    var images = [
        "Ballon.png",
        "Sadako.png",
        "Rocking_chair.png",
        "Willow.png",
        "Piano.png",
        "Revenant.png",
        "Map_aleatoire.png",
        "Game_5min.png",
        "Carte_soleil.png",
        "Marche_dans_le_sel.png",
        "Goryo.png",
        "Djinn.png",
        "Sans_preuves.png",
        "Bleasdale.png",
        "Patte_de_singe.png",
        "Empreinte.png",
        "Spiritbox.png",
        "Boite_a_musique.png",
        "Oni.png",
        "Tanglewood.png",
        "Loop_reussi.png",
        "Cri_banshee.png",
        "Ouija_cassee.png",
        "Game_parfaite.png",
        "Prison.png",
        "Poupee_vaudou.png",
        "Voiture.png",
        "Colonne_vertebrale.png",
        "Carte_death.png",
        "Mort.png",
        "Démon.png",
        "EMF.png",
        "Ouija.png",
        "Thaye.png",
        "Mist.png",
        "Photo_entite.png",
        "Lumiere_rouge.png",
        "Skin_boucher.png",
        "Cage_thoracique.png",
        "Reveil.png",
        "Esprit.png",
        "Sunny_meadows.png",
        "Ridgeview.png",
        "Edgefield.png",
        "Woodwind.png",
        "Grafton.png",
        "Eau_sale.png",
        "Miroir_casse.png",
        "No_encens.png",
        "Pas_de_cachettes.png",
        "Polter.png",
        "Pied.png",
        "Full_t1.png",
        "Banshee.png",
        "Homme_nu.png",
        // Ajoutez le reste des images ici
    ];

    // Mélanger les images
    images = shuffle(images);

    // Remplir la table avec les images
    var count = 0;
    for (var i = 0; i < 5; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < 5; j++) {
            var cell = row.insertCell(j);
            var img = document.createElement("img");
            img.src = imagesFolder + images[count];
            img.alt = "Image " + (count + 1);

            // Créer un overlay pour la superposition du logo de validation
            var overlay = document.createElement("div");
            overlay.className = "overlay";

            // Ajouter un logo de validation (visible lorsque sélectionné)
            var logo = document.createElement("img");
            logo.src = "images/Bingo_confirme.png";
            logo.alt = "Bingo_confirme";
            logo.className = "logo";

            overlay.appendChild(logo);
            cell.appendChild(img);
            cell.appendChild(overlay);

            cell.addEventListener('click', function () {
                toggleSelected(this);
                verifierBingo();
            });

            count++;
        }
    }
}


// Fonction pour masquer la grille et afficher le bouton
function masquerGrille() {
    var table = document.getElementById("carte");
    var boutonGenerer = document.getElementById("boutonGenerer");

    // Vider le contenu de la grille
    table.innerHTML = "";

    // Afficher le bouton "Générer une nouvelle carte"
    boutonGenerer.style.display = "block";

    boutonPartager.style.display = "none";

    boutonGenerer.disabled = false;

}


// Fonction pour afficher le message "Bingo"
function afficherBingo() {
    var bingoMessage = document.getElementById('bingo-message');
    bingoMessage.style.display = "block";
    console.log('BINGO')

    setTimeout(function () {
    bingoMessage.style.display = "none";
    masquerGrille();
}, 5000);
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
    var selectedCells = document.querySelectorAll('.selected');
    if (selectedCells.length === 5) {
        // Vérifier si les 5 cases sont dans la même ligne, colonne ou diagonale
        var firstRowIndex = selectedCells[0].parentNode.rowIndex;
        var firstColIndex = selectedCells[0].cellIndex;

        if (verifierLigne(firstRowIndex) ||
            verifierColonne(firstColIndex) ||
            verifierDiagonaleGaucheDroite() ||
            verifierDiagonaleDroiteGauche()) {
            afficherBingo();
        }
    }
}

function jouerSonBingo() {
    var audio = document.getElementById('bingoSound');
    audio.volume = 0.2;
    audio.play();
}
