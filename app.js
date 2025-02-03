// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array donde almacenaremos los nombres de los amigos
let amigos = [];

// Función para agregar un amigo al arreglo
function agregarAmigo() {
    const nombre = document.getElementById('nombreAmigo').value.trim(); // Captura el nombre

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de texto
    document.getElementById('nombreAmigo').value = "";

    // Actualizar la lista de amigos
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista existente

    // Iterar sobre el array de amigos y agregar un <li> por cada nombre
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para realizar un sorteo y mostrar un nombre aleatorio
function sorteo() {
    // Validar si hay amigos en el arreglo
    if (amigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }

    // Obtener un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    document.getElementById('resultado').innerHTML = "El amigo sorteado es: " + amigoSorteado;
}
