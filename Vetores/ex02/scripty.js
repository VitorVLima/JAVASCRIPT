//Objetivo: Desenvolver uma lista de tarefas onde o usuário pode adicionar e remover itens.


//Crie um formulário com um campo de entrada de texto e um botão para adicionar tarefas.
//Inclua uma lista (<ul>) onde as tarefas serão exibidas.


//Estilize o formulário e a lista de tarefas para que a interface seja clara e atraente.
//Garanta que cada tarefa tenha um botão de remoção ao lado.


//Adicione um evento ao formulário para adicionar uma nova tarefa à lista quando o botão for clicado ou a tecla "Enter" for pressionada.
//Inclua a funcionalidade para remover uma tarefa da lista quando o botão de remoção ao lado da tarefa for clicado.

//Implemente uma funcionalidade para marcar uma tarefa como concluída (por exemplo, alterando a cor do texto).

document.addEventListener('DOMContentLoaded', () => {
    const tarefaInput = document.getElementById('text');
    const adicionarButton = document.getElementById('adicionar');
    const lista = document.getElementById('lista');

    function adicionarTarefa() {
        const tarefaText = tarefaInput.value.trim();
        if (tarefaText === '') {
            alert("Insira uma tarefa válida");
            return;
        }

        const li = document.createElement('li');
        li.textContent = tarefaText;

        const removerButton = document.createElement('button');
        removerButton.textContent = 'Remover';
        removerButton.addEventListener('click', () => {
            lista.removeChild(li);
        });

        li.appendChild(removerButton);

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        lista.appendChild(li);
        tarefaInput.value = '';
    }

    adicionarButton.addEventListener('click', adicionarTarefa);
    tarefaInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            adicionarTarefa();
        }
    });
});