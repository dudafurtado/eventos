const input = document.querySelector('input');
const eletronicos = document.querySelectorAll('li');

function produtosDaApple(event) {
    if (event.code === 'Enter') {
        eletronicos.forEach(apple => {
            apple.classList.remove('escondido')

            if (input.value && apple.textContent.toLowerCase() !== input.value.toLowerCase()) {
                apple.classList.add('escondido')
            }
        })
        input.value = ''
    }
}