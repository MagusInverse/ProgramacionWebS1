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
  
    var usuario = {
      nombreCompleto: nombreCompleto,
      nombreUsuario: nombreUsuario,
      correoElectronico: correoElectronico,
      claveIngreso: claveIngreso,
      fechaNacimiento: fechaNacimiento,
      direccionDespacho: direccionDespacho,
    };
  
    var usuarioJSON = JSON.stringify(usuario);
    var archivo = new File([usuarioJSON], "usuarios.txt", { type: "text/plain" });
    var writer = new FileWriter();
    writer.write(archivo);
  }