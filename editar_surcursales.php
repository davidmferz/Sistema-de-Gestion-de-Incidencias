<?php

	include'conexion.php';
	$id=$_POST['id'];
	$surcursal=$_POST['nombre'];
	$usuario=$_POST['user'];
	$pass=$_POST['pass'];

	$jsondata = array();

	$log =mysqli_query($con,"UPDATE usuarios SET nombre='$surcursal', usuario='$usuario',pass='$pass' WHERE id=".$id);

		if ($log) 	
		{
			
			$bandera = true;
			
		}
		else
		{
			$bandera=false;
		}

	$jsondata["resultado"]=$bandera;
	echo json_encode($jsondata);
?>