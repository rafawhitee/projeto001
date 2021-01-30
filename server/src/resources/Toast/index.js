const toastFront = (io, req, res) => {
    if (req && req.body) {
        let mensagem = req.body.mensagem
        let tipo = req.body.tipo
        if (tipo && tipo.trim() !== '' && mensagem && mensagem.trim() !== '') {
            io.emit('toastFront', { tipo, mensagem })
            res.status(200).send()
        }
    }
    res.status(400).send()
}

module.exports = {
    toastFront
}