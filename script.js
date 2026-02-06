

function PasswordShow() {
    var tipus = document.getElementById("contrasenya");
    if (tipus.type == "password") {
        tipus.type = "text";
    }
    else {
        tipus.type = "password";
    }

};
function UsuariValid() {
    
    var usuarInput = document.getElementById("usuari");
    var arrova = document.getElementById("arrova");
    // Condicions regex de trobar un @
    var arrovalletres = /@/;
    if (usuarInput.value.match(arrovalletres)) {
        arrova.classList.remove("invalid");
        arrova.classList.add("valid");
    } else {
        arrova.classList.remove("valid");
        arrova.classList.add("invalid");
    }
}
function ContraValid (){
    var contraInput = document.getElementById("contrasenya");
    var Minuscula = document.getElementById("minuscula");
    var Majuscula = document.getElementById("majuscula");
    var Numero = document.getElementById("numero");
    var Longitud = document.getElementById("longitud");
    // Condicions regex de trobar una minuscula
    var MinsuculaComprovacio = /[a-z]/g;
    if (contraInput.value.match(MinsuculaComprovacio)) {
        Minuscula.classList.remove("invalid");
        Minuscula.classList.add("valid");
    } else {
        Minuscula.classList.remove("valid");
        Minuscula.classList.add("invalid");
    }
    // Condicions regex de trobar una majuscula
    var MajusculaComprovacio = /[A-Z]/g;
    if (contraInput.value.match(MajusculaComprovacio)) {
        Majuscula.classList.remove("invalid");
        Majuscula.classList.add("valid");
    } else {
        Majuscula.classList.remove("valid");
        Majuscula.classList.add("invalid");
    }
    // Condicions regex de trobar un numero
    var numeroComprovacio = /[0-9]/g;
    if (contraInput.value.match(numeroComprovacio)) {
        Numero.classList.remove("invalid");
        Numero.classList.add("valid");
    } else {
        Numero.classList.remove("valid");
        Numero.classList.add("invalid");
    }
    // Condicions regex de trobar el lenght
    if (contraInput.value.length >= 8) {
        Longitud.classList.remove("invalid");
        Longitud.classList.add("valid");
    } else {
        Longitud.classList.remove("valid");
        Longitud.classList.add("invalid");
    }

}