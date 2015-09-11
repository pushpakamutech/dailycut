<?php


//Fetching Values from URL  
$play_list_name2=$_POST['play_list_name'];
$play_list_email2=$_POST['play_list_email'];
$comment2=$_POST['comment'];

$email = $play_list_email2; // Invalid email address 
$regex = "/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/"; 
if (preg_match($regex, $email)) { 
   echo "mail successfully sent";
    mail("pushpak@amutechnologies.com",$play_list_name2,$comment2);
    mail($play_list_email2,$play_list_name2,$comment2);
    } 
else {
    echo $email . " is an invalid email. Please try again.";
    }


?>