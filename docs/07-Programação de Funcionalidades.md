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


