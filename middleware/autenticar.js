const jwt = require("jsonwebtoken")
require("dotenv/config")

module.exports = async (req, res, next) => {
    const token = req.headers.authorization
    if (token == undefined)
        return res.send("Falha ao Localizar o Token")
    const valor = token.split(" ")
    const [ baerer, valToken ] = valor
    if (!/^Bearer$/i.test(baerer))
        return res.send("Erro de Formatação de Token")  
    await jwt.verify( valToken, process.env.CHAVE_SEGUR, (erro, data) =>{
        if (erro)
            return res.send("Erro de Token Expirado")
        req.Id = data.userId
        req.nome = data.userNome
    })
    return next()
}