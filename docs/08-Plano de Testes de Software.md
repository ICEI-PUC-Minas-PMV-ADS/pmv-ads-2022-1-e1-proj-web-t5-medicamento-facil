# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge
- Conectividade de Internet para acesso às plataformas (APIs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

| Caso de Teste | CT-01 - Localização mapa |
|---------------|--------------------------|
| Requisitos Associados | RF-01 - O site deve apresentar na página principal um buscador no qual o usuário irá digitar seu endereço RF-02 - O site deve confirmar a localização do usuário no mapa |
| Objetivo do Teste | Verificar se a localização do usuário está corretamente indicada no mapa. |
| Passos | 1) Acessar o Navegador 2) Informar o endereço do Site 3) Visualizar a página inicial 4) Inserir o endereço a ser buscado |
| Critérios de Êxito | - A tela inicial deve abrir corretamente - Ao digitar o endereço, o usuário deve ser direcionado à tela de confirmação do endereço - O endereço digitado deve ser corretamente indicado no mapa. |


| Caso de Teste | CT-02 - Busca de medicamentos |
|---------------|--------------------------|
| Requisitos Associados | RF-03 - O site deve apresentar uma página com um buscador no qual o usuário irá digitar os medicamentos buscados RF-04 - O site deve oferecer como resultado da busca o status de disponibilidade do(s) medicamento(s), além de um mapa localizando em qual Unidade Básica de Saúde mais próxima o(s) medicamento(s) está disponível, integrando a geolocalização do Google Maps RF- 07- O site deve fornecer o prazo de entrega dos medicamentos RF-08 - O site deve informar o(s) responsável(is) pelo fornecimento da medicação RF- 11 - O site deve permitir ao usuário visualizar as dosagens disponíveis do(s) medicamento(s) buscado RF-12- O site deve permitir visualizar as informações de contatos das Unidades Básicas de Saúde |
| Objetivo do Teste | Verificar se o resultado da busca de medicamentos está corretamente indicado. |
| Passos | 1) Acessar o Navegador 2) Informar o endereço do Site 3) Visualizar a página de busca de medicamentos 4) Inserir o medicamento a ser buscado 5) Vizualizar o resultado da busca |
| Critérios de Êxito | - A tela de busca de medicamentos deve abrir corretamente - Ao digitar o medicamento, o usuário deve ser direcionado à tela de resultado da busca - A tela de resultado da busca deve indicar a disponibilidade do medicamento buscado, o responsável pela entrega, prazo de entrega e a UBS mais próxima da localização indicada, com suas informações de contato. |

| Caso de Teste | CT-03 - Login do farmacêutico |
|---------------|--------------------------|
| Requisitos Associados | RF-05 - O site deve ter uma área de login do farmacêutico, na qual ele irá atualizar o estoque de medicamentos disponíveis pela farmácia da UBS. |
| Objetivo do Teste | Verificar se o login do farmacêutico está acontecendo corretamente. |
| Passos | 1) Acessar o Navegador 2) Informar o endereço do Site 3) Visualizar a página de login do farmacêutico 4) Inserir o e-mail e senha cadastrados 5) Ser redirecionado para a tela de área do farmacêutico |
| Critérios de Êxito | - A tela de login do farmacêutico deve abrir corretamente - O login e senha cadastrados devem direcionar o usuário para a tela de área do farmacêutico - Login e senha não cadastrados devem exibir uma mensagem de login ou senha incorretos. |


| Caso de Teste | CT-04 - Área do farmacêutico |
|---------------|--------------------------|
| Requisitos Associados | RF-05 - O site deve ter uma área de login do farmacêutico, na qual ele irá atualizar o estoque de medicamentos disponíveis pela farmácia da UBS. |
| Objetivo do Teste | Verificar se a área do farmacêutico está permitindo a alteração de estoque corretamente. |
| Passos | 1) Acessar o Navegador 2) Informar o endereço do Site 3) Visualizar a página de área do farmacêutico 4) Inserir um medicamento como disponível e outro como indisponível 5) Vizualizar a disponibilidade de um medicamento 6) Alterar a disponibilidade de um medicamento |
| Critérios de Êxito | - A tela de área do farmacêutico deve abrir corretamente - A página deve permitir a inclusão de medicamentos tanto disponíveis quanto indisponíveis - A página deve permitir que o farmacêutico vizualize e altere a disponibilidade de medicamentos. |


| Caso de Teste | CT-05 - Área do usuário |
|---------------|--------------------------|
| Requisitos Associados | RF-06 - O site deve ter uma área personalizada, na qual o usuário deverá acessar com login e senha. Nesta área, o usuário irá cadastrar seu e-mail, celular e os medicamentos que utiliza, sendo notificado assim que os medicamentos estiverem disponíveis. |
| Objetivo do Teste | Verificar se o cadastramento de usuário está acontecendo corretamente. |
| Passos | 1) Acessar o Navegador 2) Informar o endereço do Site 3) Visualizar a página de área do usuário 4) Inserir todos os dados de cadastrado 5) Ser redirecionado para a tela de login do usuário |
| Critérios de Êxito | - A tela de área do usuário deve abrir corretamente - Os dados cadastrados devem ser corretamente armazenados. |


| Caso de Teste | CT-06 - Login do usuário |
|---------------|--------------------------|
| Requisitos Associados | RF-06 - O site deve ter uma área personalizada, na qual o usuário deverá acessar com login e senha. Nesta área, o usuário irá cadastrar seu e-mail, celular e os medicamentos que utiliza, sendo notificado assim que os medicamentos estiverem disponíveis. |
| Objetivo do Teste | Verificar se o login está acontecendo corretamente. |
| Passos | 1) Acessar o Navegador 2) Informar o endereço do Site 3) Visualizar a página de login 4) Inserir o e-mail e senha cadastrados 5) Ser redirecionado para a tela de área do usuário |
| Critérios de Êxito | - A tela de login deve abrir corretamente - O login e senha cadastrados devem direcionar o usuário para a tela de área do usuário - Login e senha não cadastrados devem exibir uma mensagem de login ou senha incorretos. |

| Caso de Teste | CT-07 - Alterar o Cadastro |
|---------------|--------------------------|
| Requisitos Associados | RF-10 - O site deve permitir que o usuário recupere sua senha em caso de esquecimento RF-14 - O site deve permitir que o usuário visualize e altere seus dados cadastrados |
| Objetivo do Teste | Verificar se a alteração de cadastro está ocorrendo corretamente. |
| Passos | 1) Acessar o Navegador 2) Informar o endereço do Site 3) Cadastrar um novo usuário 4) Acessar com o login do usuário cadastrado 5) Vizualizar a área do usuário 6) Alterar o cadastro 7) Acessar o login novamente com o cadastro alterado |
| Critérios de Êxito | - A tela novo cadastro deve abrir corretamente - Ao alterar o cadastro, o usuário deverá conseguir realizar login com o novo cadastro |


| Caso de Teste | CT-08 - Notificação de falta de medicamento |
|---------------|--------------------------|
| Requisitos Associados | RF-09 - O site deve permitir que o próprio usuário notifique a falta de um determinado medicamento. |
| Objetivo do Teste | Verificar se a notificação está acontecendo corretamente. |
| Passos | 1) Acessar o Navegador 2) Informar o endereço do Site 3) Visualizar a página de notificação de falta de medicamento 4) Inserir o medicamento em falta |
| Critérios de Êxito | - A tela de notificação de falta de medicamento deve abrir corretamente - Após a inclusão do medicamento em falta, deve ser apresentada uma mensagem de envio com êxito. |

