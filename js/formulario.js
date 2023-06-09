const formulario = document.querySelector('#formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-].[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	comentarios: /^[a-zA-ZÀ-ÿ0-9\s¿?!()/%$ªº+-]{1,160}$/ // 1 a 160 caracteres.

}

const campos = {
	nombre: false,
	correo: false,
	telefono: false,
	comentarios: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
			break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
			break;
		case "comentarios":
			validarCampo(expresiones.comentarios, e.target, 'comentarios');
			break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', handleSubmit)
async function handleSubmit(event) {
	event.preventDefault()

	const terminos = document.getElementById('terminos');
	if (campos.nombre && campos.correo && campos.telefono && campos.comentarios) {


		const form = new FormData(this)
		const response = await fetch(this.action, {
			method: this.method,
			body: form,
			headers: {
				'Accept': 'application/JSON'
			}
		})

		if (response.ok) {
			formulario.reset();
			alert('El formulario se envio correctamente')
		}
		
	}
	else {alert("Complete los campos correctamente")}
}
		// document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		// setTimeout(() => {
		// /document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		// }, 5000);

		// document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
		// icono.classList.remove('formulario__grupo-correcto');
		// });
		// } else {
		// document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		// }