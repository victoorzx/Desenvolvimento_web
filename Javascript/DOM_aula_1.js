console.log('Esse é o Dom!')
//cria elemneto div
const novadiv = document.createElement('div');
//definindo uma classe para a <div>(opcional)
novadiv.className = 'minha-div';
//criando um elemento <p>  e asicionando texto
const novoparagrafo = document.criateElement('p');
novoparagrafo.textContent = 'Este parágrafo dentri da nova div';
//adicionadno o <p> como filho da <div>
novadiv.append(novoparagrafo);
//adicionando a <div> no <boby> de html
document.body.append(novadiv);