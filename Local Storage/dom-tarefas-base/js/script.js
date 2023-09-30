//Selecionando Elemento
let campoTarefa = document.querySelector('#campo-tarefa');
let adicionar = document.querySelector('#botao-adicionar');
let listaTarefas = document.querySelector('#lista-tarefas');
let botaoModo = document.getElementById('alternarModo');

//Adicionando o Evento
adicionar.addEventListener('click', adicionarTarefa);

//Adicionando tarefa com a tecla enter
campoTarefa.addEventListener('keyup', function (enter) {
    if (enter.key === 'Enter') {
        adicionarTarefa();
    }
});

document.body.className = localStorage.getItem('modo') || 'modo-claro';

//Mudando cor de fundo
botaoModo.addEventListener('click', function () {
    if (document.body.className == 'modo-claro') {
        document.body.className = 'modo-escuro';
    } else {
        document.body.className = 'modo-claro';
    }
    localStorage.setItem('modo', document.body.className);
})




//Criando, Adicionando e Salvando elementos
function adicionarTarefa() {
    //Pegar o valor do campo de texto
    let nomeTarefa = campoTarefa.value;
    //Criando armazenamento no localStorage
    let itensSalvos = JSON.parse(localStorage.getItem('itens'));
    if (!Array.isArray(itensSalvos)) {
        itensSalvos = [];
      }
    //Adiciona a String no campo de texto para a variável 'itensSalvos'
    itensSalvos.push(nomeTarefa);
    //Armazenando o valor no localStorage
    localStorage.setItem('itens', JSON.stringify(itensSalvos));
    //Criando um elemento li
    let novaTarefa = document.createElement('li');
    //Definindo o conteúdo do elemento li
    novaTarefa.innerText = nomeTarefa;
    //Adicionar o item da lista ao final da lista
    listaTarefas.appendChild(novaTarefa);
    //Criar classe para o li
    novaTarefa.classList = 'lista';
    //Adicionar um ouvinte ao item da lista
    novaTarefa.addEventListener('click', function () {
        novaTarefa.classList.toggle('concluida');
    })

    
    

    //Removendo Elementos
    //Criando botão remover
    let botaoRemover = document.createElement("button");
    //Definir o texto do botao remover
    botaoRemover.innerText = "Remover";
    //Adicionar um ouvinte ao botao remover
    botaoRemover.addEventListener('click', function () {
        listaTarefas.removeChild(novaTarefa);
    })
    //Adicionar o tem da lista ao final da lista
    listaTarefas.appendChild(novaTarefa);
    //Adicionar o botão remover
    novaTarefa.appendChild(botaoRemover);
    //Limpar o campo de texto
    campoTarefa.value = null;
    //Criar classe para o botao
    botaoRemover.classList = 'botao-remover';
};