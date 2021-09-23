import cipher from "./cipher.js";

console.log(cipher);

//función para que todas las letras ingresadas sean mayusculas//

document.getElementById("mensaje1").addEventListener("keyup", function () {
  this.value = this.value.toUpperCase();
});

//funcion de los botones//


document.getElementById("codificar").addEventListener("click", () => {
  let texto = document.getElementById("mensaje1").value;
  let desplazamiento = parseInt(document.getElementById("offset").value); //porque se le pone 10?//
  document.getElementById("mensaje2").value = cipher.encode(
    texto,
    desplazamiento
  );
});

document.getElementById("decodificar").addEventListener("click", () => {
  let texto = document.getElementById("mensaje2").value;
  let desplazamiento = parseInt(document.getElementById("offset").value); //porque se le pone 10?//
  document.getElementById("mensaje2").value = cipher.decode(
    texto,
    desplazamiento
  );
});

//agregar funcion para borrar input//

document.getElementById("limpiar").addEventListener("click", () => {
  alert("hellou");
});
