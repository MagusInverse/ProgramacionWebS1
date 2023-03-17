//logica del login
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    //
    if (username != "" && password != "") {
      alert("Inicio de sesión exitoso");
      window.location.href = "../ProgramacionWebS1/index.html";
    } else {
      alert("Nombre de usuario o contraseña incorrectos");
    }
  }
  