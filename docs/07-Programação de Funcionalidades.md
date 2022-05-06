# Programação de Funcionalidades

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema.

## Tela Inicial (RF-01)

A Tela Inicial do sistema apresenta apresenta um buscador centralizado, no qual o usuário deverá digitar seu endereço a fim de direcionar a buscar de medicamentos à Unidade Básica de Saúde mais próxima. Esta tela ainda permite que o usuário faça cadastro ou login, bem como acesso à Área do Farmacêutico. Também dispõe dos icones "sobre" e "como funciona o medicamento fácil".

![Inicial](img/principal.png)

### Requisitos atendidos 

RF-01 -  O site deve apresentar na página principal um buscador no qual o usuário irá digitar seu endereço.

### Artefatos da funcionalidade 

- index.html
- base.css
- logo.png

### Estrutura de Dados 

<!DOCTYPE html>
<html>
<head>
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet">
    <link href="css/template.css" rel="stylesheet" />
    <meta charset="UTF-8">
    <title>Medicamento Fácil. Simples. Rápido.</title>
</head>
<body>
    <header>
        <br>
        <div class="row">
            <div class="col-sm-4">
                <button id="button1" class="btn botao-principal">Área do Farmacêutico</button>
            </div>
            <div class="col-sm-8 text-end">
                <ul class="lista-horizontal">
                    <li>
                        <button type="button" class="btn botao-padrao">Faça seu Login</button>
                    </li>
                    <li>
                        <a href="cadastro.html">
                            <button type="button" class="btn botao-padrao">Crie sua conta</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <main>
        <div class="row separador"></div>
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <img src="imagens/logo.png" class="img-fluid" />
            </div>
            <div class="col-sm-4"></div>
        </div>
        <div class="row"></div>
        <br><br>
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <div class="botao-busca">
                    <form method="get" action="mapa.html">
                        <input class='form-control buscador' type="text" placeholder="Digite seu endereço" />
                        <button type="submit" class="lupa">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </main>
    <footer class="row">
        <div class="col-md-12">
            <nav>
                <ul class="lista-horizontal">
                    <li>Sobre</li>
                    <li>Como funciona o Medicamento Fácil!</li>
                </ul>
            </nav>
        </div>
    </footer>
    <script src="js/bootstrap.min.js" type="javascript"></script>
</body>
</html>

### Instruções de acesso 

Abra um navegador de Internet e informe a seguinte URL: XXXXX

A Tela Inicial é a primeira funcionalidade exibida pelo aplicativo. 

## Tela de Busca de Medicamentos (RF-02)

A Tela de Busca de Medicamentos do sistema apresenta apresenta um buscador centralizado, no qual o usuário deverá digitar os medicamentos de interesse. Esta tela ainda permite que o usuário notifique a falta de um medicamento. Também dispõe dos icones "sobre" e "como funciona o medicamento fácil".

![Busca Medicamento](img/busca_medicamento.png)

### Requisitos atendidos 

RF-02 -  O site deve apresentar uma página com um buscador no qual o usuário irá digitar os medicamentos buscados.

### Artefatos da funcionalidade 

- index.html
- template.css
- logo.png

### Estrutura de Dados 

<!DOCTYPE html>
<html>

<head>
    <link href="css/bootstrap.min.css" rel="stylesheet" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet">

    <link href="css/template.css" rel="stylesheet" />

    <meta charset="UTF-8">
    <title>Medicamento Fácil. Simples. Rápido.</title>
</head>

<body>
    <header>
        <br>
        <div class="row">
            <div class="col-sm-4">
            </div>
            <div class="col-sm-8 text-end">
                <ul class="lista-horizontal">
                    <li>
                        <button type="button" class="btn botao-padrao">Notificar falta de medicamento</button>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <main>
        <div class="row separador"></div>
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
                <img src="imagens/logo.png" class="img-fluid" />
            </div>
            <div class="col-sm-4"></div>
        </div>
        <div class="row"></div>
        <br><br>
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <div class="botao-busca">
                    <form method="get" action="mapa.html">
                        <input class='form-control buscador' type="text" placeholder="Buscar medicamentos" />
                        <button type="submit" class="lupa">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </main>
    <footer class="row">
        <div class="col-md-12">
            <nav>
                <ul class="lista-horizontal">
                    <li>Sobre</li>
                    <li>Como funciona o Medicamento Fácil!</li>
                </ul>
            </nav>
        </div>
    </footer>
    <script src="js/bootstrap.min.js" type="javascript"></script>
