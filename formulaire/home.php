<?php
session_start();
include_once "inscription.php";
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mon site</title>
    <?php include_once "mdl.html"; ?>
  </head>
  <body>
    <h1>Bienvenue </h1>
    <h2>sur le blog</h2>
    <button class=" mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
      Déconnexion
    </button>
  </body>
</html>
