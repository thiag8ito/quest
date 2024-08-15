const inputsNoFormulario = document.querySelectorAll("input, .mensagem");
const btn = document.querySelector(".btn-enviar");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    inputsNoFormulario.forEach((input) => {
        if (input.value) {
            input.classList.add("preenchido");
            input.nextElementSibling.classList.remove("nao-preenchido");
        } else {
            input.classList.remove("preenchido");
            input.classList.add("nao-preenchido");
            input.nextElementSibling.classList.add("nao-preenchido")
        }
    })
})