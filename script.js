

document.addEventListener("DOMContentLoaded", (event) => {
let elementosVagas = document.querySelectorAll('.disponivelVaga');
let vaga = document.getElementById('vagas')

// Converte o NodeList retornado por querySelectorAll para um array
elementosVagas = Array.from(elementosVagas);

// Agora, elementosVagas é um array que contém todos os elementos com a classe "disponivelVaga"
//console.log(elementosVagas);

elementosVagas.forEach((disponibilidadeVaga) => { 
let vagaEstado = disponibilidadeVaga.textContent.trim();

    if (vagaEstado === 'livre') {
    disponibilidadeVaga.textContent = 'ocupada';
} else if (vagaEstado === 'ocupado') {
    disponibilidadeVaga.textContent = 'livre';
}});
  });




