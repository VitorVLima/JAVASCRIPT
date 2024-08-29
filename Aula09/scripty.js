function carregar(){
var agora = new Date()
var hora = agora.getHours()
var texto = document.getElementById('texto')
var imagem = document.getElementById('imagem')
if(hora>=0 && hora<6){
    cor.style.backgroundColor = 'green'
    texto.innerText = 'Boa Madrugada, '
    imagem.src = 'imagemnoite.jpg'
}
if(hora>=6 && hora<12){
    cor.style.backgroundColor = 'yellow'
    texto.innerText = 'Bom Dia, '
    imagem.src = 'imagemmanha.jpg'
}
if(hora>=12 && hora<18){
    cor.style.backgroundColor = 'purple'
    texto.innerText = 'Boa Tarde, '
    imagem.src = 'imagemtarde.jpg'
}
if(hora>=18 && hora<24){
    cor.style.backgroundColor = 'red'
    texto.innerText = 'Boa Noite, '
    imagem.src = 'imagemnoite.jpg'
}
texto.innerText+= (' agora são ' + hora + ' horas.') 
}


