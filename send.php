<?php
 
 if(isset($_POST['email']) && !empty($_POST['email'])){

    //variaveis do dados capturador no formulario de contato.
    $email = $_POST['email']; 
    $name = $_POST['name'];
    $assunto = $_POST['assunto'];
    $msg = $_POST['msg'];
 
    $to = "contato@studioths.net";
    $subject ="Orçamento para ".$assunto." -THS Studio";
    $body = "Nome:".$name. "\r\n".
            "Email:".$email. "\r\n".
            "Mensagem:". $msg;
    $header = "From:thainav2010@gmail.com"."\r\n"
            ."Replay-to".$email. "\r\n"
            ."X=Mailer:PHP/".phpversion();
    
    if(mail($to,$subject,$body,$header)){
        echo(" Mensagem enviado com sucesso.");
        header('Location: ./contato.html?sucesso');
    }else{
        echo("Email não enviado.");
        header('Location: ./contato.html?erro');
    }
 }


?>