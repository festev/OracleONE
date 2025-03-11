let amigos = [];

function agregarAmigo(){
    //obtenemos los elementos
    let campoTexto = document.querySelector("#amigo");
    let listaAmigos = document.querySelector("#listaAmigos");
    let bttnDraw = document.querySelector(".button-draw");
    let bttnErase = document.querySelector(".button-erase");

    if (campoTexto.value === "" || campoTexto.value.trim() === ""){ //si no hay texto en el campo o todos son espacios, da una alerta de error
        mostrarToast("¡No hay ningún nombre ingresado!");
        campoTexto.value = "";
    }
    else{ //si no está vacío, agregamos el amigo
        amigos.push(campoTexto.value);

        if(amigos.length == 1){ //activa la lista y el botón 'Borrar todo'
            bttnErase.disabled = false;
            listaAmigos.style.display = "block";
        }

        if(amigos.length == 2){ //activa el botón 'Sortear amigo'
            bttnDraw.disabled = false;
        }

        update(100)

        campoTexto.value = "";
    }
}

function sortearAmigo(){
    let listaResultados = document.querySelector("#listaResultados");

    //elegimos un amigo al azar
    indiceAleatorio = Math.floor(Math.random() * amigos.length);
    listaResultados.style.display = "block";

    //mostramos el resultado, seguro de inyecciones
    const li = document.createElement("li");
    li.textContent = "El amigo secreto sorteado es: ";
    const span = document.createElement("span");
    span.textContent = amigos[indiceAleatorio]; //evita inyecciones
    li.appendChild(span);
    listaResultados.innerHTML = ""; //limpia antes de agregar el nuevo resultado
    listaResultados.appendChild(li);
}

function borrarTodo(){ //reiniciamos todo
    let campoTexto = document.querySelector("#amigo");
    let listaAmigos = document.querySelector("#listaAmigos");
    let listaResultados = document.querySelector("#listaResultados");
    let bttnDraw = document.querySelector(".button-draw");
    let bttnErase = document.querySelector(".button-erase");
    

    listaAmigos.innerHTML = "";
    listaResultados.innerHTML = "";
    campoTexto.value = "";
    amigos = [];
    listaAmigos.style.display = "none";
    listaResultados.style.display = "none";
    bttnDraw.disabled = true;
    bttnErase.disabled = true;
}

function mostrarToast(descripcion){
    
    const toast = document.createElement("div"); //creando el toast

    //le damos la descripción y la clase
    toast.textContent = descripcion;
    toast.className = "toast";

    //agregando el toast al DOM para que "exista"
    document.body.appendChild(toast);

    //muestra el toast
    setTimeout(function(){
    toast.style.opacity = "1";
    }, 10); //le dejamos un tiempo al navegador que procese al toast (sino no me funciona)

    //esconde el toast
    setTimeout(function(){
        toast.style.opacity = "0";
        setTimeout(function(){
            toast.remove();
        }, 500); // Segundo paso: Se oculta después de 3 segundos (esto es para no poder interactuar con el elemento aunque no tenga opacidad)
    }, 3000); // Primer paso: Se saca la opacidad después de 3 segundos
}

function update(ms){
    //obtener elementos para desactivar
    const bttnDraw = document.querySelector(".button-draw");
    const bttnErase = document.querySelector(".button-erase");
    const bttnUpdate = document.querySelector(".button-update");
    const bttnAdd = document.querySelector(".button-add");
    const campoTexto = document.querySelector("#amigo");

    //obtener lista <ul> y vaciarla
    const listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";

    //desactivar elementos para no poder interactuar mientras se actualiza la lista
    bttnDraw.disabled = true;
    bttnErase.disabled = true;
    bttnUpdate.disabled = true;
    bttnAdd.disabled = true;
    campoTexto.onkeydown = null;

    //usamos el for pedido en la tarjeta Trello
    for (let i = 0; i < amigos.length; i++) {
        setTimeout(() => {
            agregarLiAmigo(i); 
        }, i * ms);  //esto permite que los elementos aparezcan en forma cascada
    }
    bttnDraw.disabled = false;
    bttnErase.disabled = false;
    bttnUpdate.disabled = false;
    bttnAdd.disabled = false;
    campoTexto.onkeydown = function(event){if(event.key === 'Enter') agregarAmigo()};

}

function agregarLiAmigo(index){

    const listaAmigos = document.querySelector("#listaAmigos");

    //agregamos el amigo a la lista, seguro de inyecciones
    const li = document.createElement("li");
    li.textContent = amigos[index];
    listaAmigos.appendChild(li);
    const bttn = document.createElement("button");
    bttn.className = "bttn-x";
    bttn.innerHTML = "❌";
    bttn.onclick = function(){borrarAmigo(index);};
    li.appendChild(bttn);
}

function borrarAmigo(index){

    let nombre_amigo = amigos.splice(index,1)
    update(0);
    mostrarToast(`¡Amigo '${nombre_amigo[0]}' eliminado exitosamente!`)
}