
/*
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
    });
});
*/

