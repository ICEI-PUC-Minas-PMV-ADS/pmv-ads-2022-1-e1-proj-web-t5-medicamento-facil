# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge
- Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

|Caso de Teste|CT-01 - login do usuário|
|Requisitos Associados|RF-06 - O site deve ter uma área personalizada, na qual o usuário deverá acessar com login e senha. Nesta área, o usuário irá cadastrar seu e-mail, celular e os medicamentos que utiliza, sendo notificado assim que os medicamentos estiverem disponíveis.|
|Objetivo do Teste|Verificar se o login está acontecendo corretamente|
|Passos|1) Acessar o Navegador 2) Informar o endereço do Site 3) Visualizar a página de login 4) Inserir o e-mail e senha cadastrados 5) Ser redirecionado para a tela de área do usuário|
|Critérios de Êxito|- A tela de login deve abrir corretamente - O login e senha cadastrados devem direcionar o usuário para a tela de área do usuário - Login e senha não cadastrados devem exibir uma mensagem de login ou senha incorretos|
