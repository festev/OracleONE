let amigos = [];
let cont_item_id = 0;

function agregarAmigo(){
    //obtenemos los elementos
    let campoTexto = document.querySelector("#amigo");
    let listaAmigos = document.querySelector("#listaAmigos");
    let bttnDraw = document.querySelector(".button-draw");
    let bttnErase = document.querySelector(".button-erase");

    if (campoTexto.value === "" || campoTexto.value.trim() === ""){ //si no hay texto en el campo o todos son espacios, da una alerta de error
        alert("ERROR: No hay ningún nombre ingresado. Por favor, inserte un nombre.")
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

        //agregamos el amigo a la lista, seguro de inyecciones
        const li = document.createElement("li");
        li.textContent = amigos[amigos.length-1];
        li.id = `item-amigo${cont_item_id}`
        listaAmigos.appendChild(li);
        const bttn = document.createElement("button");
        bttn.id = `bttn-amigo${cont_item_id}`;
        bttn.className = "bttn-x";
        cont_item_id++;
        bttn.innerHTML = "❌";
        bttn.onclick = mostrarToast;
        li.appendChild(bttn);

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

function mostrarToast(){
    //muestra el toast
    let toast = document.getElementById("toast");
    toast.style.visibility = "visible";
    toast.style.opacity = "1";

    //esconde el toast
    setTimeout(function(){
        toast.style.opacity = "0";
        setTimeout(function(){
            toast.style.visibility = "hidden";
        }, 3000); // Segundo paso: Se oculta después de 3 segundos (esto es para no poder interactuar con el elemento aunque no tenga opacidad)
    }, 3000); // Primer paso: Se saca la opacidad después de 3 segundos
}