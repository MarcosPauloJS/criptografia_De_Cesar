
// dados para fazer a criptografia
const cifra = { 
     messagemOriginal: "",
     chave : 15,
     messagemCriptografada: "rfpbyure b frh grzcb r tnaune grzcb"
};

// esse loop e responsavel por pecorrer todas as posições de um array
for(let i = 0; i  < cifra.messagemCriptografada.length ; i++){
     upperCase(cifra.messagemCriptografada);

     console.log(`letra criptografada: ${cifra.messagemCriptografada.charAt(i)}
     `);

     // armazena o codigo ascii da letra atual da messagem original
     const charCodeActual = cifra.messagemCriptografada.charCodeAt(i);
    
     console.log(`char code  atual : ${charCodeActual}
     `)

     // essa condição impede que o espaço seja mudado
     if(charCodeActual === 32){
          cifra.messagemOriginal += " ";
          console.log("if de espaço")
     }else{
          // armazena o codigo ascii resultate da criptografia
          const asciiWord = dicoverCharCode(charCodeActual, cifra.chave);
          console.log(`função discover retun: ${asciiWord}
          `);
          // trasnforma o codigo ascii resultate da criptografia em string 
          const word = String.fromCharCode(asciiWord);

          console.log(`letra Decriptografada: ${word}
          `);
     
          // vai criando a messagem resultante 
          cifra.messagemOriginal += word;
          console.log(`const resultante: ${cifra.messagemOriginal}
          `);
     }
}


// apenas um log de visualização
console.log(`
messagem criptografada: ${cifra.messagemCriptografada}
messagem original: ${cifra.messagemOriginal}`);

// trasforma toda a string para letras maiusculas
function upperCase(message){
     cifra.messagemCriptografada = message.toUpperCase();
}


// essa função faz a decoberta do codigo ascii resultante 
// range 65 ao 90 (25 letras)
function dicoverCharCode(numCode, stpes){
     asciiCode = numCode
     // logica para recomeçar o alfabeto quando chega na letra Z
     for(let i = 0; i < stpes; i++){
          asciiCode --
          if(asciiCode < 65) asciiCode = 90;
     }
     return asciiCode;
}

