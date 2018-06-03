<?php
//mysqli_select_db($mysql_database, $bd) or die("Could not select database");
//mysqli_Conn
function mysqli_query1($query){
    $mysql_hostname = "localhost";
    $mysql_user = "id1359338_admin";
    $mysql_password = "Ganesha@123";
    $mysql_database = "id1359338_commondb";
        $prefix = "";
    $bd = mysqli_connect($mysql_hostname, $mysql_user, $mysql_password,$mysql_database) or die("Could not connect database");
    $result=mysqli_query($bd,$query);
    return $result;
}
?>