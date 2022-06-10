


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let sobrenome = document.querySelector('#sobrenome')
let labelSobrenome = document.querySelector('#labelSobrenome')
let validSobrenome = false

let celular = document.querySelector('#celular')
let labelCelular = document.querySelector('#labelCelular')
let validCelular = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmarSenha = document.querySelector('#confirmarSenha')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')
let validConfirmarSenha = false

let medicamento = document.querySelector('#medicamento')
let labelMedicamento = document.querySelector('#labelMedicamento')
let validMedicamento = false


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
    console.log (cad);
     let index;
     for  (var i = 0; i < listaUser.length; i++){
        if (cad === listaUser.nomeCad);
        console.log (listaUser.nomeCad);
        index = listaUser.id; 
     }

         

     // Localiza o indice do objeto a ser alterado no array a partir do seu nome
    // let index = listaUser.indexof('cad'); 

    console.log (index);
        
    // Altera os dados do objeto no array
   
    listaUser.data[index].nomeCad = nome,
    listaUser.data[index].sobrenomeCad = sobrenome,
    listaUser.data[index].celularCad = celular,
    listaUser.data[index].emailCad = email,
    listaUser.data[index].senhaCad = senha,
    listaUser.data[index].medCad = medicamento
         
    listaUser.push;
    
    // Atualiza os dados no Local Storage
    localStorage.setItem('userLogado', JSON.stringify(userLogado));
    localStorage.setItem('listaUser', JSON.stringify(listaUser));
    alert ('Alteração de cadastro realizada com sucesso!')
        window.location.href = 'login.html'

    } else {
        alert ('Favor preencher os campos!')
    }
}

