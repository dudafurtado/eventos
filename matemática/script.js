const inputs = document.querySelectorAll('input')
// quando é usado o querySelector o computador entende que é preciso selecionar todos as tags input, ou seja, todas as caracteristicas dispostas a ele no html e css. sendo assim, um objeto com formas de uso de objetos
// tipo : const pessoa = {
// nome: duda, idade: 18
// [{obj}, {obj}]

inputs.forEach(input => {
    //o ponto tem finalidade de indicar que estamos acessando uma propriedade desse objeto que no caso é o da variavel inputs criado anteriormente
    // .forEach é uma função / metodo em que funciona como um loop fazendo algo indicado dentro do parentese, como por exemplo, uma função, em cada um dos elementos que existem no objeto inputs
    // o input nessa situação é um parametro que se assemelha ao valor do index atual (i ou d) utilizado no for
    // quando é utilizado o simbolo => existe indicação de uma função 
    // funções callback são funções criadas a partir de um parametro de outra função
    input.addEventListener('change', function (event) {
        // input é o valor do index atual do array inputs 
        // .addEventListener é uma função / metodo utilizado para adicionar valores no elemento html 
        // 'change' está relacionado diretamente com qualquer mudança feita no objeto destacado
        // foi criado uma função anonima e passado como parametro um objeto evento que guarda o valor dentro do input (digitado)
        const inputModificado = event.target
        // target é um objeto do evento, ou seja, ele tem a informação de quem foi especificamente o alvo da mudança e cria a partir disso um id de identificação anônimo
        if (inputModificado.id === 'pergunta1') {
            if (inputModificado.value === '4') {
                inputModificado.classList.add('acertou')
            }
        } else if (inputModificado.id === 'pergunta2') {
            if (inputModificado.value === '4') {
                inputModificado.classList.add('acertou')
            }
        } else if (inputModificado.id === 'pergunta3') {
            if (inputModificado.value === '9') {
                inputModificado.classList.add('acertou')
            }
        } else {
            if (inputModificado.value === '2')
                inputModificado.classList.add('acertou')
        }

        // .id(caracteristica de identificação que foi colocado através do html), .value (qual o valor existente dentro do input) e .classList.add (para adicionar uma classe na tag especificada)
    })
})

// inline = onchange e addEventListener = 'change' é quando a pessoa tira o foco daquela ação que estava sendo feita. não é durante a escrita no input, mas sim quando clica em outra coisa

// existe uma propriedade .dataset onde ficam todos os data attributes
// data attributes são criados com a palavra data - o nome desse atributo que iremos criar = 'valor desse atributo'