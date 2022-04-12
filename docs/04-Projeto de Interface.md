
# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

 Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a>.

## User Flow

![Exemplo de UserFlow](img/userflow.jpg)

Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor mapear todo fluxo de telas do site ou app. Essa técnica funciona para alinhar os caminhos e as possíveis ações que o usuário pode fazer junto com os membros de sua equipe.

> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)


## Wireframes

Conforme fluxo de telas do projeto, apresentado no item anterior, as telas do sistema são discutidas em detalhes nos itens que se seguem. 

### Tela - Home-Page 

A tela de home-page mostra, em destaque, o logo de identidade visual do Medicamento Fácil. Abaixo, há uma linha de pesquisa, na qual o usuário deve digitar o seu endereço, para que a busca mostre os resultados mais próximos de sua localização. 

No bloco superior esquerdo, o usuário pode acessar a área do farmacêutico, cujo acesso estará disponível apenas para estes profissionais. Já o bloco superior direito é para acesso dos usuários finais, tanto para fazer login, quanto para criarem uma conta. 

![Wireframe1](img/wireframe1.jpg)

### Tela – Cadastre-se 

Ao clicar em “criar conta” na tela de home-page, o usuário será redirecionado a esta tela, na qual deverá preencher seus dados pessoais, criar uma senha e adicionar os medicamentos que utilizar. 

![Wireframe2](img/wireframe2.jpg)

### Tela - Faça login 

Ao clicar em “fazer login” na tela de home-page, o usuário será redirecionado a esta tela, na qual deverá inserir seu e-mail cadastrado e senha, para acessar a área do usuário. Esta tela também apresenta o botão “esqueceu sua senha?” para o caso em que o usuário necessite recuperar o acesso. 

![Wireframe3](img/wireframe3.jpg)

### Tela - Esqueceu sua senha 

Ao clicar em “Esqueceu sua senha” na tela "faça login", o usuário será redirecionado a esta tela, na qual deverá inserir seu e-mail cadastrado para que o código de recuperação de senha lhe seja enviado. Caso o e-mail esteja correto e cadastrado, a tela apresenta a mensagem de confirmação de envio e o botão "recebi meu código" que redireciona o usuário à página "Código de recuperação". 

![Wireframe8](img/Wireframe8.jpg)

### Tela - Código de recuperação 

Ao clicar em “recebi meu código” na tela "Esqueceu sua senha", o usuário será redirecionado a esta tela, na qual deverá inserir o código de recuperação de senha recebido no campo disponível. A página apresenta o botão "enviar" que irá verificar se o código está correto, caso sim, o usuário será direcionado à pagina "Altere a senha".

![Wireframe7](img/Wireframe7.jpg)

### Tela - Altere a senha 

Ao clicar em “enviar” na tela de "código de recuperação" e após verificação, o usuário será redirecionado a esta tela na qual deverá inserir a sua nova senha de acesso e confirmá-la novamente nos campos disponíveis.

![Wireframe9](img/Wireframe9.jpg)


 ### Tela - Seleção de função pelo usuário
 
 A tela oferece ao usuário a possibilidade de escolher entre as duas funcionalidade do "Medicamento Fácil": 1) Notificar falta de medicamento ou 2) Pesquisar medicamento;

![Wireframe12](img/wireframe12.jpg)

### Tela - Login do (a) Farmacêutico (a)

O (a) usuário (a) farmacêutico (a), responsável pelo controle de medicamentos da UBS - Unidade Básica de saúde, fará o login nessa tela, na qual será necessário informar e-mail e senha cadastrados. 

![Wireframe13](img/wireframe13.jpg)


### Tela - Área do  (a) Farmacêutico (a)

Após realizar o login, o profissional da farmácia visualizará as listas de medicamentos e doses para filtro, além da seção para mrcação de SIM ou NÃO, para indicar se o medicamento está ou não disponível na UBS.

![Wireframe14](img/wireframe14.jpg)


### Tela – Notificar a falta de medicamentos

Caso um usuário tenha verificado a indisponibilidade de um determinado medicamento, ele poderá notificar a falta através de uma requisição no sistema. 

![wireframe 4](img/wireframe1.png)

### Tela - Resultado da Pesquisa 

Assim que o usuário realiza a busca de um medicamento no tópico de pesquisa, ao clicar no botão “Ok”, ele é direcionado para uma tela que traz a relação dos medicamentos, as dosagens, o responsável pelo fornecimento, o prazo de entrega e o mapa com a localização da UBS mais próxima que possui o medicamento procurado. 
O usuário poderá compartilhar o resultado da busca e ver as informações de contato da UBS.

