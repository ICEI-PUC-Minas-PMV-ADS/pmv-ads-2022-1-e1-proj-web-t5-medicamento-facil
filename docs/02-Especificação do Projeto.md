# Especificações do Projeto

A fim de definir de maneira minuciosa a especificação do problema e os pontos mais relevantes a serem tratados neste projeto, foram realizadas entrevistas com usuários, bem como farmacêuticos dos Centros de Saúde de Belo Horizonte. As entrevistas objetivaram identificar o perfil socioeconômico dos usuários e as principais dificuldades tanto dos usuários quanto dos profissionais responsáveis pela entrega dos medicamentos. 

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas nas tabelas a seguir, sendo três usuários da farmácia dos Centros de Saúde e um farmacêutico da Unidade Básica de Saúde. 

### João Santos 
![Joao](img/joao.jpg)

João trabalha como servente de pedreiro, é diabético e faz uso de insulina diariamente. Realiza seus exames de controle e acompanhamento médico no Centro de Saúde perto de sua casa. Mensalmente busca a insulina na farmácia da unidade, devendo mantê-la refrigerada. 

Suas principais dificuldades são:
- Alterações recorrentes de responsáveis, cada vez que vai buscar o medicamento é com uma pessoa e com isso as orientações também mudam; 
- Não há data certa para buscar, entrega não ocorre no prazo.

Acerca da falta de medicamentos, para ele, não falta, mas também não há data certa para retirada. Ocorre de em um mês vir quantidade a mais do que o necessário, o que compensa a falta do mês seguinte.

Apesar de ter alguma dificuldade com uso de recursos tecnológicos, mas acha que seria relevante um site sobre a disponibilidade dos medicamentos.


|  Idade  |     Renda    |       Escolaridade      | Medicamento utilizado | Periodicidade do fornecimento |
|---------|--------------|-------------------------|-----------------------|-------------------------------|
| 43 anos | Até R$ 1.254 | Ensino Médio incompleto |       Insulina        |             Mensal            |

### Maria da Silva 
![Maria](img/maria1.jpg)

Maria trabalha como auxiliar de limpeza em um condomínio. Seu filho, Luiz, de 5 anos é autista e seu acompanhamento médico é feito no Centro de Saúde perto de sua casa. O Centro de Saúde também é responsável por referenciar Luiz para os atendimentos de tratamentos terapêuticos e de fonoaudiologia. Mensalmente busca a Risperidona na farmácia da unidade. 

Suas principais dificuldades são:
- Falta de disponibilidade do medicamento. 

Acerca da falta de medicamentos, para ela, frequentemente vai ao Centro de Saúde e não encontra o medicamento. Acaba comprando na farmácia particular. 

Acha que seria relevante um site sobre a disponibilidade dos medicamentos.


|  Idade  |     Renda    |       Escolaridade      | Medicamento utilizado | Periodicidade do fornecimento |
|---------|--------------|-------------------------|-----------------------|-------------------------------|
| 27 anos | Até R$ 1.254 |  Ensino Médio completo  |     Risperidona       |             Mensal            |

 ### Maria Rosineide 
![Maria](img/maria2.png)

 Maria Rosineide tem 65 anos é aposentada e complementa sua renda com alugueis. Sua mãe, Maria do Carmo, de 100 anos é acometida por doenças, tais como, colesterol alto, glaucoma e pressão alta. Seus medicamentos são disponibilizados na UBS mais próxima de sua casa. 

 Suas principais dificuldades são:
 - Alguns medicamentos não estão disponíveis e precisam ser comprados. 

Acerca da falta de medicamentos, para ela não é comum faltar.

Acha que seria relevante um site sobre a disponibilidade dos medicamentos, desde que todos os remédios que utiliza estejam em um só local. Acha a aplicação relevante embora não tenha muita prática se tivesse algo no WhatsApp seria o mundo ideal. 

