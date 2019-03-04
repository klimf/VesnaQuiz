<?php

$db = mysqli_connect('localhost', 'host1416746_shmt', 'fT4pSmLB', 'host1416746_shmt');
mysqli_set_charset($db, 'utf8');


$data = array();

for ($i = 1; $i <= 8; $i++) {
    $data[] = mysqli_fetch_assoc(mysqli_query($db, 'SELECT * FROM `data` WHERE `id`=' . $i));
}

echo json_encode($data);