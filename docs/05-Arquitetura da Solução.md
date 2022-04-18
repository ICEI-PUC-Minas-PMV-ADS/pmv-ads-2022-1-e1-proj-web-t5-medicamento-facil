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

## Tecnologias Utilizadas

- Linguagens utilizadas para a base do desenvolvimento web do projeto: HTML, CSS e JavaScript. 

- IDEs de desenvolvimento: Visual Studio Code.

- Editor gráfico de vetor e prototipagem de projetos de design: Figma.

- Hospedagem da documentação e arquivos do projeto: Github.

- Plataforma de hospedagem em nuvem: AWS Amplify.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Hospede um site estático](https://aws.amazon.com/pt/getting-started/hands-on/host-static-website/)
