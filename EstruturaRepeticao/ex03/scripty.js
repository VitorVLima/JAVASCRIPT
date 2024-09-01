document.addEventListener('DOMContentLoaded', function() {
    var seletor = document.getElementById('seletor');

    seletor.addEventListener('change', function() {
        var cor = seletor.value;
        switch (cor) {
            case 'Azul':
                document.body.style.backgroundColor = 'blue';
                break;
            case 'Amarelo':
                document.body.style.backgroundColor = 'yellow';
                break;
            case 'Roxo':
                document.body.style.backgroundColor = 'purple';
                break;
            case 'Vermelho':
                document.body.style.backgroundColor = 'red';
                break;
            default:
                document.body.style.backgroundColor = '';
        }
    });
})
