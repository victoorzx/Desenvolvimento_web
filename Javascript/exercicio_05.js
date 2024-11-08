console.log('Lista em DOM')
function adicionaritem() {
    const item = document.getElementById('item').value;

    //cria um novo elemento <li>
    const li = document.createElement('li');
    li.textContent = item;

    //para adicionar o item nova na lista

    const list = document.getElementById('minhalista');
    list.appendChild=(li);

    //para limpar o campo de entrada

    document.getElementById('item').value = "";

    alert('Insira um item');

}