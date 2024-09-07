//Objetivo: Criar uma tabela HTML e usar JavaScript para preenchê-la com dados de um array. Inclua a funcionalidade para adicionar novas linhas à tabela.

//Instruções:

//HTML: Crie uma tabela com um cabeçalho e um corpo. Adicione um botão para adicionar novas linhas.
//CSS: Estilize a tabela para que seja visualmente clara e atraente.
//JavaScript: Utilize um array de dados para preencher a tabela. Adicione uma função que insira uma nova linha na tabela cada vez que o botão for clicado. Use estruturas de repetição para preencher a tabela e para adicionar novas linhas.

var tab = document.getElementById('tabela')
var add = document.getElementById('add')
var rmv = document.getElementById('rmv')
var cont = 0
function tabela(){
    var linha = document.createElement('tr')
    var dado = document.createElement('td')
    var dado2 = document.createElement('td')
    dado.textContent = 'Linha ' + (cont + 1)
    dado2.textContent = " "
    tab.appendChild(linha)
    linha.appendChild(dado)
    linha.appendChild(dado2)
    cont+=1
}

function remover(){
    if(cont==0){
        alert("não há linhas para remover")
    }else{
        tab.removeChild(tab.lastChild) // Remove a última linha
        cont -= 1
    }
}

add.addEventListener("click", tabela)
rmv.addEventListener("click",remover)