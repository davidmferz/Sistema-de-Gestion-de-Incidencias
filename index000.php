<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Administrador</title>

	<!--INSTALACION DE REACT -->
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

	<!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

</head>
<body>

	<!--VENTANA MODAL DE REGISTRO -->
	 <div id="registro">   
    </div>

	<div class="row">
		<div class="col-4">
			
			<button  type="button" class="btn btn-link" data-toggle="modal" data-target="#vtnTurno">
				<img src="img/more2.png" alt="imagen no econtrada">
			</button>
			Registrar una surcursal.
		</div>
		<div class="col-4">
			<img src="img/edit2.png" alt="imagen no econtrada">
			Editar una surcursal.
		</div>
		<div class="col-4">
			<img src="img/eliminar2.png" alt="imagen no econtrada">
			Eliminar una surcrusal.
		</div>
	</div>

	
	<script>
		 function agregar()
		 {
		    
		 }
	</script>

	<!--VENTANA MODAL ENLACE-->
	<script src="js/registro-dist.js"></script>

	<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
	
	<script src="js/jquery-3.2.1.min.js"></script>

</body>
</html>