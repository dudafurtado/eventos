const inputs = document.querySelectorAll('input')
const grupos = document.querySelectorAll('li')

inputs.forEach(input => {
    input.addEventListener('keydown', function (event) {
        if (!teclouEnter(event.code)) {
            return
        }

        filtrarGrupo(grupos, event.target.value)
    })

    input.addEventListener('keydown', function (event) {
        if (!teclouEnter(event.code)) {
            return
        }

        limparInput(event.target)
    })
})

function teclouEnter(tecla) {
    return tecla === 'Enter'
}

function filtrarGrupo(listaDeGrupos, filtragem) {
    listaDeGrupos.forEach(cadaGrupo => {
        cadaGrupo.classList.remove('escondido')

        if (filtragem && cadaGrupo.textContent !== filtragem) {
            cadaGrupo.classList.add('escondido')
        }
    })
}

function limparInput(input) {
    input.value = ''
}


// target é a propriedade do objeto. é também a tag exata de qual o elemento que está sendo alvo da ação do momento

// event.target.value é a informação presente no elemento especifico que sofreu um event

// addEventListener é um metodo ao qual é passado 2 parametros, primeiro qual evento ("keydown', 'click') e segundo a função que ele vai executar (sem o parenteses, pq caso fosse utilizado estaria chamando a função no exato momento que a maquina lesse o código)
// removeEventListener 