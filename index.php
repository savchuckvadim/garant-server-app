<?
require_once (__DIR__.'/crest.php');
require_once (__DIR__.'/bootstrap.php');

$result = CRest::call(
		'placement.get',
		['ID' => '42', ]
	);

echo '<pre>';
	print_r($result);
echo '</pre>';