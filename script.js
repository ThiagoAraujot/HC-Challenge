/* NAVBAR FIXED */

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var navbarHeight = navbar.offsetHeight;

    if (window.scrollY > navbarHeight) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
});

/* SCRIPT KEYFRAMES */

function aplicarAnimacaoNaSecao(secaoId, animacaoClass) {
    const secaoParaAnimar = document.getElementById(secaoId);
    if (!secaoParaAnimar) return; 

    const secaoParaAnimarPosicao = secaoParaAnimar.getBoundingClientRect();

    if (secaoParaAnimarPosicao.top < window.innerHeight && secaoParaAnimarPosicao.bottom >= 0) {
        secaoParaAnimar.classList.add(animacaoClass);
    } else {
        secaoParaAnimar.classList.remove(animacaoClass);
    }
}

window.addEventListener('scroll', function () {
    aplicarAnimacaoNaSecao('public', 'fadeIn');
    aplicarAnimacaoNaSecao('problema', 'fadeIn');
    aplicarAnimacaoNaSecao('impactos', 'fadeIn');
    aplicarAnimacaoNaSecao('impactos', 'fadeIn');
    aplicarAnimacaoNaSecao('gamification', 'fadeIn');
    aplicarAnimacaoNaSecao('objetivo', 'fadeIn');
});

/* SCRIPT FORMS */

const input_nome = document.getElementById("input-nome");
const input_email = document.getElementById("input-email")
const input_senha = document.getElementById("input-senha");

const label_nome = document.getElementById("label-nome");
const label_email = document.getElementById("label-email");
const label_senha = document.getElementById("label-senha");

const botao = document.getElementById("botao")

const cadastrado = document.getElementById("usuario-cadastrado")

const usuarios = []

input_nome.addEventListener("keyup", trocaNome);
input_senha.addEventListener("keyup", trocaSenha);
input_email.addEventListener("keyup", trocaEmail)
botao.addEventListener("click", cadastrarUsuario)


function cadastrarUsuario() {
    cadastrado.innerHTML = `
    ${input_nome.value},  você foi cadastrado (a) com sucesso! <br>
    Em breve receberá mais novidades sobre nosso projeto!
    `

    input_nome.value = "";
    trocaNome()
    input_email.value = "";
    trocaSobrenome()
    input_senha.value = "";
    trocaSenha()

}


function trocaNome() {
    if (input_nome.value.length == 0) {
        label_nome.setAttribute("class", "form-label")
        label_nome.innerHTML = "Nome"
    } else if (input_nome.value.length < 6) {
        label_nome.setAttribute("class", "change-color")
        label_nome.innerHTML = `
        <label>Nome Inválido <span class="material-symbols-outlined">
        warning
        </span> 
        </label> 
        `
    } else {
        label_nome.innerHTML = `<label>Nome Válido <span class="material-symbols-outlined">
        check
        </span></label>` 
        label_nome.setAttribute("class", "change-color-2")
    }
}

function trocaEmail() {
    if (input_email.value.length == 0) {
        label_email.setAttribute("class", "form-label")
        label_email.innerHTML = "E-mail"
    } else if (input_email.value.length < 5) {
        label_email.setAttribute("class", "change-color")
        label_email.innerHTML = `
        <label>E-mail Inválido <span class="material-symbols-outlined">
        warning
        </span> 
        </label> 
        `
    } else {
        label_email.innerHTML = `<label>E-mail Válido <span class="material-symbols-outlined">
        check
        </span></label>` 
        label_email.setAttribute("class", "change-color-2")
    }
}

function trocaSenha() {
    if (input_senha.value.length == 0) {
        label_senha.setAttribute("class", "form-label")
        label_senha.innerHTML = "Senha"
    }
    else if (input_senha.value.length < 6) {
        label_senha.setAttribute("class", "change-color")
        label_senha.innerHTML =  `<label>Senha inválida<span class="material-symbols-outlined">
        warning
        </span> 
        </label> 
        `
    } else {
        label_senha.innerHTML = `<label>Senha válida<span class="material-symbols-outlined">
        check
        </span></label>` 
        label_senha.setAttribute("class", "change-color-2")
    }
}