<?php
header("Content-type: text/xml");
$doc = new DOMDocument();
$doc->load("plik.xml");
// dodanie danych (na koniec)
// $dane = $doc->getElementsByTagName('czasopisma');
// $el = $doc->createElement('', 'E');
// $dane[0]->appendChild($el);

// usunięcie
// $parent = $doc->getElementsByTagName('dane')->item(0);
// $childs = $doc->getElementsByTagName('lol');
// $el = $childs->item(3);
// //$parent->removeChild($el);
// $el->parentNode->removeChild($el);

// zamiana
$new = $doc->createElement('lol', 'change');
$old = $childs->item(2);
$old->parentNode->replaceChild($new, $old);

echo $doc->saveXML();
	//$doc->save("new.xml");
