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
        {id: 1, name:"Ballon.png"},
        {id: 2, name:"Sadako.png"},
        {id: 3, name:"Rocking_chair.png"},
        {id: 4, name:"Willow.png"},
        {id: 5, name:"Piano.png"},
        {id: 6, name:"Revenant.png"},
        {id: 7, name:"Map_aleatoire.png"},
        {id: 8, name:"Game_5min.png"},
        {id: 9, name:"Carte_soleil.png"},
        {id: 10, name:"Marche_dans_le_sel.png"},
        {id: 11, name: "Goryo.png"},
        {id: 12, name: "Djinn.png"},
        {id: 13, name:"Sans_preuves.png"},
        {id: 14, name:"Bleasdale.png"},
        {id: 15, name:"Patte_de_singe.png"},
        {id: 16, name:"Empreinte.png"},
        {id: 17, name:"Spiritbox.png"},
        {id: 18, name:"Boite_a_musique.png"},
        {id: 19, name:"Oni.png"},
        {id: 20, name:"Tanglewood.png"},
        {id: 21, name:"Loop_reussi.png"},
        {id: 22, name:"Cri_banshee.png"},
        {id: 23, name:"Ouija_cassee.png"},
        {id: 24, name:"Game_parfaite.png"},
        {id: 25, name:"Prison.png"},
        {id: 26, name:"Poupee_vaudou.png"},
        {id: 27, name:"Voiture.png"},
        {id: 28, name:"Colonne_vertebrale.png"},
        {id: 29, name:"Carte_death.png"},
        {id: 30, name:"Mort.png"},
        {id: 31, name:"Démon.png"},
        {id: 32, name:"EMF.png"},
        {id: 33, name:"Ouija.png"},
        {id: 34, name:"Thaye.png"},
        {id: 35, name:"Mist.png"},
        {id: 36, name:"Photo_entite.png"},
        {id: 37, name:"Lumiere_rouge.png"},
        {id: 38, name:"Skin_boucher.png"},
        {id: 39, name:"Cage_thoracique.png"},
        {id: 40, name:"Reveil.png"},
        {id: 41, name:"Esprit.png"},
        {id: 42, name:"Sunny_meadows.png"},
        {id: 43, name:"Ridgeview.png"},
        {id: 44, name:"Edgefield.png"},
        {id: 45, name:"Woodwind.png"},
        {id: 46, name:"Grafton.png"},
        {id: 47, name:"Eau_sale.png"},
        {id: 48, name:"Miroir_casse.png"},
        {id: 49, name:"No_encens.png"},
        {id: 50, name:"Pas_de_cachettes.png"},
        {id: 51, name:"Polter.png"},
        {id: 52, name:"Pied.png"},
        {id: 53, name:"Full_t1.png"},
        {id: 54, name:"Banshee.png"},
        {id: 55, name:"Homme_nu.png"}
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
