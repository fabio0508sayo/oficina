const express = require("express")
const cors = require("cors")
const port = 3000
const host = "localhost"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// rotas
const authController = require("./controller/auth.controller")
const clienteController = require("./controller/cliente.controller")
const veiculoController = require("./controller/veiculo.controller")
const agendamentoController = require("./controller/agendamento.controller")


// auth
app.post("/login", authController.login)

// cliente
app.post("/cliente", clienteController.cadastrar)
app.get("/cliente/:id", clienteController.consultarId)
app.get("/cliente", clienteController.consultarNome)
app.get("/clientes", clienteController.listar)
app.patch("/cliente/:id", clienteController.atualizar)
app.delete("/cliente/:id", clienteController.deletar)

// veiculo
app.post("/veiculo", veiculoController.cadastrar)
app.get("/veiculo/:id", veiculoController.consultarId)

// agendamento
app.post("/agendamento", agendamentoController.cadastrar)

// server

app.listen(port, host, () => {
	console.log(`Servidor rodando em http://${host}:${port}`)
})
