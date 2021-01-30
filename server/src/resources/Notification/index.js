const notificarFront = (io, req, res) => {
    if (req && req.body) {
        let mensagem = req.body.mensagem
        if (mensagem && mensagem.trim() !== '') {
            io.emit('notificarFront', mensagem)
            res.status(200).send()
        }
    }
    res.status(400).send()
}

module.exports = {
    notificarFront
}