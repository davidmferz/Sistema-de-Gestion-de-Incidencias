<?php
	include 'conexion.php';

	$id=$_POST['id'];
	$jsondata = array();

	$res=mysqli_query($con, "DELETE FROM usuarios WHERE id=".$id);

	if($res)
	{
		$jsondata["resultado"]=true;
	}
	else
	{
		$jsondata["resultado"]=false;
	}

	echo json_encode($jsondata);
	exit;
?>