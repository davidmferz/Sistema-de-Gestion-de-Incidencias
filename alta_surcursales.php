<?php

	include'conexion.php';

	$surcursal=$_POST['nombre'];
	$usuario=$_POST['user'];
	$pass=$_POST['pass'];

	$jsondata = array();

	$log =mysqli_query($con,"INSERT INTO usuarios(nombre,usuario,pass) VALUES ('$surcursal', '$usuario', '$pass')");

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