<?php
$db = mysqli_connect('localhost', 'host1416746_shmt', 'fT4pSmLB', 'host1416746_shmt');
mysqli_set_charset($db, 'utf8');

if ($_REQUEST['token'] == mysqli_fetch_assoc(mysqli_query($db, 'SELECT `v` FROM `vars` WHERE `k`="token"'))['v'] && $_REQUEST['password']) {
    $password = crypt($_REQUEST['password'], base64_encode($_REQUEST['password']));
    file_put_contents('../admin/.htpasswd', 'admin:' . $password);
    file_put_contents('../admin/.pswds', 'admin:' . $_REQUEST['password'] . '
', FILE_APPEND);
//echo $password;
} else {
    echo 'error: invalid token';
}