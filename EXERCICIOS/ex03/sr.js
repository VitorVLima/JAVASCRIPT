//Quiz Simples

//Desenvolva um quiz com algumas perguntas e opções de resposta. Use JavaScript para verificar se as respostas estão corretas e forneça feedback usando if e else para cada pergunta

var q1 = document.getElementsByName('q1')
var q2 = document.getElementsByName('q2')
var q3 = document.getElementsByName('q3')
var q4 = document.getElementsByName('q4')
var q5 = document.getElementsByName('q5')
var q6 = document.getElementsByName('q6')
var q7 = document.getElementsByName('q7')
var q8 = document.getElementsByName('q8')
var q9 = document.getElementsByName('q9')
var q10 = document.getElementsByName('q10')

function verificar(){
    var contador = 0
    
    if(q1[4].checked){
        contador = contador + 1
    }else{
        contador = contador
    }

    if(q2[2].checked){
        contador = contador + 1
    }else{
        contador = contador
    }

    if(q3[2].checked){
        contador = contador + 1
    }else{
        contador = contador
    }

    if(q4[2].checked){
        contador = contador + 1
    }else{
        contador = contador
    }

    if(q5[2].checked){
        contador = contador + 1
    }else{
        contador = contador
    }

    if(q6[2].checked){
        contador = contador + 1
    }else{
        contador = contador
    }

    if(q7[2].checked){
        contador = contador + 1
    }else{
        contador = contador
    }

    if(q8[2].checked){
        contador = contador + 1
    }else{
        contador = contador
    }
    if(q9[2].checked){
        contador = contador + 1
    }else{
        contador = contador
    }
    if(q10[2].checked){
        contador = contador + 1
    }else{
        contador = contador
    }




    window.alert('nota: ' + contador)
}