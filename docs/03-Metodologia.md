
# Metodologia

A metodologia contempla as definições das ferramentas utilizadas pela equipe tanto para a manutenção dos códigos e dos demais artefatos quanto para a organização do time na execução das tarefas do projeto. 

## Relação de Ambientes de Trabalho 

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas. Para o repositório de código fonte, gerenciamento do projeto, bem como para armazenamento e alteração dos documentos do projeto será utilizado o GitHub, instrumento robusto e amplamente usado no mercado. Para o projeto de interface e Wireframes, será utilizado o Figma, um editor online de gráficos com ênfase em prototipagem. Além disso, a comunicação ágil do grupo para acompanhamento diário das atividades se dará pelo uso da rede WhatsApp, enquanto as reuniões de discussão serão pelo Microsoft Teams. 

A relação dos ambientes com seu respectivo propósito e link de acesso é apresentada na tabela que se segue. 

| Ambiente | Plataforma | Link de acesso |
|----------|------------|----------------|
| Repositório de código fonte | GitHub | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t5-medicamento-facil.git |
| Documentos do projeto | GitHub |  https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t5-medicamento-facil.git |
| Projeto de Interface e  Wireframes | Figma  | https://www.figma.com/file/oKoR0QvGVRU6R26v3ubK1l/Untitled?node-id=0%3A1  |
| Gerenciamento do Projeto | GitHub | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t5-medicamento-facil/projects |
| Acompanhamentos diários do andamento de atividades | WhatsApp | Grupo do projeto no WhatsApp |
| Reuniões de discussão | Microsoft Teams | https://teams.microsoft.com/_#/school/conversations/Grupo%20Problema%2004%20-%20Ter%C3%A7a-feira%2020h30?threadId=19:0340ad02bf694120b94041a8bcbbf1e2@thread.tacv2&ctx=channel  |
 
## Gestão do código fonte
Para gestão do código fonte a equipe utiliza um processo baseado no Git Flow, que é um fluxo de trabalho que consiste no uso de ramificações de recursos e várias ramificações primárias, sendo uma das interpretações de uso do Git. O Git é um sistema de controle de versão amplamente utilizado atualmente, criado por Linus Torvalds e é um código open-source.

O projeto segue o fluxo padrão do GitFlow e possui as seguintes ramificações: Main, HotFix, Release, Develop e Feature. 

![](/docs/img/fluxo.png)

- **Main ou Principal**: Armazena o histórico oficial de lançamento do sistema, é o código mais estável e que melhor atende à demanda no momento. Esta ramificação deve ser marcada com um número de versão atualizado.
- **HotFix ou Manutenção Urgente**: São utilizadas para corrigir rapidamente erros do sistema e devem ser evitada ao máximo, elas derivam diretamente da ramificação main para agilizar o processo de correção e não interromper o restante do fluxo de trabalho. Depois que o hotfix é concluído, ele passa por merge para a ramificação develop e a main
- **Feature**: Ramificação dedicada para criar novos recursos, geralmente tem como pai a ramificação **develop**. Os recursos não devem nunca interagir direto com a ramificação main. Ao concluir o recurso, a ramificação é revisada, integrada com a ramificação de origem (develop) e removida, assim cada recurso deve ser entregue na ramificação pai.
- **Develop**: Serve para integração dos recursos concluídos pelos membros ou sub equipes.
- **Release**: Ramificação responsável para entrega de recursos para o **main**, age como um intermediário entre **develop** e **main**, nesse intervalo pode ser feito pequenos ajustes, nele é versionado o código. Nesta ramificação a revisão é mais rígida, tendo em vista que ao finalizar ele vai mesclar com o **main** e **develop**.

## Gerenciamento do Projeto
A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. 

A equipe está organizada da seguinte maneira: 
- Scrum Master: Carolina  
- Product Owner: Fabiana 
- Equipe de Desenvolvimento: 
Rafael, 
Fagner, 
Ríder, 
Tauan, 
Carolina, 
Fabiana 
- Equipe de Design: 
Rafael, 
Fagner,
Ríder,
Tauan,
Carolina, 
Fabiana

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o Github estruturado com as seguintes listas:   
- Product Backlog: recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas a esta lista. 
- To Do: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando. 
- Doing: Quando uma tarefa tiver sido iniciada, ela é movida para cá. 
- Test: Checagem de Qualidade. Quando as tarefas são concluídas, eles são movidas para o “CQ”. No final da semana, eu revejo essa lista para garantir que tudo saiu perfeito. 
- Done: nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para ser entregues ao usuário. Não há mais edições ou revisões necessárias, ele está agendado e pronto para a ação. 
- Locked: Quando alguma coisa impede a conclusão da tarefa, ela é movida para esta lista juntamente com um comentário sobre o que está travando a tarefa. 

O quadro kanban do grupo no Github está disponível através da URL https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t5-medicamento-facil.git  e é apresentado, na Figura abaixo. 

![](/docs/img/Github-gerenciamento.png)

A tarefas são, ainda, etiquetadas em função da urgência da atividade e seguem o seguinte esquema de cores/categorias: 

- Vermelha: prioridade alta 
- Amarela: prioridade média 
- Verde: prioridade baixa  

As tarefas poderão ser escolhidas por qualquer membro do time ou então serão direcionadas a um membro específico, caso ele possua experiencia em determinada área de conhecimento. Em relação a livre escolha das tarefas, obrigatoriamente, deverá ser seguida a hierarquia de prioridades, da mais alta para a mais baixa. A prioridade padrão a ser considerada é a amarela, devendo manter a vermelha para as demandas urgentes que surgirem ao longo do projeto. 
