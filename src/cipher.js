const cipher = {
  
  encode: (texto, desplazamiento) => {
    //espacio guardado para mostrar el texto cifrado//
    let text1 = "";
   
    
    for (let i = 0; i < texto.length; i++) {
      //charCodeAt, permite transformar el texto en codigo Ascii//
      let asciiCode = texto.charCodeAt(i);

      if (asciiCode >=65 && asciiCode<=90){
       let formulaMayuscula = ((asciiCode - 65 + parseInt(desplazamiento)) % 26) + 65;
       text1+= String.fromCharCode(formulaMayuscula);
      } else if (asciiCode >=97 && asciiCode <=122 ){
        let formulaMinuscula = ((asciiCode - 97 + parseInt(desplazamiento)) % 26) + 97;
        text1 += String.fromCharCode(formulaMinuscula);
      }else {
        text1+= String.fromCharCode(asciiCode)
      }
    
    }
    return text1;
  },
  
  decode: (texto, desplazamiento) => {
    //espacio guardado para mostrar el texto cifrado//
    let text2 = "";
    
    for (let i = 0; i < texto.length; i++) {
      //con esto todo lo ingresado se busca dentro del  codigo ascii//
      let asciiCode = texto.charCodeAt(i);

      if (asciiCode >=65 && asciiCode<=90){
        let formulaMayuscula = ((asciiCode - 90 - parseInt(desplazamiento)) % 26) + 90;
        text2+= String.fromCharCode(formulaMayuscula);
       }else if (asciiCode >=97 && asciiCode <=122 ){
        let formulaMinuscula = ((asciiCode -122 - parseInt(desplazamiento)) % 26) + 122;
        text2 += String.fromCharCode(formulaMinuscula);
      }else {
        text2+= String.fromCharCode(asciiCode)
      }
    }
    return text2;
  }
};

export default cipher; //es lo que permite exportar"

