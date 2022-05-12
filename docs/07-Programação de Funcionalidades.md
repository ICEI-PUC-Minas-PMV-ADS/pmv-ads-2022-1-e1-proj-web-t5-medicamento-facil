# Programação de Funcionalidades

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema.

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
            var login = document.getElementById('login').value;
            var senha = document.getElementById('senha').value;
            if (login == "carolina@hotmail.com" && senha == "1234"){
                location.href = "area-usuario.html";
            } else {
                alert ('Usuário ou senha incorretos. Tente novamente!');
            }
        }


### Instruções de acesso

A Tela de Login é a exibida após o usuário clicar em "Faça Login".



## Tela Inicial (RF-01)

A Tela Inicial do sistema apresenta apresenta um buscador centralizado, no qual o usuário deverá digitar seu endereço a fim de direcionar a buscar de medicamentos à Unidade Básica de Saúde mais próxima. Esta tela ainda permite que o usuário faça cadastro ou login, bem como acesso à Área do Farmacêutico. Também dispõe dos icones "sobre" e "como funciona o medicamento fácil".

![Inicial](img/principal.png)

### Requisitos atendidos 

RF-01 -  O site deve apresentar na página principal um buscador no qual o usuário irá digitar seu endereço.

### Artefatos da funcionalidade 

- index.html
- template.css
- logo.png

### Estrutura de Dados 



### Instruções de acesso 

Abra um navegador de Internet e informe a seguinte URL: XXXXX

A Tela Inicial é a primeira funcionalidade exibida pelo aplicativo. 

## Tela de Busca de Medicamentos (RF-02)

A Tela de Busca de Medicamentos do sistema apresenta apresenta um buscador centralizado, no qual o usuário deverá digitar os medicamentos de interesse. Esta tela ainda permite que o usuário notifique a falta de um medicamento. Também dispõe dos icones "sobre" e "como funciona o medicamento fácil".

![Busca Medicamento](img/busca_medicamento.png)

### Requisitos atendidos 

RF-02 -  O site deve apresentar uma página com um buscador no qual o usuário irá digitar os medicamentos buscados.

### Artefatos da funcionalidade 

- buscar-medicamento.html
- template.css
- logo.png

### Estrutura de Dados 



### Instruções de acesso 

Abra um navegador de Internet e informe a seguinte URL: XXXXX

A Tela de Busca de Medicamentos é a exibida após a confirmação de endereço. 

## Tela Cadastro (RF-05)

A Tela de Cadastro apresenta um formulário a ser preenchido pelo usuário. Esta tela ainda permite que o usuário volte à tela inicial. Também dispõe dos icones "sobre" e "como funciona o medicamento fácil".

![Cadastro](img/cadastro.png)

### Requisitos atendidos 

RF-05 -  O site deve ter uma área personalizada, na qual o usuário deverá acessar com login e senha. Nesta área, o usuário irá cadastrar seu e-mail, celular e os medicamentos que utiliza, sendo notificado assim que os medicamentos estiverem disponíveis.

### Artefatos da funcionalidade 

- cadastro.html
- template.css
- logo.png

### Estrutura de Dados 


### Instruções de acesso 

Abra um navegador de Internet e informe a seguinte URL: XXXXX

A Tela de Cadastro é a exibida após o usuário clicar em "Crie sua Conta".




## Tela área do usuário (RF-02 e RF-08)

A Tela de área do usuário do sistema apresenta dois botões centralizados, nos quais o usuário poderá pesquisar medicamento ou notificar a falta de medicamento. Também dispõe dos ícones "sobre" e "como funciona o medicamento fácil".

![Área-do-usuário](img/area-do-usuario.png)

## Requisitos atendidos

RF-02 - O site deve apresentar uma página com um buscador no qual o usuário irá digitar os medicamentos buscados

RF-08 - O site deve permitir que o próprio usuário notifique a falta de um determinado medicamento

### Artefatos da funcionalidade

•	area-do-usuario.html
•	template.css
•	logo.png

### Estrutura de Dados

### Instruções de acesso 

Abra um navegador de Internet e informe a seguinte URL: XXXXX

A Tela de Cadastro é a exibida após o usuário clicar em "Crie sua Conta".


## Tela Notificar falta de medicamento (RF-08)

A Tela Notificar falta medicamento apresenta uma caixa de texto centralizada onde o usuário poderá preencher o nome do medicamento que está em falta e em seguida enviar clicando no botão "Enviar requisição" logo abaixo. 

![Falta medicamento](img/tela-falta-medicamento.jpg)

### Requisitos atendidos 

RF-08 -  O site deve permitir que o próprio usuário notifique a falta de um determinado medicamento.

### Artefatos da funcionalidade 

- notificar-medicamento.html
- template.css
- logo.png

### Estrutura de Dados 


### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: XXXXX

A Tela de Área do usuário é a exibida após o usuário clicar em "Fazer Login" e enviar o formulário com o e-mail e senha.


## Tela Alterar senha (RF-09)

A Tela Alterar senha apresenta dois campos:  "Senha" - onde o usuário preencherá com a nova senha e "Digite novamente sua senha" - onde deverá confirmar a senha escolhida e confirmar clicando no botão "Enviar" logo abaixo.

![Alterar senha](img/tela-alterar-senha.jpg)

### Requisitos atendidos 

RF-09 -  O site deve permitir que o usuário recupere sua senha em caso de esquecimento.

### Artefatos da funcionalidade 

- alterar-senha.html
- template.css
- logo.png

### Estrutura de Dados 



### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: XXXXX

A Tela da área do usuário é a exibida após o usuário logar na conta cadastrada em "Faça Login".

## Tela Login do Farmacêutico (RF-04)

A Tela de Login do Farmacêutico apresenta os campos de login e senha, nos quais o farmacêutico deverá inserir seus dados. Esta tela ainda permite retornar à tela inicial. Também dispõe dos icones "sobre" e "como funciona o medicamento fácil".

![login-farmaceutico](img/login-farmaceutico.png)

### Requisitos atendidos 

RF-04 -  O site deve ter uma área de login do farmacêutico, na qual ele irá atualizar o estoque de medicamentos disponíveis pela farmácia da UBS.

### Artefatos da funcionalidade 

- login-farmaceutico.html
- template.css
- logo.png

### Estrutura de Dados 

        function logar()
        {
            var login = document.getElementById('login').value;
            var senha = document.getElementById('senha').value;
            if (login == "farmaceutico@ubs.com" && senha == "1234"){
                location.href = "area-do-farmaceutico.html";
            } else {
                alert ('Usuário ou senha incorretos! \nTente novamente.');
            }
        }


### Instruções de acesso 

Abra um navegador de Internet e informe a seguinte URL: XXXXX

A Tela de Login do Farmacêutico é direcionada ao clicar no botão "Área do Farmacêutico" na home page. 

