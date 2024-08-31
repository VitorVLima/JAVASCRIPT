//5. Controle de Temperatura
//Objetivo: Crie um formulário com um campo para inserir a temperatura e um menu suspenso para escolher a unidade de conversão (Celsius para Fahrenheit ou vice-versa). Use CSS para estilizar o formulário. Em JavaScript, ao clicar no botão de conversão, verifique a unidade selecionada e faça a conversão adequada, exibindo o resultado na tela.

var temperatura = document.getElementById('temp')
temp = Number(temperatura.value)
var unidade = document.getElementsByName('rdtem')
var resultado = document.getElementById('res')

function vcelsius(){
    temp = Number(temperatura.value)
    if(temperatura.value.length==0){
        alert('Digite um valor válido para conversão !')
    }else{
        if(unidade[0].checked){
            resultado.textContent = temp + ' °C'
        }
        if(unidade[1].checked){
            resultado.textContent = ((temp -32)*5/9).toFixed(2) + ' °C'
        }if(unidade[2].checked){
            resultado.textContent = (temp  - 273.15).toFixed(2) + ' °C'
        }
    }
}
function vfah(){
    temp = Number(temperatura.value)
    if(temperatura.value.length==0){
        alert('Digite um valor válido para conversão !')
    }else{
        if(unidade[0].checked){
            resultado.textContent = (((temp)*9/5 )+ 32).toFixed(2) + ' °F'
        }
        if(unidade[1].checked){
            resultado.textContent = temp + ' °F'
        }if(unidade[2].checked){
            resultado.textContent = (((temp - 273.15)*9/5) + 32 ).toFixed(2) + ' °F'
        }
    }
}

function vkelvin(){
    temp = Number(temperatura.value)
    if(temperatura.value.length==0){
        alert('Digite um valor válido para conversão !')
    }else{
        if(unidade[0].checked){
            resultado.textContent = ((temp + 273.15)).toFixed(2) + ' K'
        }
        if(unidade[1].checked){
            resultado.textContent = ((temp -32)*5/9 + 273.15).toFixed(2) + ' K'
        }if(unidade[2].checked){
            resultado.textContent = temp + ' K'
        }
    }
}