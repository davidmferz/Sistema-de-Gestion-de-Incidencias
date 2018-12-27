<?php
	session_start();
	if($_SESSION)
	{
		switch ($_SESSION["user"]) 
		{
			case 0://usuario
				header('Location: index001.php');	
			break;

			case 1://Administrador
				header('Location: index000.php');
			break;

		}
		
	}
	
?>

<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Inicio</title>
	<!--INSTALACION DE REACT -->
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

	<!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <link rel="stylesheet" href="css/estilos.css">


</head>
<body>
	<!--VENTANA MODAL DE REGISTRO -->
	 <div id="registro">   
    </div>
	
	<!--PAGINA PRINCIPAL LOGIN-->
	<div class="row" style="margin-top: 150px; ">
		<div class="col-md-5 text-center" style="border-right:1px solid #000; height: 400px;">
			<img src="img/prima-logo.png" alt="" style="margin-top: 55px">
			<h4>PIRMA</h4>
			<br><br><br>		
			<h3>Sistema de Gestion de Incidencias</h3>
		</div>

		<div class="col-md-6" style="margin-left:15px">
			<br><br>	
			<form id="miFormAltas">
			  <label for="surcursal">Seleccione una surcursal</label>
			  <div class="form-group">
			  	<select class="form-control" id="selectSurcursales">
				  <option value="0">Seleccione una opcion</option>
				</select>
			  </div>
			  <div class="form-group">
			    <label for="exampleInputEmail1">Usuario</label>
			    <input type="text" name="user" id="user" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
			  </div>

			  <div class="form-group">
			    <label for="exampleInputPassword1">Contraseña</label>
			    <input type="password" name="pass" id="pass" class="form-control" id="exampleInputPassword1" placeholder="Password">
			  </div>

			  <button type="submit" class="btn btn-primary">Entrar</button>
			  
			</form>
		</div>
		<br>
		<p>
			<button  type="button" class="btn btn-link" data-toggle="modal" data-target="#vtnTurno">Registrarse</button>
		</p>
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
    <script>
    	$( document ).ready(function() {

    		//Cargar el select de Surcursal
		    $.ajax({
		    	url: 'consulta_surcursales.php',
		    	type: 'POST',
		    	dataType: 'JSON',
		    })
		    .done(function(datos) 
		    {
                var t_re=document.getElementById("selectSurcursales");
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
		    
		});

		$("#miFormAltas").on("submit", function(e)//FUNCION AJAX PARA DAR DE ALTA UNA NUEVA OBRA
    	  {
             e.preventDefault();//evita que se recarge la pagina
             var formData = new FormData(document.getElementById("miFormAltas"));
           

            $.ajax({
                    url:"validar_login.php",
                    type:"POST",
                    dataType:"html",
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    data:formData,
                    cache:false,
                    contentType: false,
                    encode:true,
                    processData: false,
                    beforeSend: function()
                    {
                        
                    },
                    success: function(datos)
                    {
                        if(datos=="1")
                        {
                        	location.reload();
                        }
                        else
                        {
                        	alert("Usuario y/o Contraseña incorrectos, intente de nuevo");
                        }                           
                    },
                    error: function(XMLHttpRequest,data)
                    {
                      
                    } 
                });
             
          });
    </script>
</body>
</html>
