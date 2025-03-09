let amigos = [];

function agregarAmigo(){
    let campoTexto = document.querySelector("#amigo");
    let listaAmigos = document.querySelector("#listaAmigos");

    if (campoTexto.value == ""){
        alert("ERROR: No hay ningún nombre ingresado. Por favor, inserte un nombre.")
    }
    else{
        amigos.push(campoTexto.value);
        campoTexto.value = "";
    }

    //listaAmigos.
}