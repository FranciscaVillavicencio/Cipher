const cipher = {
  
  encode: (texto, desplazamiento) => {
    //espacio guardado para mostrar el texto cifrado//
    let text1 = "";
    for (let i = 0; i < texto.length; i++) {
      //con esto todo lo ingresado se busca dentro del  codigo ascii//
      let asciiCode = texto.charCodeAt(i);
      // toma la posicion del codigo ascii, se transforma en abcedario normal, se le suma desplazamiento y luego se aplica el modulo de 26 y sumandole 65 se transforma nuevamente en ascii//
      let formula = ((asciiCode - 65 + desplazamiento) % 26) + 65;
      // hay que crear nuevo espacio (variable: espacio de memoria que guardara lo que se le "diga que contenga") para esa posición//
      let nuevaPosicion = String.fromCharCode(formula);
      text1 += nuevaPosicion;
    }
    return text1;
  }, 
  
  decode: (texto, desplazamiento) => {
    //espacio guardado para mostrar el texto cifrado//
    let text2 = "";
    for (let i = 0; i < texto.length; i++) {
      //con esto todo lo ingresado se busca dentro del  codigo ascii//
      let asciiCode = texto.charCodeAt(i);
      // toma la posicion del codigo ascii, se transforma en abcedario normal, se le suma desplazamiento y luego se aplica el modulo de 26 y sumandole 65 se transforma nuevamente en ascii//
      let formula2 = ((asciiCode + 65 - desplazamiento) % 26) + 65;
      // hay que crear nuevo espacio (variable: espacio de memoria que guardara lo que se le "diga que contenga") para esa posición//
      let nuevaPosicion2 = String.fromCharCode(formula2);
      text2 += nuevaPosicion2;
    }
    return text2;
  }
};

export default cipher; //es lo que permite exportar"

