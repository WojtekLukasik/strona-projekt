<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    // $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];
    $subject = "Some Subjecyt";
    $mailTo = "wojtek.lukasik@yahoo.pl";
    // $headers = "From: ". $mailFrom;
    $headers = array("From: from@example.com",
        "Reply-To: replyto@example.com",
        "X-Mailer: PHP/" . PHP_VERSION
    );
    // $txt = "You have received an e-mail from ".$name. ". \n\n".$message;
    $txt = "Some message";
    if (mail($mailTo, $subject, $txt, $headers)) { 
        echo '<p>Your message has been sent!</p>';
    } else { 
        echo '<p>Something went wrong, go back and try again!</p>'; 
    }
    header("Location: contact.html?mailsend");
}
?>