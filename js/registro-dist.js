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
								React.createElement("img", { src: "img/more.png", alt: "Imagen no econtrada", className: "rounded float-left" })
							),
							React.createElement(
								"div",
								{ className: "col-9 mt-2" },
								React.createElement(
									"h5",
									null,
									"Nueva Surcursal"
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
							React.createElement("input", { type: "text", className: "form-control", id: "text-" + props.id, name: "nombre", placeholder: "Ingrese Nombre" })
						),
						React.createElement(
							"div",
							{ className: "form-group" },
							React.createElement(
								"label",
								{ htmlFor: "user" },
								"Usuario"
							),
							React.createElement("input", { type: "text", className: "form-control", id: "text-" + props.id, name: "user", placeholder: "Ingrese Nombre" })
						),
						React.createElement(
							"div",
							{ className: "form-group" },
							React.createElement(
								"label",
								{ htmlFor: "nombre" },
								"Contrase\xF1a"
							),
							React.createElement("input", { type: "password", className: "form-control", id: "text-" + props.id, name: "pass", placeholder: "Ingrese Nombre" })
						)
					)
				),
				React.createElement(
					"div",
					{ className: "modal-footer" },
					React.createElement(
						"button",
						{ type: "button", className: "btn btn-primary", onClick: agregar },
						"Guardar"
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

ReactDOM.render(React.createElement(Ventana, { id: "vtnTurno", titulo: "Tipo de Recurso" }), document.getElementById('registro'));