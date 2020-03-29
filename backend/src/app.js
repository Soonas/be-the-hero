const express = require('express'); //importando funcionalidades do express
const routes = require('./routes');
const {errors} = require('celebrate');
const cors = require('cors');

const app = express(); //variavel que armazena a aplicação(app) >> [mais tarde essa app vai possuir as rotas]

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/*porem foi substituido pelo código acima e o de baixo foi passado para pasta server..^^
app.listen(3333); <<redireciona o app para a porta que eu quero*/

/*  Rota / Recurso
Métodos HTTP:
GET:  Buscar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
 */

 /*Tipos de Parametros
 Query: Parâmetros nomeados e enviados na rota após "?" (Filtros, páginação...)
 Route Params: Parâmetros utilizados para identificar recursos
 Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

 /* 
 SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server...
 NoSQL: MongoDB, CouchDB...(não relacionanais)
 */

 /* 
Driver: SELECT * FROM users
Queery Builder: table('users').select('*')where()
 */

