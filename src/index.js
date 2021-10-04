import cipher from "./cipher.js";



//funcion de los botones//

document.getElementById("codificar").addEventListener("click", () => {
  let texto = document.getElementById("mensaje1").value;
  let desplazamiento = document.getElementById("offset").value; 
  document.getElementById("mensaje2").value = cipher.encode(
    texto,
    desplazamiento
  );
});

document.getElementById("decodificar").addEventListener("click", () => {
  let texto = document.getElementById("mensaje2").value;
  let desplazamiento = document.getElementById("offset").value; 
  document.getElementById("mensaje2").value = cipher.decode(
    texto,
    desplazamiento
  );
});

//agregar funcion para borrar input//


document.getElementById("limpiar").addEventListener("click", () => {
    document.getElementById("offset").value = "";
    document.getElementById("mensaje1").value = "";
    document.getElementById("mensaje2").value = "";
  
});