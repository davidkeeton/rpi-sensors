<?php
ini_set('display_errors', 'On');

 
//Your MySQL data
$password = 'username';
$user = 'password';
 
//The server / hostname of your MySQL installation.
$server = 'localhost';
 
//The name of your MySQL database.
$database = 'sensors';
 
//Connect using PDO.

$mysqli = new mysqli($server , $user, $password, $database);
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}
$query = "SELECT * FROM dht22 order by datetime DESC LIMIT 96";
$result = $mysqli->query($query);
while($row = mysqli_fetch_array($result)){
echo $row['datetime'] . "/" . $row['temperature'] . "/" . $row['humidity'] . ";" ;
}

?>
