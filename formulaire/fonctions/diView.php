<?php
function errorView($msg)
 {
    return '<div class="mdl-textfield mdl-js-textfield">
            <div class="mdl-textfield__error" style="visibility : visible;">' . $msg . '</div>
           </div>';
  }

 ?>
