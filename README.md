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

## Uso

### Digite sua Nota

No campo de texto, insira o texto que deseja salvar.

### Nomeie seu Arquivo

No campo "Nome do Arquivo", insira o nome desejado para o arquivo.

### Escolha o Formato do Arquivo

Use o menu suspenso para selecionar o formato do arquivo desejado:

- **Arquivo de Texto (.txt):** Ideal para notas simples.
- **Arquivo XML (.xml):** Útil para dados estruturados.
- **Arquivo Word (.doc):** Compatível com Microsoft Word.

### Salve o Arquivo

Clique no botão "Salvar Arquivo". O navegador irá gerar o arquivo no formato selecionado e iniciar o download.

## Exemplos

- **Salvar uma nota como `anotacao.txt`:**
  - Insira "anotacao" no campo "Nome do Arquivo".
  - Selecione "arquivo de texto (.txt)" no menu de formato.
  - Clique em "Salvar Arquivo".

- **Salvar uma nota como `dados.xml`:**
  - Insira "dados" no campo "Nome do Arquivo".
  - Selecione "Arquivo XML (.xml)" no menu de formato.
  - Clique em "Salvar Arquivo".

- **Salvar uma nota como `relatorio.doc`:**
  - Insira "relatorio" no campo "Nome do Arquivo".
  - Selecione "Arquivo Word (.doc)" no menu de formato.
  - Clique em "Salvar Arquivo".

## Contribuição

Se deseja contribuir com melhorias ou correções, siga estes passos:

1. Faça um fork do repositório.
2. Crie uma nova branch para suas alterações (`git checkout -b minha-nova-feature`).
3. Realize as alterações e teste-as.
4. Envie um pull request com uma descrição clara das mudanças.

<a href="https://i.ibb.co/94pWtqc/Captura-de-tela-2024-08-23-142949.png"><img src="https://i.ibb.co/94pWtqc/Captura-de-tela-2024-08-23-142949.png" alt="https://i.ibb.co/94pWtqc/Captura-de-tela-2024-08-23-142949.png" border="0"></a>
