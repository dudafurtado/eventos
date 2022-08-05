const input = document.querySelector('input')
// selecionou o input e transformou no objeto 'input', ao qual, suas caracteristicas estão armazenadas 
const membros = document.querySelectorAll('li')
// o All transforma essa váriavel 'membros' em um array de objetos de 'li'

function procurarMembro(event) {
    // a função procurarMembro passa o parametro event (objeto com os acontecimentos), ou seja, é prossível acessar e fazer condições com essas propriedades dentro da função
    if (event.code === 'Enter') {
        // event.code guardou a tecla que foi clicada 
        // a condição começa perguntando se a tecla foi 'Enter'
        membros.forEach(membro => {
            // .forEach é um for de c utilizado para arrays 
            // como a variavel 'membros' foi usada com querySelectorAll então ela é uma array
            // membro virou o index do array membros e um parametro passado para essa arrow function / callback
            membro.classList.remove('escondido')
            // classList, nesse caso, é uma propriedade do index 'membro' do array 'membros' 

            if (input.value && membro.textContent.toLowerCase() !== input.value.toLowerCase()) {
                // a pergunta da primeira condição é: tem alguma coisa dentro do input? 
                // a pergunta da segunda condição é: a propriedade .textcontent (palavra de dentro) do index 'membro' é diferente do que está dentro do input? 
                // e se espera a resposta sim dentro dessa primeira chave
                membro.classList.add('escondido')
            }
        })

        input.value = ''
        // após o clique do botão 'Enter' e as analises de condições o input irá ficar vazio
    }
}

// onkeyup é o momento especfico em que a tecla é solta depois de ser pressionada (se a pessoa manter o botão pressionado por um tempo, só será marcado no momento que solta)
// onkeydown é o momento em que a tecla foi pressionada
// onkeypress é o momento completo desde pressionar até soltar, por exemplo, o clique do mouse

// quando utiliza o input.value, vc está conferindo todo e qualquer valor adicionado a ele então cada letra será contada:
// b
// ba
// ban
// bana
// banan
// banana

// event é um objeto com todas as características e acontecimentos da tag, ao qual, vai ser passada dentro do parametro da função o nome "event". utilizado, normalmente, pelo onkeydown, onkeyup e onkeypress
// a partir desse event é preciso especificar o agente do event / a propriedade do event para seguir
// event.code tem a informação de literalmente qual tecla foi clicada ('enter', 'b', 'k')
// event.key tem a informação de qual foi a tecla gerada pelo clique de teclas ('@' = shift + 2)