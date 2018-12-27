"use strict";

var Ventana = function Ventana(props) {
		return React.createElement(
				"div",
				{ className: "modal fade bd-example-modal-lg", id: props.id, tabIndex: "-1", role: "dialog" },
				React.createElement(
						"div",
						{ className: "modal-dialog modal-lg", role: "document" },
						React.createElement(
								"div",
								{ className: "modal-content" },
								React.createElement(
										"div",
										{ className: "modal-header" },
										React.createElement(
												"div",
												{ className: "" },
												React.createElement(
														"div",
														{ className: "row" },
														React.createElement(
																"div",
																{ className: "col-3" },
																props.titulo == "Nueva Incidencia" && React.createElement("img", { src: "img/nuevo-32.png", alt: "Imagen no econtrada", className: "rounded float-left" }),
																props.titulo == "Editar Incidencia" && React.createElement("img", { src: "img/edit-32.png", alt: "Imagen no econtrada", className: "rounded float-left" }),
																props.titulo == "Eliminar Surcursal" && React.createElement("img", { src: "img/delete-48.png", alt: "Imagen no econtrada", className: "rounded float-left" })
														),
														React.createElement(
																"div",
																{ className: "col-9 mt-2" },
																React.createElement(
																		"h5",
																		null,
																		props.titulo
																)
														)
												)
										),
										React.createElement(
												"button",
												{ type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
												React.createElement(
														"span",
														{ "aria-hidden": "true" },
														"\xD7"
												)
										)
								),
								React.createElement(
										"div",
										{ className: "modal-body" },
										React.createElement("br", null),
										React.createElement(
												"div",
												{ className: "alert alert-success text-center", id: "mnsjBien-" + props.id },
												props.mensaje
										),
										React.createElement(
												"div",
												{ className: "alert alert-danger text-center", id: "mnsjMal-" + props.id },
												"Error"
										),
										React.createElement(
												"div",
												{ className: "text-center", id: "cargando-" + props.id },
												React.createElement("img", { src: "img/cargando.gif", alt: "Imagen no econtrada" })
										),
										props.titulo != "Nueva Incidencia" && React.createElement(
												"div",
												{ className: "form-group" },
												React.createElement(
														"label",
														{ htmlFor: "exampleFormControlSelect1" },
														"Seleccione una surcursal"
												),
												React.createElement(
														"select",
														{ className: "form-control", id: "selectSurcursales-" + props.id },
														React.createElement(
																"option",
																{ value: "0" },
																"Seleccione una opcion"
														)
												),
												React.createElement("br", null)
										),
										props.titulo != "Eliminar Surcursal" && React.createElement(
												"div",
												null,
												React.createElement(
														"form",
														{ id: "form-" + props.id },
														React.createElement(
																"div",
																{ className: "form-group" },
																React.createElement(
																		"label",
																		{ htmlFor: "rep" },
																		"#REP"
																),
																React.createElement("input", { type: "text", className: "form-control", id: "rep-" + props.id, name: "rep", placeholder: "Ingrese Nombre" })
														),
														React.createElement(
																"div",
																{ className: "form-group" },
																React.createElement(
																		"label",
																		{ htmlFor: "fecha" },
																		"Fecha"
																),
																React.createElement("input", { type: "date", className: "form-control", id: "fecha-" + props.id, name: "fecha", placeholder: "Ingrese Nombre" })
														),
														React.createElement(
																"div",
																{ className: "form-group" },
																React.createElement(
																		"label",
																		{ htmlFor: "reporta" },
																		"Quien Reporta"
																),
																React.createElement("input", { type: "text", className: "form-control", id: "reporta-" + props.id, name: "reporta", placeholder: "Ingrese Nombre" })
														),
														React.createElement(
																"div",
																{ className: "form-group" },
																React.createElement(
																		"label",
																		{ htmlFor: "equipo" },
																		"#Equipo"
																),
																React.createElement("input", { type: "text", className: "form-control", id: "equipo-" + props.id, name: "equipo", placeholder: "Ingrese Nombre" })
														),
														React.createElement(
																"div",
																{ className: "form-group" },
																React.createElement(
																		"label",
																		{ htmlFor: "tienda" },
																		"#Tienda / Departamento"
																),
																React.createElement("input", { type: "text", className: "form-control", id: "tienda-" + props.id, name: "tienda", placeholder: "Ingrese Nombre" })
														),
														React.createElement(
																"div",
																{ className: "form-group" },
																React.createElement(
																		"label",
																		{ htmlFor: "equipo" },
																		"#Equipo"
																),
																React.createElement("input", { type: "text", className: "form-control", id: "equipo-" + props.id, name: "equipo", placeholder: "Ingrese Nombre" })
														),
														React.createElement(
																"div",
																{ className: "form-group" },
																React.createElement(
																		"label",
																		{ htmlFor: "tipo" },
																		"Tipo de Incidencia"
																),
																React.createElement("input", { type: "text", className: "form-control", id: "tipo-" + props.id, name: "tipo", placeholder: "Ingrese Nombre" })
														),
														React.createElement(
																"div",
																{ className: "form-group" },
																React.createElement(
																		"label",
																		{ htmlFor: "detalles" },
																		"Especificacion detallada de la falla"
																),
																React.createElement("textarea", { className: "form-control", id: "detalles-" + props.id, name: "detalles", rows: "4", cols: "50" })
														),
														React.createElement(
																"div",
																{ className: "form-group" },
																React.createElement(
																		"label",
																		{ htmlFor: "promesa" },
																		"Fecha de promesa de solucion"
																),
																React.createElement("input", { type: "date", className: "form-control", id: "promesa-" + props.id, name: "promesa", placeholder: "Ingrese Nombre" })
														),
														React.createElement(
																"div",
																{ className: "form-group" },
																React.createElement(
																		"label",
																		{ htmlFor: "accion" },
																		"Accion Realizada "
																),
																React.createElement("input", { type: "text", className: "form-control", id: "accion-" + props.id, name: "accion", placeholder: "Ingrese Nombre" })
														),
														React.createElement(
																"div",
																{ className: "form-group" },
																React.createElement(
																		"label",
																		{ htmlFor: "costo" },
																		"Costo Autorizado o Gastado"
																),
																React.createElement("input", { type: "text", className: "form-control", id: "costo-" + props.id, name: "costo", placeholder: "Ingrese Nombre" })
														),
														React.createElement(
																"div",
																{ className: "form-group" },
																React.createElement(
																		"label",
																		{ htmlFor: "aplica" },
																		"Aplica Sanc."
																),
																React.createElement("input", { type: "text", className: "form-control", id: "aplica-" + props.id, name: "aplica", placeholder: "Ingrese Nombre" })
														),
														React.createElement(
																"div",
																{ className: "form-group" },
																React.createElement(
																		"label",
																		{ htmlFor: "soluccion" },
																		"Fecha de solucion"
																),
																React.createElement("input", { type: "date", className: "form-control", id: "solucion-" + props.id, name: "solucion", placeholder: "Ingrese Nombre" })
														),
														React.createElement(
																"div",
																{ className: "form-group" },
																React.createElement(
																		"label",
																		{ htmlFor: "status" },
																		"Status"
																),
																React.createElement(
																		"select",
																		{ name: "status", id: "status-" + props.id, className: "form-control" },
																		React.createElement(
																				"option",
																				{ value: "0" },
																				"Pendiente"
																		),
																		React.createElement(
																				"option",
																				{ value: "1" },
																				"Liberado"
																		)
																)
														),
														React.createElement(
																"div",
																{ className: "form-group" },
																React.createElement(
																		"label",
																		{ htmlFor: "respuesta" },
																		"Dias de respuesta"
																),
																React.createElement("input", { type: "text", className: "form-control", id: "respuesta-" + props.id, name: "respuesta", placeholder: "Dias de respuesta" })
														),
														React.createElement(
																"div",
																{ className: "modal-footer" },
																props.titulo == "Nueva Incidencia" && React.createElement(
																		"button",
																		{ type: "submit", className: "btn btn-primary" },
																		"Guardar"
																),
																props.titulo == "Editar Incidencia" && React.createElement(
																		"button",
																		{ type: "button", className: "btn btn-warning", onClick: editar },
																		"Editar"
																),
																props.titulo == "Eliminar Surcursal" && React.createElement(
																		"button",
																		{ type: "button", className: "btn btn-danger", onClick: eliminar },
																		"Eliminar"
																),
																React.createElement(
																		"button",
																		{ type: "button", className: "btn btn-secondary", "data-dismiss": "modal" },
																		"Close"
																)
														)
												)
										)
								)
						)
				)
		);
};

ReactDOM.render(React.createElement(
		"div",
		null,
		React.createElement(Ventana, { id: "alta", titulo: "Nueva Incidencia", mensaje: "Se inserto correctamente" }),
		React.createElement(Ventana, { id: "edit", titulo: "Editar Incidencia", mensaje: "Se edito correctamente" }),
		React.createElement(Ventana, { id: "delete", titulo: "Eliminar Incidencia", mensaje: "Se elimino correctamente" })
), document.getElementById('vtn'));