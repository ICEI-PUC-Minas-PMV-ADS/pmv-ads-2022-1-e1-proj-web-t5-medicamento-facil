
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


nome.addEventListener('keyup', ()=>{
    if(nome.value.length < 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML =  'Nome *Insira no mínimo 2 caracteres'
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        validNome = true
    }
})

sobrenome.addEventListener('keyup', ()=>{
    if(sobrenome.value.length < 2){
        labelSobrenome.setAttribute('style', 'color: red')
        labelSobrenome.innerHTML =  'Sobrenome *Insira no mínimo 2 caracteres'
        validSobrenome = false
    } else {
        labelSobrenome.setAttribute('style', 'color: green')
        labelSobrenome.innerHTML = 'Sobrenome'
        validSobrenome = true
    }
})

celular.addEventListener('keyup', ()=>{
    if(celular.value.length <= 8){
        labelCelular.setAttribute('style', 'color: red')
        labelCelular.innerHTML =  'Celular *Insira 9 dígitos'
        validCelular = false
    } else {
        labelCelular.setAttribute('style', 'color: green')
        labelCelular.innerHTML = 'Celular'
        validCelular = true
    }
})

email.addEventListener('keyup', ()=>{
    if(email.value.length <= 8){
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML =  'E-mail *Insira um e-mail válido'
        validEmail = false
    } else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'E-mail'
        validEmail = true
    }
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML =  'Senha *Insira no mínimo 6 caracteres'
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        validSenha = true
    }
})

confirmarSenha.addEventListener('keyup', ()=>{
    if(senha.value != confirmarSenha.value){
        labelConfirmarSenha.setAttribute('style', 'color: red')
        labelConfirmarSenha.innerHTML =  'Senha *As senhas devem ser iguais'
        validConfirmarSenha = false
    } else {
        labelConfirmarSenha.setAttribute('style', 'color: green')
        labelConfirmarSenha.innerHTML = 'Confirmar senha'
        validConfirmarSenha = true
    }
})



function cadastrarNovo() {


   if (validNome == true  && validSobrenome == true && validCelular == true && validEmail == true  && validSenha == true && validConfirmarSenha == true) { 
    
    let userLogado = JSON.parse(localStorage.getItem("userLogado"));
    let listaUser = JSON.parse(localStorage.getItem("listaUser"));
    let cad = userLogado.nome;
    let index;


     for  (var i = 0; i < listaUser.length; i++){
        if (cad === listaUser[i].nomeCad){
        index = listaUser[i].id; 
        listaUser[i].nomeCad = nome.value,
        listaUser[i].sobrenomeCad = sobrenome.value,
        listaUser[i].celularCad = celular.value,
        listaUser[i].emailCad = email.value,
        listaUser[i].senhaCad = senha.value,
        listaUser[i].medCad = medicamento.value
        
        listaUser.push;
        }
     } 

    // Atualiza os dados no Local Storage
    localStorage.setItem('userLogado', JSON.stringify(userLogado));
    localStorage.setItem('listaUser', JSON.stringify(listaUser));
    alert ('Alteração de cadastro realizada com sucesso!')
        window.location.href = 'login.html'

    } else {
        alert ('Favor preencher os campos!')
    }
}

