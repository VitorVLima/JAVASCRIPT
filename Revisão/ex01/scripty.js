//Objetivo: Criar uma página de login com validação de usuário e senha.

//HTML: Crie um formulário de login com campos para usuário e senha, e um botão para enviar.
//CSS: Estilize o formulário e os campos.
//JavaScript:
//Use variáveis para armazenar o usuário e a senha fornecidos.
//Crie uma função para validar o login (por exemplo, verificar se o usuário e a senha correspondem a valores pré-definidos).
//Use uma estrutura de decisão para mostrar uma mensagem de sucesso ou erro com base na validação.

var usuario = document.getElementById("usuario")
var senha = document.getElementById("senha")
var bentrar = document.getElementById("entrar")
var usuario1 = "vitorvlima"
var senha1 = "Vi@076466"
var res = document.getElementById("res")

function entrar(){
    if(senha.value.trim() === '' || usuario.value.trim() === ''){
        alert("Insira usuario e senha ")
    }else{
        if(usuario.value != usuario1 || senha.value != senha1){
            res.style.color = 'red'
            res.innerHTML = ` Usuario ou Senha incorretos `
        }
        else{
            res.style.color = 'black'
            res.innerHTML =  ` DADOS CORRETOS `
            window.location.href = "pagina2.html"
        }
    }
}

bentrar.addEventListener("click",entrar)