|  Idade  |     Renda    |       Escolaridade      |                                    Medicamento utilizado                                                | Periodicidade do fornecimento |
|---------|--------------|-------------------------|---------------------------------------------------------------------------------------------------------|-------------------------------|
| 65 anos | Até R$ 2.254 |  Ensino Médio completo  | Losartana, Hidroclorotiazida, Sivastantina, AAS Infantil, Systane, Tartarato de Brimonidina, Clonazepam |           Bimestral           |

### José Antônio Rocha 
![Jose](img/jose.jpg)

José é aposentado e precisa comparecer mensalmente à UBS próxima de sua casa para buscar seus medicamentos, além dos exames e consultas de controle. Para isso, ele pede ajuda da filha, Mariana, que se encarrega de levá-lo à UBS. Além de ser hipertenso, também apresentou colesterol LDL e triglicerídeos altos em seus últimos exames. Por isso, faz uso diário de Enalapril e Sinvastatina. 

Suas principais dificuldades são:
- Longas filas de espera. 
- Possível indisponibilidade de medicamentos. 

Acerca da falta de medicamentos, para ele a falta ocorre esporadicamente. 

Acha que seria relevante um site sobre a disponibilidade dos medicamentos, com ajuda da filha utilizaria o site para saber da disponibilidade da medicação e acharia prático pra evitar ir à UBS nos dias em que o medicamento não estiver disponível. 

|  Idade  |     Renda    |        Escolaridade       |  Medicamento utilizado   | Periodicidade do fornecimento |
|---------|--------------|---------------------------|--------------------------|-------------------------------|
| 80 anos | Até R$ 1.254 |  Ensino Médio incompleto  | Enalapril e Sinvastatina |             Mensal            |

### Carlos da Cruz
![Carlos](img/carlos.png)

Carlos tem 33 anos e é farmacêutico no Centro de Saúde em Belo Horizonte há 7 anos. Ele é responsável por monitorar os estoques de medicamentos disponíveis no sistema SISREDE e fazer a dispensação para os usuários da unidade. Neste software do SUS, ele tem acesso à validade das medicações, consulta a disponibilidade, realiza a dispensação, bloqueio e o desbloqueio de lotes de medicamentos e também e realiza o ressuprimento. 

Descrição do procedimento de entrega dos medicamentos: A reposição dos medicamentos nas unidades de saúde é realizada pela Farmácia Regional, que reabastece mensalmente os estoques das unidades de saúde.  
Só há falta na unidade quando o medicamento está em falta no município.  

Procedimento realizado em caso de indisponibilidade de medicamento na unidade: É realizada a comunicação com a Farmácia Regional (responsável pela gestão de abastecimento das unidades de saúde), a qual avalia se há possibilidade de remanejamento de medicamentos.  

Acredita que um site com os dados sobre a disponibilidade dos medicamentos na Unidade Básica é relevante?  É relevante sim, porém, importante discutir como será feito esse tipo de abastecimento de dados. Caso a disponibilidade desses medicamentos seja feita em tempo real nas unidades de saúde, considerar que nesse processo pode haver erros que geram um transtorno para o usuário. 

## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários. 

