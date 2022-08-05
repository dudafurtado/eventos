const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('change', (event) => {
        const inputEvent = event.target

        if (inputEvent.dataset.resposta === inputEvent.value) {
            inputEvent.classList.add('acertou')
        } else {
            inputEvent.classList.add('errou')
        }
    })
})