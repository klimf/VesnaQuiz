<?php

$db = mysqli_connect('localhost', 'host1416746_shmt', 'fT4pSmLB', 'host1416746_shmt');
mysqli_set_charset($db, 'utf8');
//echo json_encode($_REQUEST);

if ($_REQUEST['token'] == mysqli_fetch_assoc(mysqli_query($db, 'SELECT `v` FROM `vars` WHERE `k`="token"'))['v'] && $_REQUEST['id'] != null) {
    mysqli_query($db, '
     UPDATE `data` SET
     `id`=' . $_REQUEST['id'] . ',
     `name`="' . $_REQUEST['name'] . '",
     `title`="' . $_REQUEST['title'] . '",
     `subtitle`="' . $_REQUEST['subtitle'] . '",
     `year`="' . $_REQUEST['year'] . '",
     `description`="' . $_REQUEST['description'] . '",
     `image`="' . $_REQUEST['image'] . '" 
     WHERE `id`=' . $_REQUEST['id']);
    echo 'success';
} else {
    if ($_REQUEST['id'] == null) {
        echo 'error: invalid id';
    } else {
        echo 'error: invalid token';
    }
}

//echo '<br> req token: ' . $_REQUEST['token'];
//echo '<br> db token: ' . mysqli_fetch_assoc(mysqli_query($db, 'SELECT `v` FROM `vars` WHERE `k`="token"'))['v'];