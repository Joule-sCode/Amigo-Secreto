// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];
const amigoIngresado = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");

function agregarAmigo(){
    const Amigo = amigoIngresado.value.trim(); //Captura el nombre al hacer click.

    
    if (Amigo === '') {
        alert("Por favor inserte un nombre válido"); //Verifica que la lista no este vacia
        return;
    } else if (amigos.includes(Amigo)) {
        alert(`"${Amigo}" ya se encuentra en la lista.`); // Verifica que no haya duplicados
        return;
    } else {
        amigos.push(Amigo);  // Agrega el nombre a la lista de amigos
    }
    
    amigoIngresado.value = "";  // Limpia la casilla
    actualizarLista();

}

function actualizarLista() {
    lista.innerHTML = "";  // Limpia antes de agregar nuevos elementos
    
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;   
        lista.appendChild(li);  // Serializa los nombres de la lista de amigos
    });
}