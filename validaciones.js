function validar_nombre_usuario(string){
	let name = document.getElementById("in_nombre_usuario").value;
	let myExpress=/^[A-Za-z]+$/;
	if (name.lenght >=6  & name.lenght <=30) {
		if (!myExpress.test(name)){
		return true; 
		}
		else {
		return false;
		}
	}
	else {
		return false;
	}
}

function validar_contrasena(string){

let contrasena = document.getElementById("in_contrasena");

	if( contrasena.lenght<6){
		return false;
	}
	if (/!^[A-Z0-9]+$/i.test(contrasena)){
		return false;
	}
	return true;
}

function confirmar_contrasena(stringA,stringB){

let conf_contrasena = document.getElementById("in_confirmar_contrasena");
let contrasena = document.getElementById("in_contrasena");

let c=validar_contrasena(conf_contrasena);
let g=validar_contrasena(contrasena);

if (c && g == false){
	return false
}	

if(c!=g){

	return false;

}
	return true;

}

module.exports.validar_nombre_usuario=validar_nombre_usuario;
module.exports.validar_contrasena=validar_contrasena;
module.exports.confirmar_contrasena=confirmar_contrasena; 