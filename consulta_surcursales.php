<?php

	include'conexion.php';
	$jsondata    = array();
	$contador=0;

	$resultado=mysqli_query($con, "SELECT id, nombre from usuarios ORDER BY nombre");

	foreach ($resultado as $fila) 
	{	
		$jsondata[$contador] = array("id" => $fila['id'], "name" => $fila['nombre']);
		$contador=$contador+1;
	}

	echo json_encode($jsondata);
?>