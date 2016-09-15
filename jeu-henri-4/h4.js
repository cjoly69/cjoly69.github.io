var img = document.getElementsByClassName('nains');

var indexQuestion = 0;
var listeQuestions = [{
    texte: "De quelle couleur est le cheval blanc d'Henri IV ?",
    reponse: "blanche"
}, {
    texte: "Combien y a-t-il de nains avec Blanche-Neige ? (chiffre)",
    reponse: "7",
}];

function poseQuestion() {
    var questionEnCours = listeQuestions[indexQuestion];

    document.getElementById('question').innerText = questionEnCours.texte;
    document.getElementById('reponse').value = "";
}

function valider() {

    var reponse = document.getElementById('reponse').value;
    console.log(reponse);
    var reponseJuste = listeQuestions[indexQuestion].reponse;
    if (reponse.toLowerCase() == reponseJuste.toLowerCase()) {
        indexQuestion += 1;
        if (listeQuestions.length > indexQuestion) {
            refresh();
            //j'affiche le span bravo
            reponse = document.getElementsByTagName('span')[0].style.display = "block";
            poseQuestion();
            changeImg();
        } else {
            refresh();
            //j'affiche le span bravo terminé
            reponse = document.getElementsByTagName('span')[2].style.display = "block";
        }
    } else {
        refresh();
        //j'affiche le span perdu
        reponse = document.getElementsByTagName('span')[1].style.display = "block";
        reponse = document.getElementsByTagName('span')[1].style.color = "darkred";
    }return poseQuestion();
}
// function refresh() pour nettoyer les span
function refresh() {
    var span = document.getElementsByTagName('span');
    for (var i = 0; i < span.length; i++) {
        var fresh = span[i].style.display = "none";
    }

}
// function pour changer l'image de fond
function changeImg() {
    var quest;
    if (quest = listeQuestions[1].texte) {
        var elems = document.getElementsByClassName('nains');
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'block';
        }
        var cache = document.getElementsByClassName('henri');
        for (var i = 0; i < cache.length; i++) {
            cache[i].style.display = 'none';
        }
    }else {
      cache[i].style.display = 'block';
      elems[i].style.display = 'none';
    }
}
