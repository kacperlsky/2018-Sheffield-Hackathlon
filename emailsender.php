<?php
$to = "moreni123@gmail.com";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: kacperlodzinski99@gmail.com" . "\r\n" ;

mail($to,$subject,$txt,$headers);
?>