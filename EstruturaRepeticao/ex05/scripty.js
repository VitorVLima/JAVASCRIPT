//Galeria de Imagens

//Descrição: Desenvolva uma galeria de imagens com uma pequena descrição abaixo de cada imagem. Permita que o usuário navegue entre as imagens com botões "Anterior" e "Próximo".
//Objetivos: Manipulação de imagens e textos, uso de botões e eventos, navegação com JavaScript

var res = document.getElementById('res')
var proxima = document.getElementById('prox')
var anterior = document.getElementById('ant')
var cont = 0
var img = document.createElement('img')
img.setAttribute('id','foto')
var div = document.getElementById('div')
proxima.addEventListener('click', function somar(){
    cont = cont + 1
    if(cont>=5){
        cont = 5
        res.innerHTML = 'Foto ' + cont
        
    }else{
        res.innerHTML = 'Foto ' + cont
    }
    if(cont==0){
        img.setAttribute('src', 'menina.jfif')
    }
    if(cont==1){
        img.setAttribute('src', 'menino.jfif')
    }
    if(cont==2){
        img.setAttribute('src', 'jovemfem.jfif')
    }
    if(cont==3){
        img.setAttribute('src', 'jovemmas.jfif')
    }
    if(cont==4){
        img.setAttribute('src', 'idosa.jfif')
    }if(cont==5){
        img.setAttribute('src', 'idoso.jfif')
    }
    div.appendChild(img)
})


anterior.addEventListener('click', function subtrair(){
    cont = cont - 1
    if(cont<0){
        cont = 0
        res.innerHTML = 'Foto ' + cont
    }else{
        res.innerHTML = 'Foto ' + cont
    }
    if(cont==0){
        img.setAttribute('src', 'menina.jfif')
    }
    if(cont==1){
        img.setAttribute('src', 'menino.jfif')
    }
    if(cont==2){
        img.setAttribute('src', 'jovemfem.jfif')
    }
    if(cont==3){
        img.setAttribute('src', 'jovemmas.jfif')
    }
    if(cont==4){
        img.setAttribute('src', 'idosa.jfif')
    }if(cont==5){
        img.setAttribute('src', 'idoso.jfif')
    }
    div.appendChild(img)

})