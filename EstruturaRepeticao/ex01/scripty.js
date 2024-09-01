function verificar(){
    var finicio = document.getElementById('inicio')
    var ffim = document.getElementById('fim')
    var fpasso = document.getElementById('passo')
    var inicio = Number(finicio.value)
    var inicio = Number(finicio.value)
    var fim = Number(ffim.value)
    var passo = Number(fpasso.value)
    var res = document.getElementById('res')
    res.textContent = ''
    if(finicio.value.length==0 || ffim.value.length==0 || fpasso.value.length==0){
        res.textContent = 'IMPOSSÍVEL REALIZAR A OPERAÇÃO'
        return
    }
    if(fim>inicio)
        {   
            for(var num=inicio;num<=fim;num=num+passo){
            res.textContent += num + ' '
            }
        }else{
            for(var num=inicio;num>=fim;num=num-passo){
                res.textContent += num + ' '
                }
        }

        }
    
