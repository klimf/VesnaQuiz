<?php
$extension = pathinfo($_FILES['file']['name'])['extension'];
if (($extension != "png" && $extension != "jpg" && $extension != "gif") || $_FILES['file']['error'] < 0) {
    echo '';
} else {
    $path = '../uploads/image' . generateRandomString() . '.' . $extension;
    move_uploaded_file($_FILES['file']['tmp_name'], $path);
    echo $path;
}

function generateRandomString($length = 8)
{
    $characters = '0123456789';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