|       EU COMO... `PERSONA`        |                    QUERO/PRECISO ... `FUNCIONALIDADE`                             |                                    PARA ... `MOTIVO/VALOR`                                               |
|-----------------------------------|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
|    João Santos (usuário do SUS)   |       Saber a disponibilidade do medicamento antes de me deslocar até a UBS       |                           Não precisar me deslocar caso não estejam disponíveis                          |
|    João Santos (usuário do SUS)   |                 Conhecer os responsáveis pelo fornecimento da medicação           |                                     Receber as orientações adequadas                                     |
|    João Santos (usuário do SUS)   |               Saber previamente o prazo de entrega dos medicamentos               |                                Me organizar quanto à data de ida à UBS                                   | 
|  Maria da Silva (usuário do SUS)  |        Saber a disponibilidade do medicamento antes de me deslocar até a UBS      | Não precisar me deslocar caso não estejam disponíveis e se organizar para comprar na farmácia particular |
|  Maria da Silva (usuário do SUS)  |           Ser notificada quando o meu medicamento estiver disponível na UBS       |                          Organizar para ir buscar o medicamento assim que ele esteja disponível          |
|  Maria Rosineide (usuário do SUS) |                Unificar a busca de todos os remédios em um só local               |                         Por ser uma pessoa idosa, não consigo me deslocar com facilidade                 | 
|  Maria Rosineide (usuário do SUS) |     Receber pelo WhatsApp sobre a disponibilidade dos meus medicamentos           |                        Como não tenho conhecimento tecnológico, no WhatsApp é mais fácil                 |
|José Antônio Rocha (usuário do SUS)| Não precisar me deslocar até a UBS quando os medicamentos estiverem indisponíveis |             Evitar os transtornos para se locomover até a UBS, com ajuda da filha                        |
|José Antônio Rocha (usuário do SUS)|     Receber notificações informando quando meu medicamento estiver disponível     |        Por ser idoso e minha filha ter a vida corrida podemos acabar esquecendo de buscar a medicação    | 
|  Carlos da Cruz (farmacêutico)    | Facilitar a comunicação para os usuários acerca da disponibilidade de medicamentos|                                    Evitar transtornos para o usuário                                     | 
|  Carlos da Cruz (farmacêutico)    |      Que os próprios usuários possam notificar a falta de algum medicamento       |                   Agilizar a notificação para recebimento de mais medicamentos                           |


## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades de interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir. 

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que devem ser entregues. 

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O site deve apresentar na página principal um buscador no qual o usuário irá digitar o(s) medicamento(s) que quer consultar | ALTA | 
|RF-02| O site deve oferecer como resultado da busca o status de disponibilidade do(s) medicamento(s), além de um mapa localizando em qual Unidade Básica de Saúde mais próxima o(s) medicamento(s) está disponível, integrando a geolocalização do Google Maps  | ALTA |
|RF-03| O site deve permitir a atualização do estoque de medicamentos disponíveis pela farmácia da UBS | ALTA |
|RF-04| O site deve ter uma área personalizada, na qual o usuário deverá acessar com login e senha. Nesta área, o usuário irá cadastrar seu e-mail, celular e os medicamentos que utiliza, sendo notificado assim que os medicamentos estiverem disponíveis | ALTA |
|RF-05| O site deve fornecer o prazo de entrega dos medicamentos | ALTA |
|RF-06| O site deve informar o(s) responsável(is) pelo fornecimento da medicação | ALTA |
|RF-07| O site deve permitir que o próprio usuário notifique a falta de um determinado medicamento | ALTA |
|RF-08| O site deve permitir ao usuário visualizar as dosagens disponíveis do(s) medicamento(s) buscado | MÉDIA | 
|RF-09| O site deve permitir visualizar as informações de contatos das Unidades Básicas de Saúde | BAIXA | 
|RF-10| O site deve permitir salvar o resultado da busca | BAIXA |
|RF-11| O site deve permitir o compartilhamento da busca no WhatsApp | BAIXA |

### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender. 

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O site deve estar disponível 24 horas por dia, todos os dias da semana  | ALTA | 
|RNF-02| O site deverá permitir a visualização em um celular de forma responsiva | ALTA | 
|RNF-03| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge, Safari ou Ópera) | ALTA | 
|RNF-04| O site deve ter uma linguagem simples e de fácil entendimento | ALTA | 
|RNF-05| O site deve ter uma boa navegabilidade e usabilidade, facilitando a experiência do usuário | ALTA | 
|RNF-06| Por se tratar de um site com abrangência nacional o site deve comportar grandes acessos simultâneos | ALTA |
|RNF-07| Pelo fato de armazenar dados sensíveis e capturar a geolocalização dos usuários o site deve seguir a LGPD (Lei Geral de Proteção de Dados Pessoais) vigente e armazenar de forma segura os dados de acesso e informações de contato | ALTA | 
|RNF-08| O site deve ter uma área de ajuda com vídeo didático com foco para ajudar pessoas idosas | MÉDIO | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir. 

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 26/06/2022 |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Front end       |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho  |


