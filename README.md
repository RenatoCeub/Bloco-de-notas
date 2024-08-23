# Bloco de Notas

Bem-vindo ao projeto **Bloco de Notas**! Esta é uma aplicação simples desenvolvida com HTML, CSS e JavaScript, que permite criar e salvar notas em diversos formatos de arquivo. O objetivo é fornecer uma interface básica para edição e salvamento de textos.

## Funcionalidades

- **Área de Texto:** Digite e edite suas notas.
- **Nome do Arquivo:** Campo para inserir o nome desejado para o arquivo.
- **Escolha de Formato:** Selecione o formato de arquivo para salvar sua nota:
  - Arquivo de texto (.txt)
  - Arquivo XML (.xml)
  - Arquivo Word (.doc)
- **Botão de Salvar:** Salva e baixa o arquivo no formato escolhido.

## Tecnologias e APIs Utilizadas

O projeto utiliza as seguintes tecnologias e APIs nativas do navegador:

- **`Blob`**: Representa dados de arquivo, utilizado para criar o conteúdo do arquivo a ser baixado.
- **`URL.createObjectURL`**: Cria um URL temporário que representa o objeto `Blob`, permitindo a criação de um link de download.
- **`<a download>`**: O elemento HTML `<a>` com o atributo `download` é usado para iniciar o download do arquivo quando o usuário clica no botão "Salvar Arquivo".

## Requisitos

- Navegador moderno com suporte a HTML5 e JavaScript (como Google Chrome, Mozilla Firefox, Safari ou Microsoft Edge).

## Instalação

1. **Clone o Repositório:**

   Se estiver utilizando o Git, clone o repositório para sua máquina local:

   ```sh
   git clone https://github.com/JoaoPaulo23342/Bloco-de-notas
