import cipher from './cipher.js';

console.log(cipher);

//agregar función al botón//

document.getElementById("codificar").addEventListener("click", () => {
    alert("hellou"); 

});

//función para que todas las letras ingresadas sean mayusculas//


     document.getElementById("mensaje1").addEventListener("keyup", function(){ 
     this.value = this.value.toUpperCase();

    });