
// dados para fazer a criptografia
const cifra = { 
     messagemOriginal:"Todos veem o que voce parece ser mas poucos sabem o que voce realmente e",
     chave : 15,
     messagemCriptografada: ""
};

// esse loop e responsavel por pecorrer todas as posições de um array
for(let i = 0; i  < cifra.messagemOriginal.length ; i++){
     upperCase(cifra.messagemOriginal);

     console.log(`letra original: ${cifra.messagemOriginal.charAt(i)}
     `);

     // armazena o codigo ascii da letra atual da messagem original
     const charCodeActual = cifra.messagemOriginal.charCodeAt(i);
    
     console.log(`char code  atual : ${charCodeActual}
     `)

     // essa condição impede que o espaço seja mudado
     if(charCodeActual === 32){
          cifra.messagemCriptografada += " ";
          console.log("if de espaço")
     }else{
          // armazena o codigo ascii resultate da criptografia
          const asciiWord = dicoverCharCode(charCodeActual, cifra.chave);
          console.log(`função discover retun: ${dicoverCharCode(charCodeActual, cifra.chave)}
          `);
          // trasnforma o codigo ascii resultate da criptografia em string 
          const word = String.fromCharCode(asciiWord);

          console.log(`letra criptografada: ${word}
          `);
     
          // vai criando a messagem resultante 
          cifra.messagemCriptografada += word;
          console.log(`const resultante: ${cifra.messagemCriptografada}
          `);
     }
}


// apenas um log de visualização
console.log(`
messagem original: ${cifra.messagemOriginal}

messagem messagem criptografada: ${cifra.messagemCriptografada}` );

// trasforma toda a string para letras maiusculas
function upperCase(message){
     cifra.messagemOriginal = message.toUpperCase();
}


// essa função faz a decoberta do codigo ascii resultante 
// range 65 ao 90 (25 letras)
function dicoverCharCode(numCode, stpes){
     asciiCode = numCode
     // logica para recomeçar o alfabeto quando chega na letra Z
     for(let i = 0; i < stpes; i++){
          asciiCode ++
          if(asciiCode > 90) asciiCode = 65;
     }
     return asciiCode;
}

