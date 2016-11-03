// je crée des variables de récupération
var mail = ["toto@gmail.com"]
var mdp = ["azerty"];
var confirm = mdp;


function validLog() {
    nbCaracteres();
    arobase();
}


// vérification du nombre de caractères pour identifiant
function nbCaracteres() {
    if ((document.getElementById("userpass1").value.length <= 4)&&(document.getElementById("userpass2").value.length <= 4)) {
        alert("Attention ! Votre mot de passe doit contenir 5 lettres au minimum");
        return false;
    } else {
        return true;
    }
}


// vérification du mail (présence de @)
function arobase() {
    if (document.getElementById("mail").value.indexOf("@") != -1) {
        return true;
    } else {
        alert("Attention! Il manque l'arobase");
        return false;
    }
}
