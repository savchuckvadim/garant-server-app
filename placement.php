<?
require_once(__DIR__ . '/crest.php');


function displayValue($value)
{
	if (is_array($value)) {
		$result = '';
		foreach ($value as $item) $result .= $item . ', ';
		return $result;
	} else return $value;
}



$placement_options = json_decode($_REQUEST['PLACEMENT_OPTIONS'], true);

// print_r($placement_options);

session_start();
$_SESSION['PLACEMENT_OPTIONS'] = $_REQUEST['PLACEMENT_OPTIONS'];



?>




<!-- ADD FROM BUILD CODE FROM INDEX.HTML -->