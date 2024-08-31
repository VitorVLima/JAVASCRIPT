//Exercício 4: Contador Simples
//Objetivo: Criar um contador que pode ser incrementado ou decrementado com botões.

//HTML: Adicione elementos para exibir o valor do contador e dois botões para aumentar e diminuir o contador.
//CSS: Estilize o contador e os botões.
//JavaScript: Adicione scripts para aumentar e diminuir o contador com base na interação do usuário. Impedir que o contador fique abaixo de zero.
var contador = document.getElementById('contador')
var soma = document.getElementById("pos")
var sub = document.getElementById('neg')
var numero = 0
contador.textContent = numero
function somar(){
    numero = numero + 1
    contador.textContent = numero;
}

function subtrair(){
    if(numero == 0){
        numero = numero
        contador.textContent = numero;
        alert('não é possivel decremetar para números negativos')
    }else{
        numero = numero - 1
        contador.textContent = numero;
    }
}

