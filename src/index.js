const express = require('express')
const app = express()
const PORT = 3000

const DBConnect = require('./database/connection')
DBConnect()

app.use(express.json())

const autenticacaoRoutes = require('./routes/autenticacao.routes')
app.use(autenticacaoRoutes)

const routes = require('./routes/routes')
app.use(routes)


app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})