const express = require("express");
const router = require("./routes");
const exphbs = require("express-handlebars")
require("./database/index");

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: true}))

// Importar as rotas
const thoughtRoutes = require("./routes/thoughtsRoutes");
const usersRoutes = require("./routes/userRouters");

// Importa engine handlebars
app.engine('handlebars', handlebars.engine())

app.set('view engine', 'handlebars')
const path = require("path");
const UsersController = require("./controllers/UsersController");

// Utilização de arquivos estáticos
app.use(express.static(__dirname + '/public'))

handlebars.create({
    partialDir: path.join(__dirname, "views/partials")
});

app.use(thoughtRoutes)
app.use(usersRoutes);

app.listen(3333, console.log("Servidor está sendo executando na porta 3333"));