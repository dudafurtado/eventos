const botaoDeInscricao = document.querySelector('.inscricao')
const botoesModal = document.querySelectorAll('.botoes button')
const confirmacao = document.querySelector('.sim')
const modal = document.querySelector('.modal')

botaoDeInscricao.addEventListener('click', inscrever)

function inscrever(event) {
    const botaoClicado = event.target

    botaoClicado.textContent = 'INSCRITO'
    botaoClicado.classList.add('inscrito')

    botaoClicado.removeEventListener('click', inscrever)
    botaoClicado.addEventListener('click', function () {
        modal.classList.remove('escondido')
    })
}

confirmacao.addEventListener('click', function () {
    botaoDeInscricao.textContent = 'INSCREVER-SE'
    botaoDeInscricao.classList.remove('inscrito')

    botaoDeInscricao.addEventListener('click', inscrever)
})

botoesModal.forEach(botao => {
    botao.addEventListener('click', function () {
        modal.classList.add('escondido')
    })
})
