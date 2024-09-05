var numero = document.getElementById('numero')
var lista = document.getElementById('lista')
var add = document.getElementById('add')
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
            numero.focus();
        }
}

add.addEventListener('click',adicionar)