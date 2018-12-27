<?php
	include 'conexion.php';

	$id = $_POST['id'];
	$jsondata = array();

	$res=mysqli_query($con,"SELECT * FROM usuarios WHERE id=".$id);

	if(mysqli_num_rows($res) > 0)
	{
		foreach ($res as $fila )
		{
			$jsondata[0] =  array('id' => $fila['id'], 'nombre' => $fila['nombre'],'usuario' => $fila['usuario'], 'pass' => $fila['pass']);
		}
	}

	echo json_encode($jsondata);
?>