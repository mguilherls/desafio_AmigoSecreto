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
    document.querySelector('#amigo').valor = '';
}