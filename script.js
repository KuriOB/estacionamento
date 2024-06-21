

document.addEventListener("DOMContentLoaded", (event) => {
    let elementosVagas = document.querySelectorAll('#vaga')
    elementosVagas.forEach(element => {
   let vaga = element.querySelector('.disponivelVaga');

   //botão pra trocar entre livre e ocupado
   vaga.addEventListener('click', function() {
        if (vaga.classList.contains('livre')) {
            vaga.classList.toggle("livre");
            vaga.classList.toggle("ocupado");
        vaga.textContent = 'ocupado';
            } else{
                vaga.classList.toggle("livre");
                vaga.classList.toggle("ocupado");
            vaga.textContent = 'livre';
            } 
        }); 
   
    let removerVaga = element.querySelector('.remover');
    removerVaga.addEventListener('click', function() {
        if (vaga.classList.contains('ocupado')) {
            alert('A vaga só pode ser removida quando estiver no estado "livre".');
            } else{ element.remove() ;}
        });
    /*let botaoAdd = document.getElementById('adicionador') ;
    let vagas = 10;
    let adicionarVaga = document.createElement('div');
    let novasVagas = document.getElementById('vagas')
    let referencia = document.getElementById('vaga')

    botaoAdd.addEventListener('click', function() {
    //adicionarVaga.setAtribute('id', 'vaga' + vagas)
    adicionarVaga.innerHTML = `<div id="vaga" class="row mb-4 text-center">
    <button class="col-2 themed-grid-col remover">remover</button>
    <div class="col-2 themed-grid-col">${vagas}</div>
    <div class="col-2 themed-grid-col">Tempo</div>
    <div class="col-2 themed-grid-col">preço</div>
    <button class="col-2 themed-grid-col disponivelVaga livre">livre</button>
  </div>`;
  novasVagas.insertBefore(adicionarVaga, referencia);
        vagas++;
        });*/

    });
});


