<?php
$db = mysqli_connect('localhost', 'host1416746_shmt', 'fT4pSmLB', 'host1416746_shmt');
mysqli_set_charset($db, 'utf8');

if ($_REQUEST['token'] == mysqli_fetch_assoc(mysqli_query($db, 'SELECT `v` FROM `vars` WHERE `k`="token"'))['v']) {
    $call = "";//"<h1>Заявки:</h1>";
    file_put_contents('recall.html', $call);
} else {
    echo 'error: invalid token';
}