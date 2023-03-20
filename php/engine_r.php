<?php 
$host= $_SERVER['HTTP_HOST'];
$host= 'http://'.$host.':3000';

header('Access-Control-Allow-Origin: '.$host);
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000');
header('Content-Length: 0');
header('Content-Type: text/plain');
include("db_config.php");

$rp = json_decode(file_get_contents('php://input'), true);

if(isset($rp['username']) AND isset($rp['password'])) {
    $uid=$rp['username'];
    $pswd=$rp['password'];
    $sql="SELECT * FROM batch WHERE name='$uid' AND class='$pswd'";
    $result=mysqli_query($db, $sql);
    if(mysqli_num_rows($result) == 1) {
        $response['msg']="yes Batch Created Successfully!";
        echo json_encode($response);
    } else {
        $response['msg']="no Batch Created Successfully!";
        echo json_encode($response);
    }
} else {
    $response['msg']="na Batch Created Successfully!";
    echo json_encode($response);
}
?>