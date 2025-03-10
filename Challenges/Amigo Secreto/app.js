let amigos = [];

function agregarAmigo(){
    let campoTexto = document.querySelector("#amigo");
    let listaAmigos = document.querySelector("#listaAmigos");
    let bttnDraw = document.querySelector(".button-draw");

    if (campoTexto.value == ""){
        alert("ERROR: No hay ningún nombre ingresado. Por favor, inserte un nombre.")
    }
    else{
        amigos.push(campoTexto.value);

        if(amigos.length == 2){
            bttnDraw.disabled = false;
        }

        listaAmigos.style.display = "block";
        listaAmigos.innerHTML += `<li>${amigos[amigos.length-1]}</li>`;
        campoTexto.value = "";
    }
}

function sortearAmigo(){
    let listaResultados = document.querySelector("#listaResultados");

    indiceAleatorio = Math.floor(Math.random() * amigos.length);
    listaResultados.style.display = "block";
    listaResultados.innerHTML = `<li>El amigo secreto sorteado es: <span>${amigos[indiceAleatorio]}</span></li>`
}