</body>

</html>

### Instruções de acesso 

Abra um navegador de Internet e informe a seguinte URL: XXXXX

A Tela de Busca de Medicamentos é a exibida após a confirmação de endereço. 

## Tela Cadastro (RF-05)

A Tela de Busca de Medicamentos do sistema apresenta apresenta um buscador centralizado, no qual o usuário deverá digitar os medicamentos de interesse. Esta tela ainda permite que o usuário notifique a falta de um medicamento. Também dispõe dos icones "sobre" e "como funciona o medicamento fácil".

![Cadastro](img/cadastro.png)

### Requisitos atendidos 

RF-05 -  O site deve ter uma área personalizada, na qual o usuário deverá acessar com login e senha. Nesta área, o usuário irá cadastrar seu e-mail, celular e os medicamentos que utiliza, sendo notificado assim que os medicamentos estiverem disponíveis.

### Artefatos da funcionalidade 

- cadastro.html
- template.css
- logo.png

### Estrutura de Dados 

<!DOCTYPE html>
<html>
<head>
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet">
    <link href="css/template.css" rel="stylesheet" />
    <meta charset="UTF-8">
    <title>Medicamento Fácil. Simples. Rápido.</title>
</head>
<body class="ativar-rolamento">
    <header>
        <br>
        <div class="row">
            <div class="col-sm-6">
                <a href="index.html">
                    <button id="button1" class="btn botao-padrao">Voltar</button>
                </a>
            </div>
            <div class="col-sm-6 text-end">
                <a href="index.html">
                    <img src="imagens/logo.png" width="150" />
                </a>
            </div>
        </div>
    </header>
    <main class="text-center">
        <div class="row">
            <div class="col-sm-12">
                <h1>Cadastre-se</h1>
                <h2>É rápido e fácil</h2>                
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <form class="row g-3">
                    <div class="col-md-12">
                        <label for="inputName" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="inputName" >
                    </div>
                    <div class="col-md-12">
                        <label for="inputLastname" class="form-label">Sobrenome</label>
                        <input type="text" class="form-control" id="inputLastname" >
                    </div>
                    <div class="col-12">
                        <label for="inputPhone" class="form-label">Celular</label>
                        <input type="number" class="form-control" id="inputPhone">
                    </div>
                    <div class="col-md-12">
                        <label for="inputEmail" class="form-label">E-mail</label>
                        <input type="email" class="form-control" id="inputEmail">
                    </div>
                    <div class="col-md-12">
                        <label for="inputPassword" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="inputPassword">
                    </div>
                    <div class="col-md-12">
                        <label for="inputPassword2" class="form-label">Digite novamente sua senha</label>
                        <input type="password" class="form-control" id="inputPassword2">
                    </div>
                    <div class="col-md-12">
                        <label for="inputMed" class="form-label">Medicamentos que utiliza</label>
                        <input type="text" class="form-control" id="inputMed">
                    </div>
                    </div>
                    <div class="row"></div>
                    <br><br>
                    <div class="col-12">
                        <button type="submit" class="btn botao-secundario">Realizar meu Cadastro</button>
                    </div>
                </form>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </main>
    <footer class="row">
        <div class="col-md-12">
            <nav>
                <ul class="lista-horizontal">
                    <li>Sobre</li>
                    <li>Como funciona?</li>
                </ul>
            </nav>
        </div>
    </footer>
    <script src="js/bootstrap.min.js" type="javascript"></script>
</body>
</html>

### Instruções de acesso 

Abra um navegador de Internet e informe a seguinte URL: XXXXX

A Tela de Cadastro é a exibida após o usuário clicar em "Crie sua Conta".


### Tela de Login (RF-05)

A Tela de Login do sistema apresenta um buscador centralizado, no qual o usuário deverá digitar e-mail e senha cadastrados para acessar a área do usuário. Esta tela também apresenta o botão “esqueceu sua senha?” para o caso em que o usuário necessite recuperar o acesso. Também dispõe dos ícones "sobre" e "como funciona o medicamento fácil".
