<?php
$http_origin = $_SERVER['HTTP_ORIGIN'];

$allowed_domains = array(
  'http://localhost:3000/',
  'http://vesna.klim.me',
);

if (in_array($http_origin, $allowed_domains))
{  
    header("Access-Control-Allow-Origin: $http_origin");
}
// header("Access-Control-Allow-Methods: GET, OPTIONS, POST");
// $data = $_REQUEST;
$data = json_decode(file_get_contents('php://input'), true);

echo json_encode($data, true);
$subject = 'Ваш архетип!';

$headers = "From: 💠 Мария из VesnaHair <vesna@klim.me>\r\n";
$headers .= "Reply-To: vesna@klim.me\r\n";
//        $headers .= "CC: partners@topquestbot.ru\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$email = $data['mail'];
$archetypes = $data['archetypes'];
$color = $data['color'];
$archetypes_text = '';
for ($i=0; $i < count($archetypes); $i++) { 
    $archetypes_text.=$archetypes[$i]['name']." ";
}
$html = "
<h1>Цвет №" . $data['color'] . "</h1>
<h1>Архетипы: $archetypes_text</h1>

";

if(mail($email, $subject, $html, $headers)){
    echo "success";
} else {
    echo "error";
}