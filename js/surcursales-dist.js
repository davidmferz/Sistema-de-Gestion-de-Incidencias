"use strict";

var Ventana = function Ventana(props) {
	return React.createElement(
		"div",
		{ className: "modal", id: props.id, tabIndex: "-1", role: "dialog" },
		React.createElement(
			"div",
			{ className: "modal-dialog", role: "document" },
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
								props.titulo == "Nueva Surcursal" && React.createElement("img", { src: "img/more.png", alt: "Imagen no econtrada", className: "rounded float-left" }),
								props.titulo == "Editar Surcursal" && React.createElement("img", { src: "img/edit-48.png", alt: "Imagen no econtrada", className: "rounded float-left" }),
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
					props.titulo != "Nueva Surcursal" && React.createElement(
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
									{ htmlFor: "nombre" },
									"Nombre de la Surcursal"
								),
								React.createElement("input", { type: "text", className: "form-control", id: "surcursal-" + props.id, name: "nombre", placeholder: "Ingrese Nombre" })
							),
							React.createElement(
								"div",
								{ className: "form-group" },
								React.createElement(
									"label",
									{ htmlFor: "user" },
									"Usuario"
								),
								React.createElement("input", { type: "text", className: "form-control", id: "usuario-" + props.id, name: "user", placeholder: "Ingrese Nombre" })
							),
							React.createElement(
								"div",
								{ className: "form-group" },
								React.createElement(
									"label",
									{ htmlFor: "nombre" },
									"Contrase\xF1a"
								),
								React.createElement("input", { type: "password", className: "form-control", id: "pass-" + props.id, name: "pass", placeholder: "Ingrese Nombre" })
							)
						)
					)
				),
				React.createElement(
					"div",
					{ className: "modal-footer" },
					props.titulo == "Nueva Surcursal" && React.createElement(
						"button",
						{ type: "button", className: "btn btn-primary", onClick: agregar },
						"Guardar"
					),
					props.titulo == "Editar Surcursal" && React.createElement(
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
	);
};

ReactDOM.render(React.createElement(
	"div",
	null,
	React.createElement(Ventana, { id: "alta", titulo: "Nueva Surcursal", mensaje: "Se inserto correctamente" }),
	React.createElement(Ventana, { id: "edit", titulo: "Editar Surcursal", mensaje: "Se edito correctamente" }),
	React.createElement(Ventana, { id: "delete", titulo: "Eliminar Surcursal", mensaje: "Se elimino correctamente" })
), document.getElementById('vtn'));