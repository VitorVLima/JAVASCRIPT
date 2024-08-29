
function verificar(){
    var a = document.getElementById('idade')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    if(isNaN(a.value) || Number(a.value) > ano){
        window.alert('Digite uma idade válida')
    }else{
        var sex = document.getElementsByName('radsex')
        idade = ano - Number(a.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sex[0].checked){
            genero = 'masculino'
            if(idade<=10){
                img.setAttribute('src', 'menino.jfif')
            }else if(idade>10 && idade<=21){
                img.setAttribute('src', 'jovemas.jfif')
            }else if(idade>21 && idade <60){
                img.setAttribute('src', 'adultomas.jfif')
            }else{
                img.setAttribute('src', 'idoso.jfif')
            }
        }else{
            genero = 'feminino'
            if(idade<=10){
                img.setAttribute('src', 'menina.jfif')
            }else if(idade>10 && idade<=21){
                img.setAttribute('src', 'jovemfem.jfif')
            }else if(idade>21 && idade <60){
                img.setAttribute('src', 'adultofem.jfif')
            }else{
                img.setAttribute('src', 'idosa.jfif')
            }
        }
        res.innerHTML = 'Detectamos: Idade ' + idade  + ' do genero ' + genero
        res.appendChild(img)
    }


}



