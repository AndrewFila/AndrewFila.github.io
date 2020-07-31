<?php
if(isset($_POST(['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "amfila@mtu.edu";
    
    mail();
}

?>
