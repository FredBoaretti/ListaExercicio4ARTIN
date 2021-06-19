const express = require("express")
var app = express()
const cors = require('cors')

app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {
    res.send("Frederico Boaretti - RA: 010618017")
})

require("./controllers/login")(app)

const middleware = require('./middleware/autenticar')
app.use(middleware)

// require("./controllers/usuarios")(app)
require("./controllers/produtos")(app)


app.use((req, res) => {
    res.send("Erro 404")
})

app.listen(process.env.PORT || 80, () => {
    console.log("Servidor online")
})

