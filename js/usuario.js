

const Ventana = props =>{
	return(
		<div className="modal fade bd-example-modal-lg" id={props.id} tabIndex="-1" role="dialog">
		  <div className="modal-dialog modal-lg" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <div className="">
		        	<div className="row">
		        		<div className="col-3">
		        			{
		        				props.titulo == "Nueva Incidencia" &&
		        				<img src="img/nuevo-32.png" alt="Imagen no econtrada" className="rounded float-left"/>
		        			}
		        			{
		        				props.titulo == "Editar Incidencia" &&
		        				<img src="img/edit-32.png" alt="Imagen no econtrada" className="rounded float-left"/>
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

		      	{props.titulo != "Nueva Incidencia" &&
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
  								<label htmlFor="rep">#REP</label>
  								<input type="text" className="form-control" id={"rep-"+props.id} name="rep" placeholder="Ingrese Nombre"/>
  							</div>
  	
  							<div className="form-group">
  								<label htmlFor="fecha">Fecha</label>
  								<input type="date" className="form-control" id={"fecha-"+props.id} name="fecha" placeholder="Ingrese Nombre"/>
  							</div>

  							<div className="form-group">
  								<label htmlFor="reporta">Quien Reporta</label>
  								<input type="text" className="form-control" id={"reporta-"+props.id} name="reporta" placeholder="Ingrese Nombre"/>
  							</div>
  							
  							<div className="form-group">
  								<label htmlFor="equipo">#Equipo</label>
  								<input type="text" className="form-control" id={"equipo-"+props.id} name="equipo" placeholder="Ingrese Nombre"/>
  							</div>

  							<div className="form-group">
  								<label htmlFor="tienda">#Tienda / Departamento</label>
  								<input type="text" className="form-control" id={"tienda-"+props.id} name="tienda" placeholder="Ingrese Nombre"/>
  							</div>
  							
  							<div className="form-group">
  								<label htmlFor="equipo">#Equipo</label>
  								<input type="text" className="form-control" id={"equipo-"+props.id} name="equipo" placeholder="Ingrese Nombre"/>
  							</div>

  							<div className="form-group">
  								<label htmlFor="tipo">Tipo de Incidencia</label>
  								<input type="text" className="form-control" id={"tipo-"+props.id} name="tipo" placeholder="Ingrese Nombre"/>
  							</div>

  							<div className="form-group">
  								<label htmlFor="detalles">Especificacion detallada de la falla</label>
  								<textarea  className="form-control" id={"detalles-"+props.id} name="detalles" rows="4" cols="50">
  								</textarea>
  							</div>
  							
  							<div className="form-group">
  								<label htmlFor="promesa">Fecha de promesa de solucion</label>
  								<input type="date" className="form-control" id={"promesa-"+props.id} name="promesa" placeholder="Ingrese Nombre"/>
  							</div>

  							<div className="form-group">
  								<label htmlFor="accion">Accion Realizada </label>
  								<input type="text" className="form-control" id={"accion-"+props.id} name="accion" placeholder="Ingrese Nombre"/>
  							</div>

  							<div className="form-group">
  								<label htmlFor="costo">Costo Autorizado o Gastado</label>
  								<input type="text" className="form-control" id={"costo-"+props.id} name="costo" placeholder="Ingrese Nombre"/>
  							</div>

  							<div className="form-group">
  								<label htmlFor="aplica">Aplica Sanc.</label>
  								<input type="text" className="form-control" id={"aplica-"+props.id} name="aplica" placeholder="Ingrese Nombre"/>
  							</div>

  							<div className="form-group">
  								<label htmlFor="soluccion">Fecha de solucion</label>
  								<input type="date" className="form-control" id={"solucion-"+props.id} name="solucion" placeholder="Ingrese Nombre"/>
  							</div>

  							<div className="form-group">
  								<label htmlFor="status">Status</label>
  								<select name="status" id={"status-"+props.id}  className="form-control">
	  								<option value="0">Pendiente</option>
	  								<option value="1">Liberado</option>
  								</select>
  							</div>

  							<div className="form-group">
  								<label htmlFor="respuesta">Dias de respuesta</label>
  								<input type="text" className="form-control" id={"respuesta-"+props.id} name="respuesta" placeholder="Dias de respuesta"/>
  							</div>

  							<div className="modal-footer">
						      	{ props.titulo == "Nueva Incidencia" &&
						      	 	<button type="submit" className="btn btn-primary">Guardar</button>
						      	}

						      	{ props.titulo == "Editar Incidencia" &&
						      	 	<button type="button" className="btn btn-warning" onClick={editar}>Editar</button>
						      	}

						      	{ props.titulo == "Eliminar Surcursal" &&
						      	 	<button type="button" className="btn btn-danger" onClick={eliminar}>Eliminar</button>
						      	}
						        
						        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						     </div>
  						</form>
		      		</div>
		      	}
		      </div>
		      
		      
		    </div>
		  </div>
		</div>
	)
};



ReactDOM.render(
	<div>
		<Ventana id="alta"   titulo="Nueva Incidencia" mensaje="Se inserto correctamente"/>
		<Ventana id="edit"   titulo="Editar Incidencia" mensaje="Se edito correctamente"/>
		<Ventana id="delete" titulo="Eliminar Incidencia" mensaje="Se elimino correctamente"/>
	</div>,
	document.getElementById('vtn')
);