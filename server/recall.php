<?php
$name = $_REQUEST['name'];
$phone = $_REQUEST['phone'];
$call = "<q>" . date("d.m.y | H:i") . "<br>" . $name . "<br>" . $phone . "<br></q><br>";
if ($phone != "")
    file_put_contents('recall.html', $call, FILE_APPEND);