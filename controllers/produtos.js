const express = require("express")
const Produto = require("../models/produtos")

const route = express.Router()

route.get("/lista", async (req, res) => {
    var lista = await Produto.find()
    return res.send(lista)
})

route.post("/criar", async (req, res) => {

    await Produto.create(req.body, (err, ret) => {
        if (err)
            return res.send(err.message)

        return res.send(ret)
    })
})

module.exports = app => app.use("/produtos", route)