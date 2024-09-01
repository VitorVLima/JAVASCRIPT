//Descrição: Desenvolva um jogo onde o usuário deve adivinhar um número aleatório gerado pelo computador. Mostre uma mensagem se o número for maior, menor ou igual ao número correto.
//Objetivos: Uso de funções aleatórias, manipulação de entradas do usuário, estruturas condicionais e de repetição.

function gerarNumeroAleatorio(){
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    return numeroAleatorio
}

window.onload = function()
{var res = document.getElementById('res')


var aleatorio = gerarNumeroAleatorio()
 
 var verificar = document.getElementById('ver')
 var numero = document.getElementById('num')
 verificar.addEventListener('click', function contador(){

    var num = Number(numero.value)
    if(aleatorio === num){
        res.innerText = ' Parabens, voce acertou'
    }else{
        res.innerText = ' que pena, voce perdeu'
    }
    aleatorio = gerarNumeroAleatorio();
        // Exibe o novo número aleatório
        
})

}