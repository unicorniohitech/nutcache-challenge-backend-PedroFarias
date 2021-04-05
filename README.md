# Node.js Employee Registration CRUD !

Instruções necessárias para rodar a aplicação:
Aplicação requer que você tenha o **docker** instalado.

 1. No terminal, execute: **docker run --name databasenutcache -e POSTGRES_PASSWORD=docker -p 2807:5432 -d postgres**
 2. Você pode usar uma interface visual de sua preferencia para acessar o banco de dados, entretanto recomendo a utilização do PostBird.
 3. Conecte-se ao banco de dados. Username: postgres / Senha: docker.
 4. Crie uma nova database chamada nutcacheemployeetable.
 5. Acesse a pasta do projeto via terminal.
 6. Execute o comando **npm i** ou **yarn** para baixar as dependências.
 7. Execute a migration através do comando: **npx sequelize db:migrate** ou **yarn sequelize db:migrate**
 8. Rode o projeto através do comando **npm run dev** ou **yarn dev**.
