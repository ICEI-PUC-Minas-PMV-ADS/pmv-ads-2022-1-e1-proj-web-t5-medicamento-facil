# Programação de Funcionalidades

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema.

Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2022-1-e1-proj-web-t5-medicamento-facil/src/index


## Tela Inicial (RF-01)

A Tela Inicial do sistema apresenta apresenta um buscador centralizado, no qual o usuário deverá digitar seu endereço e a fim de direcionar a buscar de medicamentos à Unidade Básica de Saúde mais próxima. Esta tela ainda permite que o usuário faça cadastro ou login, bem como acesso à Área do Farmacêutico. Também dispõe dos icones "sobre" e "como funciona o medicamento fácil". Para facilidade de acesso foi incorporado a função de autocompletar o endereço enquanto o usuário digita.

![Inicial](img/principalautocomplete.png)

### Requisitos atendidos 

RF-01 -  O site deve apresentar na página principal um buscador no qual o usuário irá digitar seu endereço.

### Artefatos da funcionalidade 

- index.html
- index.js
- template.css
- logo.png

### Estrutura de Dados 

        let endereco_google;
        function initAutocomplete(){
        endereco_google = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'),
            {
                types: ['address'],
                componentRestrictions: {'country': ['BR']},
                fields: ['address_components']
            })   ;
        }


### Instruções de acesso 

A Tela Inicial é a primeira funcionalidade exibida pelo aplicativo. 

## Tela de Busca de Medicamentos (RF-03)

A Tela de Busca de Medicamentos do sistema apresenta apresenta um buscador centralizado, no qual o usuário deverá digitar os medicamentos de interesse. Esta tela ainda permite que o usuário notifique a falta de um medicamento. Também dispõe dos icones "sobre" e "como funciona o medicamento fácil".

![Busca Medicamento](img/busca_medicamento.png)

### Requisitos atendidos 

RF-03 -  O site deve apresentar uma página com um buscador no qual o usuário irá digitar os medicamentos buscados.

### Artefatos da funcionalidade 

- buscar-medicamento.html
- template.css
- logo.png

### Artefatos da funcionalidade 

- buscar-medicamento.html
- MedicamentoControlador.js
- logo.png

### Estrutura de Dados 
Acesse a pasta scr/app/entidades e veja Medicamento.js, depois vá em src/app/mocks e acesse medicamento.mock.js e medicamento.mock.min.js

```
export const medicamentos = [{
        "principioAtivo": "ACEBROFILINA",
        "laboratorioNome": "GERMED FARMACEUTICA LTDA",
        "nome": "ACEBROFILINA",
        "apresentacao": "10 MG/ML XPE CT FR PLAS AMB X 120 ML + COP",
        "tarja": "TARJA VERMELHA"
    }, {
        "principioAtivo": "ACEBROFILINA",
        "laboratorioNome": "GERMED FARMACEUTICA LTDA",
        "nome": "ACEBROFILINA",
        "apresentacao": "10 MG/ML XPE CT FR VD AMB X 120 ML + COP",
        "tarja": "TARJA VERMELHA"
    }...
```

### Instruções de acesso 

A Tela de Busca de Medicamentos é a exibida após a confirmação de endereço. 

## Tela de Cadastro (RF-06)

A Tela de Cadastro do sistema apresenta campos nos quais o usuário deverá preencher seus dados para realizar o cadastro. Esta tela também apresenta os ícones "sobre" e "como funciona o medicamento fácil". 

![Cadastro](img/cadastro.png)


### Requisitos atendidos

RF-06 - O site deve ter uma área personalizada, na qual o usuário deverá acessar com login e senha. Nesta área, o usuário irá cadastrar seu e-mail, celular e os medicamentos que utiliza, sendo notificado assim que os medicamentos estiverem disponíveis.

### Artefatos da funcionalidade 

- cadastro.html
- cadastro.js
- template.css
- logo.png

### Estrutura de Dados

Acesse a pasta scr/js e veja cadastro.js.

```

function cadastrar(){ 
    if (validNome == true  && validSobrenome == true && validCelular == true && validEmail == true  && validSenha == true && validConfirmarSenha == true) { 
        
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        listaUser.push(
            {
                nomeCad:nome.value,
                sobrenomeCad: sobrenome.value,
                celularCad: celular.value,
                emailCad: email.value,
                senhaCad: senha.value,
            }          
        )
        //salvando a lista de usuário no local storage

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        alert ('Cadastro realizado com sucesso!')
        window.location.href = 'login.html'    

    } else {
        alert ('Favor preencher os campos!')
    }
}
```

