//Objetivo: Criar um cronômetro que pode ser iniciado, pausado e reiniciado.

//HTML: Crie botões para iniciar, pausar e reiniciar o cronômetro e um elemento para exibir o tempo.
//CSS: Estilize os botões e o cronômetro.
//JavaScript:
//Use variáveis para armazenar o tempo atual e o intervalo de atualização.
//Crie funções para iniciar, pausar e reiniciar o cronômetro.
//Utilize setInterval e clearInterval para atualizar o tempo exibido.

// cronometro.js

// Variáveis para o cronômetro
let tempo = 0;
let intervalo;
let cronometroExibido = document.getElementById('cronometro');

// Função para atualizar o cronômetro
function atualizarCronometro() {
    let horas = Math.floor(tempo / 3600);
    let minutos = Math.floor((tempo % 3600) / 60);
    let segundos = tempo % 60;

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    cronometroExibido.textContent = `${horas}:${minutos}:${segundos}`;
}

// Função para iniciar o cronômetro
function iniciar() {
    if (!intervalo) {
        intervalo = setInterval(() => {
            tempo++;
            atualizarCronometro();
        }, 1000);
    }
}

// Função para pausar o cronômetro
function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

// Função para reiniciar o cronômetro
function reiniciar() {
    pausar();
    tempo = 0;
    atualizarCronometro();
}

// Adiciona eventos aos botões
document.getElementById('start').addEventListener('click', iniciar);
document.getElementById('pause').addEventListener('click', pausar);
document.getElementById('reset').addEventListener('click', reiniciar);