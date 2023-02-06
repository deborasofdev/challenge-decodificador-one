const textArea = document.querySelector(".texto-area");
const mensagem = document.querySelector(".mensagem");
var imgAtual = "imagens/astronauta.png";
var imgfrase1 = "imagens/frase1.png";
var imgfrase3 = "imagens/frase3.png";
var imgcrip = "imagens/astronauta2.png";
var imgcrip3 = "imagens/astronauta3.png";
var imgfrase3 = "imagens/frase3.PNG";
var imgfrase4 = "imagens/frase4.PNG";
var btnCopiar = document.querySelector(".botao-copiar");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//botão encriptar
function botaoEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";

    document.getElementById("imagem1").src = imgcrip;
    document.getElementById("frase1").src = imgfrase3;
    document.getElementById("frase2").style.display = "none";
    
}

//função encriptar
function encriptar(stringEcriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEcriptada = stringEcriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEcriptada.includes(matrizCodigo[i][0])) {
            stringEcriptada = stringEcriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEcriptada;
}

//botão desencriptar
function botaoDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

//funçao desencriptar
function desencriptar(stringDesencriptada) {

    document.getElementById("imagem1").src = imgcrip3;
    document.getElementById("frase1").src = imgfrase4;
    document.getElementById("frase2").style.display = "none";

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

// Botão copiar
document.getElementById('copiar').addEventListener('click', copiar);

async function copiar() {
    
    let text = document.querySelector("#texto").value;
    await navigator.clipboard.writeText(text);
}


