const inputsNoFormulario = document.querySelectorAll("input, .mensagem");
const btn = document.querySelector(".btn-enviar");

function validarInput(item) {
    const mensagemErro = item.nextElementSibling;

    if(item.value === "") {
        item.classList.add("nao-preenchido");
        item.classList.remove("preenchido");
        mensagemErro.classList.add("nao-preenchido");
    } else {
        item.classList.add("preenchido");
        item.classList.remove("nao-preenchido");
        mensagemErro.classList.remove("nao-preenchido");
    }
}

function validacao() {
    let valido = true;
    inputsNoFormulario.forEach((element) => {
        validarInput(element);
        if(element.classList.contains("nao-preenchido")) {
            valido = false;
        }
    });
    return valido;
}

btn.addEventListener("click", () => {
    validacao();
});