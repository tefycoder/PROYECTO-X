window.addEventListener("load", cargaPag);

var mensaje = document.getElementById("mensajes");
var contenedor = document.getElementById("conversacion");
var ultMensaje = document.getElementById("mensaje");
var ultHora = document.getElementById("hora");
var chat = document.getElementsByClassName("avatar");
var imgContacto = document.getElementById("imgContacto");
var nombreContacto = document.getElementById("nombreContacto");

function cargaPag(){
	mensaje.addEventListener("keyup", subirMensaje);
	for (var i = 1; i <= chat.length-2; i++) {
		chat[i].addEventListener("click", cambiaHeader);
	}
}
function subirMensaje(e){
	var tecla = e.keyCode;
	if(tecla == 13 && mensaje.value.trim().length > 0){
		apareceMensaje();
		mensaje.value = "";
	}
}
function apareceMensaje(){
	var envoltura = document.createElement("div");
	var cajaTexto = document.createElement("div");
	var	texto = document.createElement("p");
	var contenHora = document.createElement("div");

	envoltura.classList.add("w-message", "w-message-out");
	cajaTexto.classList.add("w-message-text");
	contenHora.classList.add("time");

	texto.textContent = mensaje.value;
	ultMensaje.textContent = mensaje.value;
	var fecha = new Date();
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	var tiempo = hora + ":" + minutos;
	contenHora.textContent = tiempo;
	ultHora.textContent = tiempo;

	cajaTexto.insertBefore(texto,cajaTexto.childNodes[0]);
	cajaTexto.insertBefore(contenHora,cajaTexto.childNodes[1]);
	envoltura.insertBefore(cajaTexto,envoltura.childNodes[0]);
	contenedor.appendChild(envoltura);
}
function cambiaHeader(){
	imgContacto.src = this.childNodes[1].src ;
	nombreContacto.textContent = this.childNodes[3].textContent;
}
