<?php
$con = mysqli_connect("localhost","root","","lending");
mysqli_set_charset($con,"utf-8");



//echo "phone : ".$_GET['phone'];
$phone = $_GET['phone'];
$name = $_GET['phone'];
if(isset($name)and isset($phone)) {


    $query = "INSERT INTO uzers (`name`,`phone`) VALUES ('$name','$phone');";
    $info = mysqli_query($con, $query);

}