<?php
ini_set('display_errors', 'On');
 
//Your MySQL login
$user = 'username
$password = 'password
 
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
$query = "(SELECT secs, pm05, pm25 FROM sps30 order by secs DESC LIMIT 96)";
$result = $mysqli->query($query);
while($row = mysqli_fetch_assoc($result)){
echo $row['secs'] . "/" . $row['pm05'] . "/" . $row['pm25'] . ";" ;
}

?>
