<?php
$db = mysqli_connect('localhost', 'host1416746_shmt', 'fT4pSmLB', 'host1416746_shmt');
mysqli_set_charset($db, 'utf8');

echo json_encode(mysqli_fetch_assoc(mysqli_query($db, 'SELECT * FROM `vars` WHERE `k`="token"')));
