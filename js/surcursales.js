

const Ventana = props =>{
	return(
		<div className="modal" id={props.id} tabIndex="-1" role="dialog">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <div className="">
		        	<div className="row">
		        		<div className="col-3">
		        			{
		        				props.titulo == "Nueva Surcursal" &&
		        				<img src="img/more.png" alt="Imagen no econtrada" className="rounded float-left"/>
		        			}
		        			{
		        				props.titulo == "Editar Surcursal" &&
		        				<img src="img/edit-48.png" alt="Imagen no econtrada" className="rounded float-left"/>
		        			}
		        			{
		        				props.titulo == "Eliminar Surcursal" &&
		        				<img src="img/delete-48.png" alt="Imagen no econtrada" className="rounded float-left"/>
		        			}

		        			
		        		</div>
		        		<div className="col-9 mt-2">
		        			<h5>{props.titulo}</h5>
		        		</div>
		        	</div>
		        </div>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
		      	<br/>

				<div className="alert alert-success text-center" id={"mnsjBien-"+props.id}>{props.mensaje}</div>

				<div className="alert alert-danger text-center" id={"mnsjMal-"+props.id}>Error</div>

				<div className="text-center" id={"cargando-"+props.id}> 
					<img src="img/cargando.gif" alt="Imagen no econtrada" />
				</div>

		      	{props.titulo != "Nueva Surcursal" &&
		      		<div className="form-group">
					    <label htmlFor="exampleFormControlSelect1">Seleccione una surcursal</label>
					    <select className="form-control" id={"selectSurcursales-"+props.id}>
					      <option value="0">Seleccione una opcion</option>
					    </select>
					    <br/>
					 </div>
		      	}

		      	{ props.titulo != "Eliminar Surcursal" &&
		      		<div>
		      			<form id={"form-"+props.id}>
		      	
  							<div className="form-group">
  								<label htmlFor="nombre">Nombre de la Surcursal</label>
  								<input type="text" className="form-control" id={"surcursal-"+props.id} name="nombre" placeholder="Ingrese Nombre"/>
  							</div>
  	
  							<div className="form-group">
  								<label htmlFor="user">Usuario</label>
  								<input type="text" className="form-control" id={"usuario-"+props.id} name="user" placeholder="Ingrese Nombre"/>
  							</div>
  	
  							<div className="form-group">
  								<label htmlFor="nombre">Contraseña</label>
  								<input type="password" className="form-control" id={"pass-"+props.id} name="pass" placeholder="Ingrese Nombre"/>
  							</div>
  	
  						</form>
		      		</div>
		      	}
		      </div>
		      
		      <div className="modal-footer">
		      	{ props.titulo == "Nueva Surcursal" &&
		      	 	<button type="button" className="btn btn-primary" onClick={agregar}>Guardar</button>
		      	}

		      	{ props.titulo == "Editar Surcursal" &&
		      	 	<button type="button" className="btn btn-warning" onClick={editar}>Editar</button>
		      	}

		      	{ props.titulo == "Eliminar Surcursal" &&
		      	 	<button type="button" className="btn btn-danger" onClick={eliminar}>Eliminar</button>
		      	}
		        
		        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		      </div>
		    </div>
		  </div>
		</div>
	)
};



ReactDOM.render(
	<div>
		<Ventana id="alta"   titulo="Nueva Surcursal" mensaje="Se inserto correctamente"/>
		<Ventana id="edit"   titulo="Editar Surcursal" mensaje="Se edito correctamente"/>
		<Ventana id="delete" titulo="Eliminar Surcursal" mensaje="Se elimino correctamente"/>
	</div>,
	document.getElementById('vtn')
);