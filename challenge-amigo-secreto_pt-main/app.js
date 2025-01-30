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