### Instruções de acesso

A Tela de Cadastro é a exibida após o usuário clicar em "Crie sua conta".


## Tela de Login (RF-06)

A Tela de Login do sistema apresenta campos nos quais o usuário deverá digitar e-mail e senha cadastrados para acessar a área do usuário. Esta tela também apresenta o botão “esqueceu sua senha?” para o caso em que o usuário necessite recuperar o acesso. Também dispõe dos ícones "sobre" e "como funciona o medicamento fácil". 

![Login](img/login.png)


### Requisitos atendidos

RF-06 - O site deve ter uma área personalizada, na qual o usuário deverá acessar com login e senha. Nesta área, o usuário irá cadastrar seu e-mail, celular e os medicamentos que utiliza, sendo notificado assim que os medicamentos estiverem disponíveis.

### Artefatos da funcionalidade 

- login.html
- login.js
- template.css
- logo.png

### Estrutura de Dados

        function logar ()
{  
    let usuario = document.querySelector('#login');
    let senha = document.querySelector('#senha');

    let listaUser = [];

    let userValid = {
        nome: '',
        sobrenome: '',
        celular: '',
        email: '',
        senha: '',
        medicamento:''

    }


    listaUser = JSON.parse(localStorage.getItem('listaUser'))


    listaUser.forEach((item) =>{

         if(usuario.value === item.emailCad && senha.value === item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                sobrenome: item.sobrenomeCad,
                celular: item.celularCad,
                email: item.emailCad,
                senha: item.senhaCad,
                medicamento: item.medCad
            }
        }

    })

    if (!usuario.value && !senha.value) {
        alert('Preencha todos os campos');
        location.reload(true);
  
    }
    else if(usuario.value === userValid.email && senha.value === userValid.senha){
        localStorage.setItem('userLogado', JSON.stringify(userValid)) 
        window.open ('area-usuario.html')
        
        
    } 
    
     if  (usuario.value != userValid.email || senha.value != userValid.senha){
        alert ('Usuário ou senha incorretos');
        location.reload(true);


### Instruções de acesso

A Tela de Login é a exibida após o usuário clicar em "Faça Login".

## Tela Área do Usuário (RF-06)

A Tela de Área do usuário apresenta o nome do usuário logado e os botões "vizualizar meu perfil" "pesquisar medicamento" e "notificar a falta de medicamento". Também dispõe dos ícones "sobre" e "como funciona o medicamento fácil". 

![Area-do-usuario](img/area-do-usuario.png)


### Requisitos atendidos

RF-06 - O site deve ter uma área personalizada, na qual o usuário deverá acessar com login e senha. Nesta área, o usuário irá cadastrar seu e-mail, celular e os medicamentos que utiliza, sendo notificado assim que os medicamentos estiverem disponíveis.

### Artefatos da funcionalidade 

- area-usuario.html
- area-usuario.js
- template.css
- logo.png

### Estrutura de Dados

       
    let userLogado = JSON.parse(localStorage.getItem("userLogado"));
    let logado = document.querySelector("#logado");

    logado.innerHTML = `Olá, ${userLogado.nome}, o que você deseja?`


### Instruções de acesso

A Tela de Área do Usuário é a exibida após o usuário fazer login.

## Tela Vizualizar Perfil (RF-15)

A Tela de Vizualizar Perfil apresenta os dados do usuário cadastrado. Também dispõe dos ícones "sobre" e "como funciona o medicamento fácil". 

![Usuario Cadastrado](img/cadastro usuario.png)


### Requisitos atendidos

RF-15 - O site deve permitir que o usuário visualize e altere seus dados cadastrados.

### Artefatos da funcionalidade 

- usuario-cadastrado.html
- usuario-cadastrado.js
- template.css
- logo.png

### Estrutura de Dados

       let userLogado = JSON.parse(localStorage.getItem("userLogado"));
    let cadastradoNome = document.querySelector("#cadastradoNome");
    let cadastradoSobrenome = document.querySelector("#cadastradoSobrenome");
    let cadastradoCelular = document.querySelector("#cadastradoCelular");
    let cadastradoEmail = document.querySelector("#cadastradoEmail");
    let cadastradoSenha = document.querySelector("#cadastradoSenha");
    let cadastradoMed = document.querySelector("#cadastradoMed");
    let dadosMedicamento = JSON.parse(localStorage.getItem("dadosMedicamento"));
    let cadastradoNotificacao = document.querySelector("#cadastradoNotificacao");

    cadastradoNome.innerHTML =  userLogado.nome;
    cadastradoSobrenome.innerHTML =  userLogado.sobrenome;
    cadastradoCelular.innerHTML =  userLogado.celular;
    cadastradoEmail.innerHTML =  userLogado.email;
    cadastradoSenha.innerHTML =  userLogado.senha;
    cadastradoMed.innerHTML =  userLogado.medicamento;

    
    for (var i = 0; i < dadosMedicamento.length; i++) {
        cadastradoNotificacao.innerHTML = dadosMedicamento.nome;
      }


### Instruções de acesso

A Tela de Vizualizar Perfil é a exibida após o usuário fazer login e acessar a área do usuário.


## Tela Notificar falta de medicamento (RF-09)

A Tela Notificar falta medicamento apresenta uma caixa de texto centralizada onde o usuário poderá preencher o nome do medicamento que está em falta e em seguida enviar clicando no botão "Enviar requisição" logo abaixo. 

![Falta medicamento](img/tela-falta-medicamento.jpg)

### Requisitos atendidos 

RF-09 -  O site deve permitir que o próprio usuário notifique a falta de um determinado medicamento.

### Artefatos da funcionalidade 

- notificar-medicamento.html
- notificar.js
- template.css
- logo.png

### Estrutura de Dados 

```
function notificar (){
    let nomeMedicamento = document.getElementById("nomeMedicamento");

    let dados = JSON.parse(localStorage.getItem("dadosMedicamento"));

    if(dados == null){
         localStorage.setItem("dadosMedicamento", "[]");
         dados = [];
    }

    let auxRegistro = {
        nome: nomeMedicamento.value
    
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosMedicamento", JSON.stringify(dados));
    alert("Requisição de medicamento enviada!")

    nomeMedicamento.value = "";
}
```
### Instruções de acesso

A Tela de Área do usuário é a exibida após o usuário clicar em "Fazer Login" e enviar o formulário com o e-mail e senha.

## Tela Esqueceu sua senha (RF-10)

A Tela Esqueceu sua senha permite que o usuário preencha seu e-mail para fazer a recuperação de senha. A tela ainda conta com o itens "Sobre" e "Como funciona?", nos quais o usuário, ao passar o mouse acessa os balões com as informações correspondentes.

![Esqueceu Senha](img/telaEsqueceuSenha.png)

### Requisitos atendidos 

RF-10 -  O site deve permitir que o usuário recupere sua senha em caso de esquecimento.

### Artefatos da funcionalidade 

- esqueceu-senha.html
- template.css
- logo.png

### Estrutura de Dados 
                        <ul class="lista-horizontal">
                        <li class="tipSobre" data-tooltip="Nascido para ser uma ferramenta de suporte do usuário do Sistema Único de Saúde - SUS, o Medicamento Fácil fo desenvolvimento por um grupo de aluos do curso de Tecnologia e Desenvolvimento e Análise de Sistemas da PUC Minas, durante o primeiro semestre de 2022.">Sobre</li>
                        <li class="tipComo" data-tooltip="O Medicamento Fácil conta com uma base de dados alimentada diariamente pelos profissionais das Unidades Básicas de Saúde - UBS, assim você consegue buscar o medicamento que você precisa através do nosso buscador de endereços.">Como funciona?</li>
                    </ul>

### Instruções de acesso

A Tela da esquecimento de senha é exibida após o usuário clicar em "esqueceu sua senha?" na tela de login.

## Tela Alterar senha (RF-10)

A Tela Alterar senha apresenta dois campos:  "Senha" - onde o usuário preencherá com a nova senha e "Digite novamente sua senha" - onde deverá confirmar a senha escolhida e confirmar clicando no botão "Enviar" logo abaixo.

![Alterar senha](img/tela-alterar-senha.jpg)

### Requisitos atendidos 

RF-10 -  O site deve permitir que o usuário recupere sua senha em caso de esquecimento.

### Artefatos da funcionalidade 

- alterar-senha.html
- template.css
- alterarSenha.js
- logo.png

### Estrutura de Dados 

```
senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML =  '*Insira no mínimo 6 caracteres*'
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
        labelConfirmarSenha.innerHTML =  '*As senhas devem ser iguais*'
        validConfirmarSenha = false
    } else {
        labelConfirmarSenha.setAttribute('style', 'color: green')
        labelConfirmarSenha.innerHTML = 'Confirmar senha'
        validConfirmarSenha = true
    }
})
```
### Instruções de acesso

A Tela da alterar a senha é a exibida após o usuário receber o codigo de recuperação.

## Tela Novo Cadastro (RF-15)

A Tela de novo cadastro apresenta os campos para preenchimento de todo o cadastro do usuário.

![Novo Cadastro](img/novo cadastro.png)

### Requisitos atendidos 

RF-15 -  O site deve permitir que o usuário visualize e altere seus dados cadastrados.

### Artefatos da funcionalidade 

- novo-cadastro.html
- template.css
- novo-cadastro.js
- logo.png

### Estrutura de Dados 

```
senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML =  '*Insira no mínimo 6 caracteres*'
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
        labelConfirmarSenha.innerHTML =  '*As senhas devem ser iguais*'
        validConfirmarSenha = false
    } else {
        labelConfirmarSenha.setAttribute('style', 'color: green')
        labelConfirmarSenha.innerHTML = 'Confirmar senha'
        validConfirmarSenha = true
    }
})
```
### Instruções de acesso

A Tela de Novo Cadastro é a exibida após o usuário acessar a área do usuário e clicar em "alterar cadastro".


## Tela Login do Farmacêutico (RF-05)

A Tela de Login do Farmacêutico apresenta os campos de login e senha, nos quais o farmacêutico deverá inserir seus dados. Esta tela ainda permite retornar à tela inicial. Também dispõe dos icones "sobre" e "como funciona o medicamento fácil".

![login-farmaceutico](img/login-farmaceutico.png)

### Requisitos atendidos 

RF-05 -  O site deve ter uma área de login do farmacêutico, na qual ele irá atualizar o estoque de medicamentos disponíveis pela farmácia da UBS.

### Artefatos da funcionalidade 

- login-farmaceutico.html
- template.css
- logo.png

### Estrutura de Dados 

        function logar()
            {
                var login = document.getElementById('login').value;
                var senha = document.getElementById('senha').value;
                var validado=false;
                if (login == "farmaceuticobh@ubs.com" && senha == "1234"){
                    location.href = "area-farmaceutico.html?login="+login+"&nome=Lucas";
                    validado=true;
                }
                if (login == "farmaceuticorj@ubs.com" && senha == "1234"){
                    location.href = "area-farmaceutico.html?login="+login+"&nome=Tadeu";
                    validado=true;
                }
                if (login == "farmaceuticosp@ubs.com" && senha == "1234"){
                    location.href = "area-farmaceutico.html?login="+login+"&nome=Paulo";
                    validado=true;
                }
                if(validado==false) {
                    alert ('Usuário ou senha incorretos! \nTente novamente.');
                }
            }



### Instruções de acesso 

A Tela de Login do Farmacêutico é direcionada ao clicar no botão "Área do Farmacêutico" na home page. 


## Tela Área do Farmacêutico

A Tela área do farmacêutico possui os campos nome do medicamento, dosagem e a disponibilidade do medicamento, o cadastro dessas informações será realizado pelo farmacêutico, ele poderá cadastrar, excluir, alterar, mostrar e ocultar as informações dos medicamentos cadastrados. Também dispõe dos ícones "sobre" e "como funciona o medicamento fácil".

![area-farmaceutico](img/area-farmaceutico.png)

### Requisitos atendidos

RF-05 - O site deve ter uma área de login do farmacêutico, na qual ele irá atualizar o estoque de medicamentos disponíveis pela farmácia da UBS.
Artefatos da funcionalidade

### Artefatos da funcionalidade

- areafarmaceutico.html
- template.css
- logo.png
- medicamentos.js

### Estrutura de Dados

        function init() {
            exibeMedicamentos();

            // Adiciona funções para tratar os eventos 
            $("#btnInsert").click(function () {
                // Verfica se o formulário está preenchido corretamente
                if (!$('#form-medicamento')[0].checkValidity()) {
			
                    displayMessage("Preencha o formulário corretamente.");
                    return;
                }

                // Obtem os valores dos campos do formulário
                let campoNomeMedicamento = $("#inputNomeMedicamento").val();
                let campoDosagem = $("#inputDosagem").val();
                let campoDisponibilidade = $("#inputDisponibilidade").val();
                
                let medicamento= { nomeMedicamento: campoNomeMedicamento, 
                    dosagem: campoDosagem, 
                    disponibilidade: campoDisponibilidade };
				
                insertMedicamento(medicamento);
                alert("Medicamento armazenado com sucesso!");

                // Reexibe os medicamentos
                exibeMedicamentos();

                // Limpa o formulario
                $("#form-medicamento")[0].reset();
            });


            $("#btnView").click(function () {
                document.location.reload(true);
            });

            $("#btnOcultar").click(function () {
            $("#table-medicamentos").html("").hide();
        });
              



        $("#btnMostrar").click(function () {
            $("#table-medicamentos").html("").show();
            exibeMedicamentos();
        });



            // Oculta a mensagem de aviso após alguns segundos
            $('#msg').bind("DOMSubtreeModified", function () {
                window.setTimeout(function () {
                    $(".alert").fadeTo(500, 0).slideUp(500, function () {
                        $(this).remove();
                    });
                }, 5000);
            });

        

          // Intercepta o click do botão Alterar
          $("#btnUpdate").click(function () {
              
                // Obtem os valores dos campos do formulário
                let campoId = $("#inputId").val();
				
                if (campoId == "") {
                    alert("Selecione um medicamento para ser alterado.");
                    return;
                }
                // Obtem os valores dos campos do formulário
                let campoNomeMedicamento = $("#inputNomeMedicamento").val();
                let campoDosagem = $("#inputDosagem").val();

                /*
                if(campoDosagem.val=="50MG"){
                    var dosradio = document.getElementsByName('dosagem1');
              
                    dosradio.checked;
                }
                if(campoDosagem.val=="100MG"){
                    var dosradio = document.getElementsByName('dosagem2');
                    dosradio.checked;
                }
                if(campoDosagem.val=="250MG"){
                    var dosradio = document.getElementsByName('dosagem3');
                    dosradio.checked;
                }
                if(campoDosagem.val=="500MG"){
                    var dosradio = document.getElementsByName('dosagem4');
                    dosradio.checked;
                }
                */
                let campoDisponibilidade = $("#inputDisponibilidade").val();

                var checkbox = document.getElementById('inputDisponibilidade');
                if (checkbox.checked==true)
                    campoDisponibilidade="SIM";
                else
                    campoDisponibilidade="NÃO";
                
                let medicamento= { nomeMedicamento: campoNomeMedicamento, 
                    dosagem: campoDosagem, 
                    disponibilidade: campoDisponibilidade };

                updateMedicamento(parseInt(campoId), medicamento);

                // Reexibe os medicamentos
                exibeMedicamentos();

                // Limpa o formulario
                $("#form-medicamento")[0].reset();
            });

             // Intercepta o click do botão Listar Medicamentos
             $("#btnClear").click(function () {
                $("#form-medicamento")[0].reset();
            });
        
 // Intercepta o click do botão Excluir
 $("#btnDelete").click(function () {
                let campoId = $("#inputId").val();
                if (campoId == "") {
                    alert("Selecione um medicamento a ser excluído.");
                    return;
                }
                deleteMedicamento(parseInt(campoId));

                // Reexibe os contatos
                exibeMedicamentos();

                // Limpa o formulario
                $("#form-medicamento")[0].reset();
            });


 // Preenche o formulário quando o usuario clicar em uma linha da tabela 
 $("#grid-medicamentos").on("click", "tr", function (e) {
                let linhaMedicamento = this;
                colunas = linhaContato.querySelectorAll("td");

                $("#inputId").val(colunas[0].innerText);
                $("#inputNomeMedicamento").val(colunas[1].innerText);
                $("#inputDosagem").val(colunas[2].innerText);
                $("#inputDisponibilidade").val(colunas[3].innerText);

                if(colunas[2].innerText=="100")
                var dosradio = document.getElementsById('inputDosagem');
                //$("#inputDosagem").

                var checkbox = document.getElementById('inputDisponibilidade');
                if(colunas[3].innerText=="SIM")
                    checkbox.checked = true;
                else
                    checkbox.checked = false; 
            
            });
}

        function exibeMedicamentos() {
            // Remove todas as linhas do corpo da tabela
            $("#table-medicamentos").html("");

            // Popula a tabela com os registros do banco de dados
            for (i = 0; i < db.data.length; i++) {
                let medicamentos = db.data[i];    
                $("#table-medicamentos").append(`<tr>
                                                <td>${medicamentos.id}</td>
                                                <td>${medicamentos.nomeMedicamento.toUpperCase()}</td>
                                                <td>${medicamentos.dosagem.toUpperCase()}</td>
                                                <td>${medicamentos.disponibilidade.toUpperCase()}</td>
                                            </tr>`);
                    
            }
        }

### Instruções de acesso

A Tela de Área do Farmacêutico é exibida após o farmacêutico efetuar o login na pagina "login do farmacêutico", que é exibida ao clicar na "Área do Farmacêutico" na home page.
