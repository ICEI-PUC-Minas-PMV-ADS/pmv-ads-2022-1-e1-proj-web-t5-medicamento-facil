# Arquitetura da Solução

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação. 

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados no diagrama da Figura abaixo. 

![Diagrama de Componentes](img/componentes.png)
<center>Figura - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Medicamentos** - cadastro dos medicamentos, contendo o nome, dosagem e disponibilidade.
     - **Usuários** - cadastro dos usuários do SUS, contendo nome, sobrenome, celular, e-mail e a senha; cadastro do farmacêutico de cada UBS.
     - **UBS** - cadastro de todas as UBS do país, contendo o nome, a localização, as informações de contato e os responsáveis pelo fornecimento dos medicamentos.
     - **Medicamentos por usuário** - cadastro da relação dos medicamentos de cada usuário.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 
 - **API Mapas** - plataforma que permite o acesso à localização e aos mapas do Google Maps.
  
## Tecnologias Utilizadas

- Linguagens utilizadas para a base do desenvolvimento web do projeto: HTML, CSS e JavaScript. 

- IDEs de desenvolvimento: Visual Studio Code.

- Editor gráfico de vetor e prototipagem de projetos de design: Figma.

- Hospedagem da documentação e arquivos do projeto: Github.

- Plataforma de hospedagem em nuvem: AWS Amplify.

- Serviço de pesquisa e visualização de mapas e imagens de satélite para localização do usuário e da UBS: Google Mapas.

## Hospedagem

O site utiliza a plataforma Amazon Web Services - AWS como ambiente de hospedagem da aplicação. O site é mantido no ambiente do link: 

[Site do Projeto Medicamento Fácil](https://main.d3hwghqgn7vvmi.amplifyapp.com/)

A publicação na plataforma AWS é feita via git para o repositório remoto que se encontra no link: 

[Repositório Remoto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t5-medicamento-facil.git)


