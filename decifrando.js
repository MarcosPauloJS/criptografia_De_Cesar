
const cifra = { 
     messagemOriginal:"o corvo branco vai pousar na montanha ao amanhecer",
     chave : 1,
     messagemCriptografada: ""
     };

for(let i = 0; i  < cifra.messagemOriginal.length ; i++){
     upperCase();
     
     console.log("letra original:")
     console.log(cifra.messagemOriginal.charAt(i))
     if(cifra.messagemOriginal.charCodeAt(i) === 32){
          cifra.messagemCriptografada += " ";
     }else{
          const asciiWord = cifra.messagemOriginal.charCodeAt(i) + cifra.chave;

          console.log("letra criptografada:")
          console.log(String.fromCharCode(asciiWord));

          const word = String.fromCharCode(asciiWord);
     
          cifra.messagemCriptografada += word;
          console.log(cifra.messagemCriptografada);
     }
}

function upperCase(){
     cifra.messagemOriginal = cifra.messagemOriginal.toUpperCase();
}
