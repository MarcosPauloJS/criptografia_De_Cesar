
const cifra = { 
     messagemOriginal:"Todos veem o que voce parece ser, mas poucos sabem o que voce realmente e",
     chave : 56,
     messagemCriptografada: ""
     };

for(let i = 0; i  < cifra.messagemOriginal.length ; i++){
     upperCase(cifra.messagemOriginal);

     console.log("letra original: " + cifra.messagemOriginal.charAt(i))
     
     const charCodeActual = cifra.messagemOriginal.charCodeAt(i);
    
     console.log("char code  atual : " + charCodeActual)

     
     if(charCodeActual === 32){
          cifra.messagemCriptografada += " ";
          console.log("if de espaço")
     }else{
          const asciiWord = dicoverCharCode(charCodeActual, cifra.chave);
          console.log("função discover retun: " , dicoverCharCode(charCodeActual, cifra.chave))

          const word = String.fromCharCode(asciiWord);

          console.log("letra criptografada: " + word);
     
          cifra.messagemCriptografada += word;
          console.log("const resultante : " + cifra.messagemCriptografada);
     }
}

function upperCase(message){
     cifra.messagemOriginal = message.toUpperCase();
}


// range 65 ao 90 (25 letras)
function dicoverCharCode(numCode, stpes){
     asciiCode = numCode
     for(let i = 0; i < stpes; i++){
          asciiCode ++
          if(asciiCode > 90) asciiCode = 65;
     }
     return asciiCode;
}

