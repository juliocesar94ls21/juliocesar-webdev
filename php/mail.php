<?php
// Dados do e-mail
$para = "juliocesar94ls21@gmail.com";
$assunto = "Teste de envio de e-mail via PHP";
$mensagem = "Olá Julio,\n\nEste é um e-mail de teste enviado pela função mail() do PHP.";
$cabecalhos = "From: contato@seudominio.com\r\n";
$cabecalhos .= "Reply-To: contato@seudominio.com\r\n";
$cabecalhos .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Envia o e-mail
if (mail($para, $assunto, $mensagem, $cabecalhos)) {
    echo "E-mail enviado com sucesso!";
} else {
    echo "Erro ao enviar e-mail.";
}
