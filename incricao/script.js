const botaoInscrever = document.querySelector('.inscricao');
const modal = document.querySelector('.modal');
const confirmar = document.querySelector('.confirmar');
const botoesOpcoes = document.querySelectorAll('.opcoes');

botaoInscrever.addEventListener('click', inscrever);

function inscrever(event) {
    const botaoClicado = event.target;

    botaoClicado.textContent = 'INSCRITO';
    botaoClicado.classList.add('inscrito');

    botaoClicado.removeEventListener('click', inscrever);

    botaoClicado.addEventListener('click', function () {
        modal.classList.remove('escondido');
    });
}

confirmar.addEventListener('click', function () {
    botaoInscrever.textContent = 'INSCREVER-SE';
    botaoInscrever.classList.remove('inscrito');

    botaoInscrever.addEventListener('click', inscrever);
});

botoesOpcoes.forEach(botao => {
    botao.addEventListener('click', function () {
        modal.classList.add('escondido');
    });
});