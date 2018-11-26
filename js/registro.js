const Ventana = props =>{
	return(
		<div className="modal" id={props.id} tabIndex="-1" role="dialog">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <div className="">
		        	<div className="row">
		        		<div className="col-3">
		        			<img src="img/more.png" alt="Imagen no econtrada" className="rounded float-left"/>
		        		</div>
		        		<div className="col-9 mt-2">
		        			<h5>Nueva Surcursal</h5>
		        		</div>
		        	</div>
		        </div>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
		      	<br/>
		        <form id={"form-"+props.id}>

					<div className="form-group">
						<label htmlFor="nombre">Nombre de la Surcursal</label>
						<input type="text" className="form-control" id={"text-"+props.id} name="nombre" placeholder="Ingrese Nombre"/>
					</div>

					<div className="form-group">
						<label htmlFor="user">Usuario</label>
						<input type="text" className="form-control" id={"text-"+props.id} name="user" placeholder="Ingrese Nombre"/>
					</div>

					<div className="form-group">
						<label htmlFor="nombre">Contraseña</label>
						<input type="password" className="form-control" id={"text-"+props.id} name="pass" placeholder="Ingrese Nombre"/>
					</div>

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