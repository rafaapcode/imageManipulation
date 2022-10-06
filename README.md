# Image Manipulation

## Sobre o Projeto

- O objetivo dessa aplicação é adicionar um moldura em várias fotos, e depois fazer o envio das fotos via email.
- Esse projeto surgiu a partir de um problema , que identifiquei quando trabalhava em um outro projeto que era relacionado ao meio ambiente e a excursão de escolas. Toda vez que recebíamos visita, tínhamos que tirar fotos das crianças (as que tinham autorização) e pra isso utilizavamos um raspberry que estava dentro de uma estrutra,  essa aplicação tirava as fotos aplicava a moldura e enviava todas as fotos via email, porém tínhamos 2 problemas :
  - Tínhamos que colocar o email a cada foto que tirávamos, e perdíamos muito tempo nisso.
  - A conexão de internet com a aplicação não era muito boa e muitas vezes tirávamos fotos pelo celular e fazíamos o envio sem a moldura do projeto.
- Quando percebi esses problemas, sabia que era resolver isso com programação , mais não sabia como. Agora 5 meses depois de ter saído do projeto, consegui fazer resolver esse problema, mesmo que meu projeto não seja usado pela empresa que trabalhei, ainda assim foi um projeto desafiador e com muito aprendizado e é muito bom a sua solução saindo do mundo das ideias e se concretizando no mundo real.

### Tecnologias Usadas

- EXPRESS
- EJS
- MULTER (Pacote - upload de Imagens)
- JIMP (Pacote - Manipulador de imagens)
- NODEMAILER (Pacote - Envio de Emails)

### Como usar

- Primeiro clone ou faça o download do repositório :

  ~~~
    git clone https://github.com/rafaapcode/imageManipulation.git
  ~~~

- Faça o download das dependências :
  ~~~bash
    npm install
  ~~~

- Antes de iniciar a aplicação, você precisa criar o arquivo **.env** e configurar o email que será responsável por enviar as fotos, este email deve ser do GMAIL, porém você pode enviar as fotos para qualquer tipo email :
  - Copie e cole as seguintes configurações :

    ~~~text

      HOST=smtp.gmail.com
      PORT=587
      USER=seuEmail
      PASS=suaSenhaAPP
    ~~~

- Para conseguir a senha APP do seu gmail, siga os seguintes passos :
  1. Entre em **GERENCIAR SUA CONTA DO GOOGLE**
  2. Entre na aba de seguranaça
  3. Ache o bloco **COMO FAZER LOGIN NO GOOGLE** e clique em Senhas de App
  4. Na escolha do APP selecione outro e coloque o nome NODEMAILER
  5. Clique em gerar e pegue essa senha e a coloque no campo PASS da configuração acima.

- Agora é só iniciar a aplicação, usando :

  ~~~bash
    npm start
  ~~~

- Coloque no seu navegador a seguinte URL : <http://localhost:5000/>

OBS: O JIMP que é usado para fazer a adição da moldura nas fotos, pode dar o seguinte erro durante o processo : **Error: invalid huffman sequence**.
Caso isso aconteça reinicie a aplicaçãoe e tente novamente.
Lembrando que o NODEMAILER também tem uma cota de emails que pode ser mandado por dia.

--------------------------------------------------------------------------------------------------------------

### O que aprendi ?
- Manipulação de imagens usando o JIMP
- Upload de Imagens usando o MULTER
- Envio de emails usando o NODEMAILER


### Arquitetura
- Utilizei a arquitetura MVC, por conta de ter familiaridade e para praticar cada vez mais o seus conceitos.
