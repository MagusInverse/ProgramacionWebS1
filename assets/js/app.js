function guardar() {
    var nombreCompleto = document.getElementById("nombreCompleto").value;
    var nombreUsuario = document.getElementById("nombreUsuario").value;
    var correoElectronico = document.getElementById("correoElectronico").value;
    var claveIngreso = document.getElementById("claveIngreso").value;
    var repetirClave = document.getElementById("repetirClave").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var direccionDespacho = document.getElementById("direccionDespacho").value;
  
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