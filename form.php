<?php

//Doesn't work with github pages

if (isset($_POST['submit']))
{
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "rodrigo.n.marques1@gmail.com";
    $headers = "E-Mail recebido: ".$mailFrom;
    $txt = "Mensagem de: ".$name."\n\n.$message";

    mail($mailTo, $subject, $txt; $headers);
    header("Localização: index.html?mailsend");
}