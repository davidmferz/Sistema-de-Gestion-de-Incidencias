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
						"h5",
						{ className: "modal-title" },
						"Nueva Surcursal"
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
							React.createElement("input", { type: "text", className: "form-control", id: "text-" + props.id, name: "nombre", placeholder: "Ingrese Nombre" })
						),
						props.id == "vtnAtencion" && React.createElement(
							"div",
							{ className: "form-group" },
							React.createElement("input", { type: "password", className: "form-control", id: "password-" + props.id, name: "nombre", placeholder: "Ingrese Contrase\xF1a" })
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