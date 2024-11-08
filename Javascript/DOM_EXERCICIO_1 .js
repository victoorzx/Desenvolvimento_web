
function adicionaritem() {
    console.log('Lista em DOM')
    const taskText = document.getElementById('task');

    if (taskText.value==""){
        alert('Insira uma tarefa')
        return
    }

    //cria um novo elemento <li>
    const task = document.createElement('li');
    task.textContent = taskText.value;

    //para limpar o campo de entrada

    let taskList = document.getElementById('taskList')
    taskList.appendChild(task)
    taskText.value = ""
}