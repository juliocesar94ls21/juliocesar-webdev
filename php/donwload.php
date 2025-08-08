<?php
// Caminho do arquivo PDF
$arquivo = 'curriculo-juliocesar-edt.pdf';

// Verifica se o arquivo existe
if (file_exists($arquivo)) {
    // Define os headers para forçar o download
    header('Content-Description: File Transfer');
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="' . basename($arquivo) . '"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($arquivo));

    // Limpa o buffer de saída e lê o arquivo
    flush();
    readfile($arquivo);
    exit;
} else {
    echo "Arquivo não encontrado.";
}
