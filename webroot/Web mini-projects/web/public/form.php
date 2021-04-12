<?php
require_once('../lib/config.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$username = $_POST['username'];
	$password = $_POST['password'];
	$sql = "SELECT id FROM users where username = '".$username."' and password = '".$password."'";
	$stmt = $conn->prepare($sql);
	$stmt->execute(); 
	$stmt->setFetchMode(PDO::FETCH_ASSOC);
	$data = $stmt->fetch();
	if(!$data){
		echo'login failed';
	}
	else{
		header("Location: blog.html", true, 301);
		die();
		//$_SESSION["ID"] = .$username.;
		//$_SESSION["PWD"] = .$password.;
		//die();
	}
}

?>