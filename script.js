const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");



function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    var textSection = document.getElementById("textSection");
    textSection.classList.add("hidden");
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
 
}


function encriptar (stringEncriptada){
    let matrizCodigo = [["e" , "enter",], ["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    alert("El texto ha sido encriptado.");
    return stringEncriptada

}

function desencriptar (stringDesencriptada){
    let matrizCodigo = [["e" , "enter",], ["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    alert("El texto ha sido desencriptado.");
    return stringDesencriptada
    
}

  var copiedText = "";

document.getElementById("copyButton").addEventListener("click", function() {
    var textBox = document.getElementById("textbox");
    textBox.select();
    textBox.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copiedText = textBox.value;
  });

  var copiedText = "";

document.getElementById("pasteButton").addEventListener("click", function() {
    var textBox = document.getElementById("textbox1");
    textBox.value = copiedText;
  });

  
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"