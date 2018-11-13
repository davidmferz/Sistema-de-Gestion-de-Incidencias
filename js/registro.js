const Ventana = props =>{
	return(
		<div className="modal" id={props.id} tabIndex="-1" role="dialog">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title">Nueva Surcursal</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
		      	<br/>
		        <form id={"form-"+props.id}>
					<div className="form-group">
						<input type="text" className="form-control" id={"text-"+props.id} name="nombre" placeholder="Ingrese Nombre"/>
					</div>
					 {props.id == "vtnAtencion"  &&
				        <div className="form-group">
							<input type="password" className="form-control" id={"password-"+props.id} name="nombre" placeholder="Ingrese Contraseña"/>
						</div>
				      }
				</form>
		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-primary" onClick={agregar}>Guardar</button>
		        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		      </div>
		    </div>
		  </div>
		</div>
	)
};



ReactDOM.render(<Ventana id="vtnTurno" titulo="Tipo de Recurso"/>, document.getElementById('registro'));