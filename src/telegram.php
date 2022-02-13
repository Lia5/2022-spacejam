<?php
/* https://api.telegram.org/bot5245697118:AAHsAiEFFgJWZ_mliuHRx4TYcnXs-EZcOAU/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */ 
// api.telegram.org/bot1198467129:AAGlyX7kvzDVgpdMv9j-1pX83xblcjlQTwA/getUpdates,

// if(isset($_POST['info'])) {
    $info = $_POST['info'];
// } else {
//     $info = '-';
// }

// if(isset($_POST['name'])) {
    $name = $_POST['name']; if ($name == '') { $name = '-'; };
    $email = $_POST['email']; if ($email == '') { $email = '-'; };
// } else {
//     $name = 'Поле отсутствует в форме';
// }


// UTM
// if(isset($_POST['utm_source'])) {
    $utm_source = $_POST['utm_source']; if ($utm_source == '') { $utm_source = '-'; };
// } else {
//     $utm_source = '-';
// }
// if(isset($_POST['utm_medium'])) {
    $utm_medium = $_POST['utm_medium']; if ($utm_medium == '') { $utm_medium = '-'; };
// } else {
//     $utm_medium = '-';
// }
// if(isset($_POST['utm_term'])) {
    $utm_term = $_POST['utm_term']; if ($utm_term == '') { $utm_term = '-'; };
// } else {
//     $utm_term = '-';
// }
// if(isset($_POST['utm_content'])) {
    $utm_content = $_POST['utm_content']; if ($utm_content == '') { $utm_content = '-'; };
// } else {
//     $utm_content = '-';
// }
// if(isset($_POST['utm_campaign'])) {
    $utm_campaign = $_POST['utm_campaign']; if ($utm_campaign == '') { $utm_campaign = '-'; };
// } else {
//     $utm_campaign = '-';
// }



$token = "5245697118:AAHsAiEFFgJWZ_mliuHRx4TYcnXs-EZcOAU";
$chat_id = "-613036600";

$arr = array(
    'Имя: ' => $name,
    'Email: ' => $email,
    'Форма: ' => $info,
    'utm_source' => $utm_source,
    'utm_medium' => $utm_medium,
    'utm_term' => $utm_term,
    'utm_content' => $utm_content,
    'utm_campaign' => $utm_campaign,

);


foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };
  
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
  
  if ($sendToTelegram) {
    header('Location: index.html');
  } else {
    echo "Error";
  }
?>