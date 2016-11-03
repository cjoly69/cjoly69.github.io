<?php
//inclusion des constantes
include_once 'constantes/errors.php';

// inclusion des fonctions
include_once 'fonctions/diView.php';

// initialisation des variables utilisées dans la page
$errorMessage = '';
$loginFieldValue = '';


// si erreur d'identification signalée via l'url
if (isset($_GET['authenticationFailed']) && $_GET['authenticationFailed'] == 1) {
    $errorMessage = ERROR_AUTH_FAILED;
//sauvegarde de la valeur mail du login
    if (isset($_GET['withLogin']))
        $loginFieldValue = 'value="' . $_GET['withLogin'] . '" ';
}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Votre inscription</title>
    <?php include_once "mdl.html"; ?>
  </head>
<body>

  <?php
  if (!isset($user)) {
      ?>

    <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
    	<main class="mdl-layout__content">
    		<div class="mdl-card mdl-shadow--6dp">
    			<div class="mdl-card__title mdl-color--primary mdl-color-text--white">
    				<h2 class="mdl-layout mdl-card__title-text">Inscription</h2>
    			</div>
    	  	<div class="mdl-card__supporting-text">

            <!-- echec form : message d'erreur -->
            <?php echo $errorMessage != '' ? errorView($errorMessage) : ''; ?>

            <form action="verification.php" method="post">

    					<div class="mdl-textfield mdl-js-textfield">
    						<input class="mdl-textfield__input" type="text" name="mail" id = "mail"<?php echo $loginFieldValue; ?>/>
    						<label class="mdl-textfield__label" for="mail">Mail</label>
                <span id="aide"></span>
    					</div>
    					<div class="mdl-textfield mdl-js-textfield">
    						<input class="mdl-textfield__input" type="password" name="userpass1"  id = "userpass1"<?php echo $loginFieldValue; ?> />
    						<label class="mdl-textfield__label" for="userpass1">Mot de passe</label>
                <span id="aide"></span>
              </div>
              <div class="mdl-textfield mdl-js-textfield">
    						<input class="mdl-textfield__input" type="password" name="userpass2"  id = "userpass2"<?php echo $loginFieldValue; ?> />
    						<label class="mdl-textfield__label" for="userpass2">Confirmez votre mot de passe</label>
                <span id="aide"></span>
              </div>
      			</div>
              <div class=" mdl-layout mdl-card__actions mdl-card--border">
        				<button type = "submit" onclick="validLog()" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Validez</button>
        			</div>
            </form>
    		</div>
    	</main>
    </div>

    <?php
} else // identification réussie alors message
    echo "<h3>Enregistrement de" . $user['mail'] . " pris en compte .</h3>"
?>
  <script type="text/javascript" src="form.js"></script>
  </body>
</html>
