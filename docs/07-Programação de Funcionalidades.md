# Programação de Funcionalidades

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema.

## Tela Inicial (RF-01)

A Tela Inicial do sistema apresenta apresenta um buscador centralizado, no qual o usuário deverá digitar seu endereço a fim de direcionar a buscar de medicamentos à Unidade Básica de Saúde mais próxima. Esta tela ainda permite que o usuário faça cadastro ou login, bem como acesso à Área do Farmacêutico. Também dispõe dos icones "sobre" e "como funciona o medicamento fácil".

![Inicial](img/Inicial.jpg)

### Requisitos atendidos 

RF-01 -  O site deve apresentar na página principal um buscador no qual o usuário irá digitar seu endereço.

### Artefatos da funcionalidade 

- index.html
- base.css
- logo.png

### Estrutura de Dados 

<html>
<head>
    <link href="css/bootstrap.min.css" rel="stylesheet" />   
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">   
    <link href="css/base.css" rel="stylesheet" />
    <meta charset="UTF-8">
    <title>Medicamento Fácil. Simples. Rápido.</title>
</head>
<body>
    <header class="row">
        <div class="col-md-3">
            <button class="btn btn-info">Área do Farmacêutico</button>
        </div>
        <div class="col-md-6"></div>
        <div class="col-md-3 text-end">
            <button type="button" class="btn btn-info">Faça seu Login</button>
            <button type="button" class="btn btn-info">Crie sua conta</button>
        </div>
    </header>
    <main>
        <div class="row separador"></div>        
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <img src="imagens/logo.png" class="img-fluid"/>
            </div>
            <div class="col-sm-3"></div>
        </div>
        <div class="row separador"></div>
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
                <input class='buscador' type="text" placeholder="Digite seu endereço" />
            </div>
            <div class="col-sm-2"></div>
        </div>        
    </main>
    <footer class="row">
        <div class="col-md-12">
            <nav>
                <ul>
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



Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.
Para cada requisito funcional, pode ser entregue um artefato desse tipo

