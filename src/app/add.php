<?php
if (isset($_GET['nazw'], $_GET['mini'], $_GET['lata'])) {
    header("Content-type: text/xml");
    $doc = new DOMDocument();
    $doc->load("plik.xml");
    // dodanie danych (na koniec)
    $dane = $doc->getElementsByTagName('czasopisma');
    $la = $doc->createElement('lata');
    $mi = $doc->createElement('src');
    $el = $doc->createElement($_GET['nazw']);
    $el->appendChild($la);
    $el->appendChild($mi);
    $dane[0]->appendChild($el);
}
// echo 'BRUH';
