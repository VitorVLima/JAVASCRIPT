var numero = document.getElementById('numero')
var lista = document.getElementById('lista')
var add = document.getElementById('add')
var fim = document.getElementById('fin')
var res = document.getElementById('res')
var zer = document.getElementById("zerar")
var apg = document.getElementById("apagar")
var num = []
function adicionar(){
    let valor = Number(numero.value)
     for(let i=0;i<num.length;i++){
        if(valor==num[i]){
            alert("numero ja foi inserido, digite outro valor")
            return }
        }if(numero.value.trim() === ''){
            alert('insira um valor')
            return 
        }else if(valor<0 || valor>100){
            alert("numero inserido está fora do intervalo. digite outro valor")
            return 
        }else{
            num.push(valor)
            let opt = document.createElement('option')
            opt.textContent = "Valor " + valor + " adicionado"
            lista.appendChild(opt)

            numero.value = '';
            numero.focus()
        }
}

function maior(num){
    let maior = num[0]
    for(let i in num){
        if(num[i]>maior){
            maior = num[i]
        }else{
            maior = maior
        }
    }
    return maior
}

function menor(num){
    let menor = num[0]
    for(let i in num){
        if(num[i]<menor){
            menor = num[i]
        }else{
            menor = menor
        }
    }
    return menor
}

function media(num){
    let soma = 0
    for ( var i in num){
        soma = soma + num[i]
    }
    let media = soma/num.length
    return media
}

function finalizar(){
    if(num.length == 0){
        alert("nenhum valor foi inserido")
    }else{
        let vmaior = maior(num)
        let vmenor = menor(num)
        let vmedia = media(num)
        res.innerHTML = ""
        res.innerHTML += `<p>O vetor possui ${num.length} termos.</p>`
        res.innerHTML += `<p>O maior valor inserido foi : ${vmaior} </p>`
        res.innerHTML += `<p>O menor valor inserido foi : ${vmenor} </p>`
        res.innerHTML += `<p>A media dos valores inseridos foi : ${vmedia} </p>`

    }
    numero.focus()

}

function zerar() {
    num = [];  // Limpa o array de números
    lista.innerHTML = '';  // Limpa todas as opções da lista
    res.innerHTML = '';  // Limpa o resultado
    numero.focus()
}

add.addEventListener('click',adicionar)
fim.addEventListener('click', finalizar)
zer.addEventListener("click", zerar)
