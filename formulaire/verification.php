<?php

session_start();
include_once 'fonctions/diView.php';
include_once 'fonctions/location.php';
//constantes fictives
define('USER_MAIL', "toto@gmail.com");
define('USER_PASS', "azerty");

// vérification : mail + mots de passe
if (isset($_POST["mail"]) && isset($_POST["userpass1"]) && isset($_POST["userpass2"])) {

    // si les infos d'identification transmises
    // stockage du login / pass / confirm
    $login = $_POST["mail"];
    $password = $_POST["userpass1"];
    $confirm = $_POST["userpass2"];

    // vérification si infos transmises correspondent à infos attendues
    if ($login == USER_MAIL && $password == USER_PASS && $confirm == $password) {
        /* correspondance alors création de l'objet $user (simulation de BDD)*/
        $user = [
              "mail" => USER_MAIL,
              "userpass1" => USER_PASS,
              "userpass2" => USER_PASS
        ];

        // on enregistre les infos utilisateurs dans les infos de SESSION
        $_SESSION['user'] = $user;

        go('home.php');

    } else {
        // sinon renvoi une var url
        backToLogin("?authenticationFailed=1&withLogin=".$login );
    }
} else
    backToLogin("");

?>
