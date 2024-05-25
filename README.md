# TesteIntegra

## Índice

- [Descrição](#descrição)
- [Instalação](#instalação)
- [Uso](#uso)


### Projeto Pessoal: Envio Automático de E-mails com Django e Desenvolvimento Back-End com JavaScript

Este projeto tem como objetivo principal o aprendizado e a prática das funcionalidades do framework Django, especificamente no que tange ao envio automático de e-mails. Além disso, busca reforçar as habilidades de desenvolvimento web Back-End com JavaScript, utilizando uma implementação simplificada.

#### Tecnologias Utilizadas

- **Python e Django**:
  - Django: Usado para construir a aplicação principal que gerencia o envio de e-mails.
  - Decouple: Utilizado para gerenciar variáveis de ambiente de forma segura em `settings.py`.

- **JavaScript**:
  - Node.js: Ambiente de execução para JavaScript no servidor.
  - Express: Framework para construir a API que envia requisições ao ambiente Django.
  - Axios: Biblioteca para fazer requisições HTTP a partir do Node.js.

#### Finalidade do Projeto

O projeto consiste em um sistema onde uma aplicação Node.js envia requisições externas para um servidor Django, que então processa essas requisições e realiza o disparo de e-mails automaticamente. 

A estrutura básica do projeto é a seguinte:
1. **Node.js e Express**: Implementam uma API simples que recebe requisições do usuário e as encaminha para o servidor Django.
2. **Axios**: Utilizado para fazer requisições HTTP do servidor Node.js para o servidor Django.
3. **Django**: Recebe as requisições do servidor Node.js, processa as informações e envia e-mails automáticos conforme configurado.
4. **Decouple**: Garante que informações sensíveis, como credenciais de e-mail, sejam gerenciadas através de variáveis de ambiente.

#### Benefícios do Projeto

- **Aprendizado de Django**: Foco no desenvolvimento de funcionalidades de envio de e-mails automáticos.
- **Prática com Back-End em JavaScript**: Reforço das habilidades usando Node.js, Express e Axios.
- **Integração de Tecnologias**: Aprendizado sobre como integrar diferentes tecnologias (Python/Django e Node.js) para construir uma solução funcional.
- **Gestão de Variáveis de Ambiente**: Uso de `python-decouple` para manter as configurações seguras e organizadas.

#### Funcionamento

1. **Configuração do Ambiente Django**:
   - Configuração do servidor Django para enviar e-mails.
   - Utilização de `python-decouple` para gerenciar variáveis de ambiente, como credenciais de e-mail.

2. **Implementação da API em Node.js**:
   - Criação de uma API simples usando Express.
   - Configuração de Axios para enviar requisições HTTP ao servidor Django.

3. **Envio de Requisições e Disparo de E-mails**:
   - O servidor Node.js recebe uma solicitação e usa Axios para enviar os dados ao servidor Django.
   - O servidor Django processa a solicitação recebida e envia um e-mail automático com base nas configurações pré-definidas.

Este projeto é uma excelente oportunidade para aprender e praticar conceitos importantes de desenvolvimento web Back-End, integrando diferentes tecnologias e construindo uma solução funcional de ponta a ponta.


## Instalação

### Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:
- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/) 
- [pip](https://pip.pypa.io/en/stable/installation/) (gerenciador de pacotes Python)

### Passo 1: Clonar o Repositório

Clone o repositório do projeto para o seu ambiente local

### Passo 2: Configuração do Ambiente Django

1. **Criar um Ambiente Virtual**
   Crie um ambiente virtual para isolar as dependências do projeto:
   ```bash
   python -m venv env
   source env/bin/activate  # Para Windows use `env\Scripts\activate`
   ```

2. **Instalar Dependências Python**
   Instale as dependências necessárias listadas no arquivo `requirements.txt`:
   ```bash
   pip install -r requirements.txt
   ```

3. **Configurar Variáveis de Ambiente**
   Crie um arquivo `.env` na raiz do projeto Django e configure as variáveis de ambiente necessárias:
   ```env
   EMAIL_HOST=smtp.seuprovedor.com
   EMAIL_PORT=587
   EMAIL_HOST_USER=seu-email@seuprovedor.com
   EMAIL_HOST_PASSWORD=sua-senha
   EMAIL_USE_TLS=True
   ```

### Passo 3: Configuração do Ambiente Node.js

1. **Instalar Dependências Node.js**
   ```bash
   npm install
   ```

### Passo 4: Executar os Servidores

1. **Iniciar o Servidor Django**
   ```bash
   python manage.py runserver
   ```

2. **Iniciar o Servidor Node.js**
   ```bash
   npm run dev
   ```

## Uso

1. **Enviar Requisição para o Servidor Node.js**
   Use uma ferramenta como Postman  para enviar uma requisição HTTP ao servidor Node.js, que então encaminhará a solicitação ao servidor Django para disparar o e-mail.

2. **Verificar E-mails Enviados**
   Verifique a caixa de entrada do e-mail do destinatário especificado para confirmar o recebimento do e-mail enviado pelo servidor Django.

