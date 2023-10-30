const express = require("express");

const UsersController = require("../controllers/UsersController")

const router = express.Router();

//Rota para cadastrar os usuários
router.post("/users", UsersController.createUser);

// Rota para encontrar todos os registros do usuários na aplicação
router.get("/users", UsersController.findAllUsers);

// Rota 
router.get("/users/:id", UsersController.findUser);

// Rota para adicionar um registro
router.put("/users/:id", UsersController.updateUser);

// Rota para deletar um registro
router.delete("/users/:id", UsersController.deleteUser); 

//rotas pensamentos
router.post("/thoughts", ThoughtsController.createThought);

router.post("/thoughts/:id", ThoughtsController.findThough);

module.exports = router;