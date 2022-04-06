# Especificações do Projeto

A fim de definir de maneira minuciosa a especificação do problema e os pontos mais relevantes a serem tratados neste projeto, foram realizadas entrevistas com usuários, bem como farmacêuticos dos Centros de Saúde de Belo Horizonte. As entrevistas objetivaram identificar o perfil socioeconômico dos usuários e as principais dificuldades tanto dos usuários quanto dos profissionais responsáveis pela entrega dos medicamentos. 

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas nas tabelas a seguir, sendo três usuários da farmácia dos Centros de Saúde e um farmacêutico da Unidade Básica de Saúde. 

|    João Santos    |
|-------------------|
|Idade|Renda|Escolaridade|Medicamento utilizado|Periodicidade do fornecimento|
|43 anos|Até R$ 1.254|Ensino Médio incompleto|Insulina|Mensal|
|Principais características|João trabalha como servente de pedreiro, é diabético e faz uso de insulina diariamente. Realiza seus exames de controle e acompanhamento médico no Centro de Saúde perto de sua casa. Mensalmente busca a insulina na farmácia da unidade, devendo mantê-la refrigerada.|
|Principais dificuldades|- Alterações recorrentes de responsáveis, cada vez que vai buscar o medicamento é com uma pessoa e com isso as orientações também mudam; - Não há data certa para buscar, entrega não ocorre no prazo.|
|É frequente a falta do medicamento?|Não falta, mas também não há data certa para retirada. Ocorre de em um mês vir quantidade a mais do que o necessário, o que compensa a falta do mês seguinte.|
|Utilizaria um site com dados sobre a disponibilidade dos medicamentos na Unidade Básica? Acha que é relevante?|Tem alguma dificuldade com uso de recursos tecnológicos, mas acha que seria relevante sim.|



 

 


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
