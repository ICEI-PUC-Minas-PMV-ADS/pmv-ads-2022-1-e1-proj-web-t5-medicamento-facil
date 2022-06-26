
function preencherDados() {
    let userLogado = JSON.parse(localStorage.getItem("userLogado"));

    if (userLogado.nome) {
        document.querySelector('#nome').value = userLogado.nome;
    }

    if (userLogado.sobrenome) {
        document.querySelector('#sobrenome').value = userLogado.sobrenome;
    }

    if (userLogado.celular) {
        document.querySelector('#celular').value = userLogado.celular;
    }

    if (userLogado.celular) {
        document.querySelector('#celular').value = userLogado.celular;
    }

    if (userLogado.email) {
        document.querySelector('#email').value = userLogado.email;
    }

    if (userLogado.senha) {
        document.querySelector('#senha').value = userLogado.senha;
        document.querySelector('#confirmarSenha').value = userLogado.senha;
    }

    if (userLogado.medicamento) {
        document.querySelector('#medicamento').value = userLogado.medicamento;
    }

}

preencherDados();

var nome = document.querySelector('#nome')
var labelNome = document.querySelector('#labelNome')
var validNome = false

var sobrenome = document.querySelector('#sobrenome')
var labelSobrenome = document.querySelector('#labelSobrenome')
var validSobrenome = false

var celular = document.querySelector('#celular')
var labelCelular = document.querySelector('#labelCelular')
var validCelular = false

var email = document.querySelector('#email')
var labelEmail = document.querySelector('#labelEmail')
var validEmail = false

var senha = document.querySelector('#senha')
var labelSenha = document.querySelector('#labelSenha')
var validSenha = false

var confirmarSenha = document.querySelector('#confirmarSenha')
var labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')
var validConfirmarSenha = false

var medicamento = document.querySelector('#medicamento')
var labelMedicamento = document.querySelector('#labelMedicamento')
var validMedicamento = false


const validarNome = () => {
    if (nome.value.length < 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no mínimo 2 caracteres'
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        validNome = true
    }
};

nome.addEventListener('keyup', validarNome)

const validarSobrenome = () => {
    if (sobrenome.value.length < 2) {
        labelSobrenome.setAttribute('style', 'color: red')
        labelSobrenome.innerHTML = 'Sobrenome *Insira no mínimo 2 caracteres'
        validSobrenome = false
    } else {
        labelSobrenome.setAttribute('style', 'color: green')
        labelSobrenome.innerHTML = 'Sobrenome'
        validSobrenome = true
    }
};

sobrenome.addEventListener('keyup', validarSobrenome)

const validarCelular = () => {
    if (celular.value.length <= 8) {
        labelCelular.setAttribute('style', 'color: red')
        labelCelular.innerHTML = 'Celular *Insira 9 dígitos'
        validCelular = false
    } else {
        labelCelular.setAttribute('style', 'color: green')
        labelCelular.innerHTML = 'Celular'
        validCelular = true
    }
};
celular.addEventListener('keyup', validarCelular)

const validarEmail = () => {
    if (email.value.length <= 8) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'E-mail *Insira um e-mail válido'
        validEmail = false
    } else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'E-mail'
        validEmail = true
    }
};

email.addEventListener('keyup', validarEmail)

const validarSenha = () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        validSenha = true
    }
}

senha.addEventListener('keyup', validarSenha);

const validarConfirmSenha = () => {
    if (senha.value != confirmarSenha.value) {
        labelConfirmarSenha.setAttribute('style', 'color: red')
        labelConfirmarSenha.innerHTML = 'Senha *As senhas devem ser iguais'
        validConfirmarSenha = false
    } else {
        labelConfirmarSenha.setAttribute('style', 'color: green')
        labelConfirmarSenha.innerHTML = 'Confirmar senha'
        validConfirmarSenha = true
    }
};
confirmarSenha.addEventListener('keyup', validarConfirmSenha);

function editar() {

    validarNome();
    validarSobrenome();
    validarEmail();
    validarCelular();
    validarSenha();
    validarConfirmSenha();


    const podeEditar = validNome == true && validSobrenome == true && validCelular == true && validEmail == true && validSenha == true && validConfirmarSenha == true;
    if (podeEditar) {

        let userLogado = JSON.parse(localStorage.getItem("userLogado"));
        let listaUser = JSON.parse(localStorage.getItem("listaUser"));
        let nomeAntigo = userLogado.nome;
        
        userLogado.nome = document.querySelector('#nome').value;
        userLogado.sobrenome = document.querySelector('#sobrenome').value;
        userLogado.celular = document.querySelector('#celular').value;
        userLogado.celular = document.querySelector('#celular').value;
        userLogado.email = document.querySelector('#email').value;

        userLogado.senha = document.querySelector('#senha').value;
        userLogado.senha = document.querySelector('#confirmarSenha').value;

        userLogado.medicamento = document.querySelector('#medicamento').value;

        for (var i = 0; i < listaUser.length; i++) {
            if (nomeAntigo === listaUser[i].nomeCad) {
                listaUser[i].nomeCad = userLogado.nome;
                listaUser[i].sobrenomeCad = userLogado.sobrenome;
                listaUser[i].celularCad = userLogado.celular;
                listaUser[i].emailCad = userLogado.email;
                listaUser[i].senhaCad = userLogado.senha;
                listaUser[i].medCad = userLogado.medicamento;
            }
        }

        // Atualiza os dados no Local Storage
        localStorage.setItem('userLogado', JSON.stringify(userLogado));
        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        // Atualiza os dados no Local Storage
        localStorage.setItem('userLogado', JSON.stringify(userLogado));
        alert('Alteração de cadastro realizada com sucesso!')
        window.location.href = 'usuario-cadastrado.html'

    } else {
        alert('Favor preencher os campos!')
    }
}
