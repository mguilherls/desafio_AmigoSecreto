let amigos = []

function adicionarAmigo() {
    let nome = document.querySelector('input').value; 
    if (nome=='') {
        alert ('Por favor, insira um nome.');
    } else {
        amigos.push(nome);
       console.log(amigos);
       document.querySelector('input').value = '';
}
return nome;
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function limparCampo() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há nomes para sortear. Por favor, adicione um nome.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
