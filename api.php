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
    array("id" => key_($key_length ), "label" => "javascript"),
    array("id" => key_($key_length ), "label" => "Cpp"),
    array("id" => key_($key_length ), "label" => "HTML"),
    array("id" => key_($key_length ), "label" => "CSS"),
    array("id" => key_($key_length ), "label" => "VADIM"),
    array("id" => key_($key_length ), "label" => "javascript"),
    array("id" => key_($key_length ), "label" => "Cpp"),
    array("id" => key_($key_length ), "label" => "HTML"),
    array("id" => key_($key_length ), "label" => "CSS"),
    array("id" => key_($key_length ), "label" => "VADIM"),
    array("id" => key_($key_length ), "label" => "javascript"),
    array("id" => key_($key_length ), "label" => "Cpp"),
    array("id" => key_($key_length ), "label" => "HTML"),
    array("id" => key_($key_length ), "label" => "CSS"),
    array("id" => key_($key_length ), "label" => "VADIM"),
    array("id" => key_($key_length ), "label" => "javascript"),
    array("id" => key_($key_length ), "label" => "Cpp"),
    array("id" => key_($key_length ), "label" => "HTML"),
    array("id" => key_($key_length ), "label" => "CSS"),
    array("id" => key_($key_length ), "label" => "VADIM"),
);

echo json_encode($list);


