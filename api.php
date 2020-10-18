<?php
function key_($max)
{
    $chars="qazxswedcvfrtgbnhyujmkiolp1234567890QAZXSWEDCVFRTGBNHYUJMKIOLP";
    $size=StrLen($chars)-1;
    $key=null;
    while($max--){$key.=$chars[rand(0,$size)];}
    return $key;
}
$key_length = 15;
$list = array(
    key_($key_length) => array("label" => "javascript"),
    key_($key_length) => array("label" => "javascript"),
    key_($key_length) => array("label" => "javascript"),
    key_($key_length) => array("label" => "javascript"),
    key_($key_length) => array("label" => "javascript"),
);

echo json_encode($list);


