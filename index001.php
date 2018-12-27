<?php
	session_start();
	if(!$_SESSION)
	{
		header('Location: index.php');
	}
	else
	{
		switch ($_SESSION["user"]) 
        {
        	case 0:
        		//No es administrador

        	break;

        	case 1:
        		//Es administrador
        		header('Location: index000.php');
        	break;
        }
	}
?>

<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Usuario</title>

	<!--INSTALACION DE REACT -->
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

	<!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	
</head>
<body>

	<!--VENTANA MODALES-->
	 <div id="vtn">   
    </div>
	
	<br><br><br><br><br><br><br><br><br>
	<div class="row">
		<div class="col-4 text-center">
			<button  type="button" class="btn btn-link" data-toggle="modal" data-target="#alta">
				<img src="img/nuevo.png" alt="imagen no econtrada">
			</button>
			<p>Registrar una nueva Incidencia</p>
		</div>

		<div class="col-4 text-center">
			<button  type="button" class="btn btn-link" data-toggle="modal" data-target="#edit">
				<img src="img/consulta.png" alt="imagen no econtrada">
			</button>
			<p>Consultar y/o Editar una Incidencia</p>
		</div>

		

		<div class="col-4 text-center">
			<button  type="button" class="btn btn-link" onclick="salir()">
				<img src="img/salir.png" alt="imagen no econtrada">
			</button>
			<p></p>
		</div>
	</div>

	

	
	<script>
		
		

		 function agregar()
		 {
		 	//e.preventDefault();//evita que se recarge la pagina
           
		 	
		 	
		 	    
		 }

		 function editar()
		 {
		 	var bandera=true;

		 	var id     = document.getElementById("selectSurcursales-edit").value;
		 	var nombre = document.getElementById("surcursal-edit").value;
		 	var user   = document.getElementById("usuario-edit").value;
		 	var pass   = document.getElementById("pass-edit").value;

		 	if(nombre.length == 0 || user.length == 0 || pass.length == 0)
		 	{
		 		bandera=false;
		 	}


		 	if(bandera)
		 	{
		 		$.ajax({
			 		url: 'editar_surcursales.php',
			 		type: 'POST',
			 		dataType: 'json',
			 		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			 		data: {
			 			   id:id,
			 			   nombre:nombre, 
			 			   user:user,
			 			   pass:pass},
			 	     beforeSend: function() {
				        cargando("edit");
				    },
			 	})
			 	.done(function() {
			 		console.log("success");
			 		$("#mnsjBien-edit").show();
			 		setTimeout('ocultarMnsj("edit","bien")',3000);
			 	})
			 	.fail(function(XMLHttpRequest) {
			 		console.log("error: ".XMLHttpRequest.responseText);
			 		$("#mnsjMal-edit").show();
			 		setTimeout('ocultarMnsj("edit","mal")',3000);
			 	})
			 	.always(function() {
			 		console.log("complete");
			 		llenarSurcursales();
			 		document.getElementById("selectSurcursales-edit").selectedIndex="0";
			 	});

		 	}
		 	else
		 	{
		 		alert("Por favor complete todos los campos, intente de nuevo");
		 	}

		 }

		 function eliminar()
		 {
		 	if(confirm("¿Seguro que desea eliminar esta surcursal?"))
		 	{
		 		var id = document.getElementById("selectSurcursales-delete").value;
		 		$.ajax({
		 			url: 'eliminar_surcursales.php',
		 			type: 'POST',
		 			dataType: 'JSON',
		 			data: {id: id},
		 		})
		 		.done(function() {
		 			console.log("success");
		 			llenarSurcursales();
		 			document.getElementById("selectSurcursales-delete").selectedIndex="0";
		 		})
		 		.fail(function() {
		 			console.log("error");
		 		})
		 		.always(function() {
		 			console.log("complete");
		 		});
		 		
		 	}
		 }

		

		function ocultarMnsj(aux,estado)
		{
			if(estado == "bien")
			{
				console.log("Ocultado mensaje de bien");
				$("#mnsjBien-"+aux).hide();

				//Resetear el formulario
				document.getElementById("form-"+aux).reset();
				//imagen de cargando ocultar
				$("#cargando-"+aux).hide();
				//Mostrar otra vez el formulario ya reseteado
				$("#form-"+aux).show();
			}

			if(estado == "mal")
			{
				console.log("Ocultado mensaje de mal");
				$("#mnsjMal-"+aux).hide();
			}
			
		}

		function cargando(aux)
		{
			$("#form-"+aux).hide();
			$("#cargando-"+aux).show();
		}
	</script>


	<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->

    <script src="js/jquery-3.2.1.min.js"></script>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>


	<!--VENTANA MODAL ENLACE-->
	<script src="js/usuario-dist.js"></script>

	<script>

		$('#form-alta').on("submit", function(e)
        {
        	e.preventDefault();//evita que se recarge la pagina
        	var formData = new FormData($('#form-alta')[0]);

		 	var bandera=true;


		 	if(bandera)
		 	{
		 		$.ajax({
			 		url: 'alta_Incidencia.php',
			 		type: 'POST',
			 		dataType: 'json',
			 		contentType: false,
			 		cache: false,
                    processData:false,
			 		data: formData,
			 	     beforeSend: function() {
				        cargando("alta");
				    },
			 	})
			 	.done(function() {
			 		console.log("success");
			 		$("#mnsjBien-alta").show();
			 		setTimeout('ocultarMnsj("alta","bien")',3000);
			 	})
			 	.fail(function(XMLHttpRequest) {
			 		
			 		$("#mnsjMal-alta").show();
			 		setTimeout('ocultarMnsj("alta","mal")',3000);
			 	})
			 	.always(function() {
			 		console.log("complete");
			 	});

		 	}
		 	else
		 	{
		 		alert("Por favor complete todos los campos, intente de nuevo");
		 	}

        });

		function llenarSurcursales()
		{
			//llenar surcursales
		    $.ajax({
		    	url: 'consulta_surcursales.php',
		    	type: 'POST',
		    	dataType: 'JSON',
		    })
		    .done(function(datos) 
		    {
                var t_re=document.getElementById("selectSurcursales-edit");
                t_re.innerHTML="<option value='0'>Seleccione una opción</option";
                for (i in datos) 
                {
                    t_re.innerHTML +=`<option value='${datos[i].id}'>${datos[i].name}</option>`;
                    
                }

                var t_re=document.getElementById("selectSurcursales-delete");
                t_re.innerHTML="<option value='0'>Seleccione una opción</option";
                for (i in datos) 
                {
                    t_re.innerHTML +=`<option value='${datos[i].id}'>${datos[i].name}</option>`;
                    
                }
		    })
		    .fail(function() 
		    {
		    	console.log("error");
		    })
		    .always(function() 
		    {
		    	console.log("complete");
		    });

		}

		$(document).ready(function() 
		{
		    $("#mnsjBien-alta").hide();
		    $("#mnsjBien-edit").hide();
		    $("#mnsjBien-delete").hide();

		    $("#mnsjMal-alta").hide();
		    $("#mnsjMal-edit").hide();
		    $("#mnsjMal-delete").hide();

		    $("#cargando-alta").hide();
		    $("#cargando-edit").hide();
		    $("#cargando-delete").hide();

		    llenarSurcursales();
		});

		$("#selectSurcursales-edit").change(function() 
		{
		  
		  var id=this.value;
		  	$.ajax({
		  		url: 'consulta_info.php',
		  		type: 'POST',
		  		dataType: 'JSON',
		  		data: {id: id},
		  	})
		  	.done(function(datos) {
		  		console.log(datos);
		  		document.getElementById("surcursal-edit").value=datos[0].nombre;
		  		document.getElementById("usuario-edit").value=datos[0].usuario;
		  		document.getElementById("pass-edit").value=datos[0].pass;
		  	})
		  	.fail(function() {
		  		console.log("error al intentar recuperar la informacion del la surcursal");
		  	})
		  	.always(function() {
		  		console.log("complete");
		  	});
		  	
		});

		function salir()
		{
			$.ajax({
				url: 'salir.php',
				type: 'POST',
				dataType: 'JSON',
				data: {param1: 'value1'},
			})
			.done(function() {
				console.log("success");
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
				location.reload();
			});
			
		}
	</script>
</body>
</html>