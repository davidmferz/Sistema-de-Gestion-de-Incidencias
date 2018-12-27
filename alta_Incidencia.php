<?php
	include 'conexion.php';
	$jsondata = array();


	$rep        = $_POST['rep'];
	$fecha      = $_POST['fecha'];
	$reporta    = $_POST['reporta'];
	$equipo     = $_POST['equipo'];
	$tienda     = $_POST['tienda'];
	$tipo       = $_POST['tipo'];
	$detalles   = $_POST['detalles'];
	$promesa    = $_POST['promesa'];
	$accion     = $_POST['accion'];
	$costo      = $_POST['costo'];
	$aplica     = $_POST['aplica'];
	$soluccion  = $_POST['solucion'];
	$status     = $_POST['status'];
	$respuesta  = $_POST['respuesta'];

	$res=mysqli_query($con,"INSERT INTO incidencias (rep,fecha,reporta,equipo,tienda,tipo,detalles,promesa,accion,costo,aplica,soluccion,status,respuesta) VALUES ('$rep','$fecha','$reporta', '$equipo', '$tienda', '$tipo','$detalles', '$promesa', '$accion','$costo', '$aplica', '$soluccion', '$status',  '$respuesta')");

	
		$jsondata["res"]=$res;
	
	echo json_encode($jsondata);
	exit;
	
?>