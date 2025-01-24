// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo')
    if(nombre.value == ''){
        alert('Por favor, inserte un nombre.');
        return;
    }
    nombresAmigos.push(nombre.value);
    console.log(nombresAmigos);
    crearLista();
    nombre.value = '';
}

function crearLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(i=0; i<nombresAmigos.length;i++){
        let item = document.createElement('li');
        let textoItem = document.createTextNode(nombresAmigos[i]);
        item.appendChild(textoItem);
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if(!nombresAmigos.length){
        alert('No hay amigos que sortear');
        return
    }
    let indiceAleatorio = Math.floor(Math.random()*(nombresAmigos.length));
    let amigoSorteado = nombresAmigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}