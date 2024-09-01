function multiplicar(){
    num = document.getElementById('numero')
    res = document.getElementById('res')
    res2 = document.getElementById('tab')
    numero = Number(num.value)
    res.textContent = ' '
    res2.textContent = ' '
    if(num.value.length==0){
        alert('Digite um numero válido')
    }else{
        for(var i=0;i<=10;i++){
            var mult = i*numero
            res.innerHTML += (numero + ' x ' + i + ' = ' + mult + '<br>')
            opt = document.createElement('option')
            opt.innerHTML = (numero + ' x ' + i + ' = ' + mult)
            res2.appendChild(opt)
        }
    }
}

function somar(){
    num = document.getElementById('numero')
    res = document.getElementById('res')
    res2 = document.getElementById('tab')
    numero = Number(num.value)
    res.textContent = ' '
    res2.textContent = ' '
    if(num.value.length==0){
        alert('Digite um numero válido')
    }else{
        for(var i=0;i<=10;i++){
            var somar = i + numero
            res.innerHTML += (numero + ' + ' + i + ' = ' + somar + '<br>')
            opt = document.createElement('option')
            opt.innerHTML = (numero + ' + ' + i + ' = ' + somar)
            res2.appendChild(opt)
        }
    }
}

function subtrair(){
    num = document.getElementById('numero')
    res = document.getElementById('res')
    res2 = document.getElementById('tab')
    numero = Number(num.value)
    res.textContent = ' '
    res2.textContent = ' '
    if(num.value.length==0){
        alert('Digite um numero válido')
    }else{
        for(var i=0;i<=10;i++){
            var subtrair = numero - i
            res.innerHTML += (numero + ' - ' + i + ' = ' + subtrair + '<br>')
            opt = document.createElement('option')
            opt.innerHTML = (numero + ' - ' + i + ' = ' + subtrair)
            res2.appendChild(opt)
        }
    }
}

function dividir(){
    num = document.getElementById('numero')
    res = document.getElementById('res')
    res2 = document.getElementById('tab')
    numero = Number(num.value)
    res.textContent = ' '
    res2.textContent = ' '
    if(num.value.length==0){
        alert('Digite um numero válido')
    }else{
        for(var i=0;i<=10;i++){
            if(i===0){
                res.innerHTML += (numero + ' % ' + i + ' = ' + ' inv ' + '<br>')
            }else
            {var dividir = numero/i
            res.innerHTML += (numero + ' % ' + i + ' = ' + dividir.toFixed(2) + '<br>')}
            opt = document.createElement('option')
            opt.innerHTML = (numero + ' % ' + i + ' = ' + dividir)
            res2.appendChild(opt)
        }
    }
}