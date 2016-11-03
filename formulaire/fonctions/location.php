<?php
function go($path){
    header('location:'.$path);
}

function backToLogin($urlData){
    go("index.php".$urlData);
}
?>
