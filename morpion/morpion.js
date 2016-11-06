

var jeu = [];
var jeu2 = [];
for (var i = 0; i < 9; i++) {
    jeu.push(false);
    jeu2.push(0);
}

var cake1 = "img/cake1.png";
var cake2 = "img/cake2.png";
var cpt = 0;
var i = 0;
var joueur1 = 'Joueur 1';
var joueur2 = 'Joueur 2';

//remise à zéro
function initialisation() {
    var i = 0;
    while (i < 9) {
        document.images[i].src = "img/vide.png";
        jeu[i] = false;
        jeu2[i] = "0";
        i++;
    }
}


//fonction de verification des reponses
function verifier(a, b, c) {
    var manche = true;
    for (var i = 0; i < 9; i++) {
        if (jeu2[i] == 0) {
            manche = false;
            break;
        }
    }
    if (manche) {
        alert("Match nul");
        init = initialisation();
    } else {
        var init = false;
        if (jeu2[a] == 1 && jeu2[b] == 1 && jeu2[c] == 1) {
            alert("Joueur 1 gagne !");
            init = initialisation();
        } else if (jeu2[a] == 2 && jeu2[b] == 2 && jeu2[c] == 2) {
            alert("Joueur 2 gagne !");
            init = initialisation();
        }
    }
    return init;
}
//gestion des alignements de pions avec verifier()
function gagnant() {
    var verif = false;
    return (verifier(0, 1, 2) ||
            verifier(3, 4, 5) ||
            verifier(6, 7, 8) ||
            verifier(0, 3, 6) ||
            verifier(1, 4, 7) ||
            verifier(2, 5, 8) ||
            verifier(0, 4, 8) ||
            verifier(2, 4, 6)) ? true : false;
}
//gestion des joueurs
function jouer(n) {
    if (!jeu[n]) {
        if (cpt % 2 == 0) {
            document.images[n].src = cake1;
            jeu2[n] = 1;
            document.getElementById('joueur').innerHTML = 'C\'est le tour de : ' + joueur2;
        } else {
            document.images[n].src = cake2;
            jeu2[n] = 2;
            document.getElementById('joueur').innerHTML = 'C\'est le tour de : ' + joueur1;
        }
        jeu[n] = true;
    } else {
        alert("Erreur, case déjà jouée");
        cpt--;
    }
    cpt++;
    gagnant();
}
//affichage du tour
window.onload = function() {
    document.getElementById('joueur').innerHTML = 'C\'est le tour de : ' + joueur1;
}

//décompte
/*var compte = 30;
function decompte()
{
    document.getElementById("decompte").innerHTML = "Il reste " + compte + " secondes";

        if((compte == 0 || compte < 0)) {
        compte = 0;
        document.getElementById("decompte").innerHTML = 'Terminé !';
        clearInterval(timer);
        }

    compte--;
}
var timer = setInterval('decompte()',1000);*/
