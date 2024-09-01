//Contador de Clique
//HTML: Crie um botão (<button>) e um elemento de parágrafo (<p>) para exibir o número de cliques.
//CSS: Estilize o botão para que tenha um fundo colorido e uma borda distinta. O parágrafo deve ter uma fonte grande e visível.
//JavaScript: Ao clicar no botão, use uma estrutura de repetição para incrementar e exibir o contador de cliques no parágrafo.

var res = document.getElementById('res')
var contar = document.getElementById('cont')
var zerar = document.getElementById('zerar')
var cont = 0


contar.addEventListener('click', function contador(){
    cont = cont + 1
    res.innerText = cont
    if(cont>10){
        document.body.style.backgroundColor = 'red'
        
    }
})


zerar.addEventListener('click', function zero(){
    cont = 0
    res.innerText = cont
    document.body.style.backgroundColor = ''
})


