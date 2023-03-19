function guardar() {
    var nombreCompleto = document.getElementById("nombre").value;
    var nombreUsuario = document.getElementById("usuario").value;
    var correoElectronico = document.getElementById("correo").value;
    var claveIngreso = document.getElementById("clave").value;
    var repetirClave = document.getElementById("repetir-clave").value;
    var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    var direccionDespacho = document.getElementById("direccion").value;
  
    if (claveIngreso !== repetirClave) {
      alert("Las claves ingresadas no coinciden");
      return false;
    }

    if (nombreCompleto === "" || nombreUsuario === "" || correoElectronico === "" || claveIngreso === "" || repetirClave === "" || fechaNacimiento ==="" ){
        alert("Favor completar todos los campos requeridos");
        return false;
    }
  
    var correoFormato = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i;
    if (!correoFormato.test(correoElectronico)){
        alert("Por favor ingrese una dirección de correo válida");
        return false;
    }

    var validarPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,18}$/;
    if (!validarPassword.test(claveIngreso)){
      alert("Por favor ingrese una contraseña/clave válida");
      return false; 
    }

    var anoNac = parseInt(fechaNacimiento.substring(0,4));
    var hoy = new Date();
    var anoActual = hoy.getFullYear();
    var edad = anoActual - anoNac;
    if (edad < 13) {
      alert("Debe tener al menos 13 años de edad para registrarse.");
      return false;
    }

    var usuario = {
      nombreCompleto: nombreCompleto,
      nombreUsuario: nombreUsuario,
      correoElectronico: correoElectronico,
      claveIngreso: claveIngreso,
      fechaNacimiento: fechaNacimiento,
      direccionDespacho: direccionDespacho,
    };
  
    var usuarioJSON = JSON.stringify(usuario);
    console.log(usuarioJSON);
  }

function limpiar(){
    document.getElementById("nombre").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("clave").value = "";
    document.getElementById("repetir-clave").value = "";
    document.getElementById("fecha-nacimiento").value = "";
    document.getElementById("direccion").value = "";
}
  