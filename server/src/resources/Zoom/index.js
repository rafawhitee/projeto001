const ZoomUserService = require('../../services/Zoom/Users')
const ZoomMeetService = require('../../services/Zoom/Meet')
const ConfigZoom = require('../../config/Zoom')

const getUsers = (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            const usuarios = await ZoomUserService.getUsers()
            resolve(res.status(200).send(usuarios))
        } catch (err) {
            console.error(err)
            reject(res.status(400).send())
        }
    })
}

const createMeet = (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            const meetCriado = await ZoomMeetService.createMeet(ConfigZoom.idAdminZoom, {})
            if (meetCriado)
                resolve(res.status(201).send(meetCriado))

            reject('Ocorreu um erro inesperado')
        } catch (err) {
            console.error(err)
            reject(res.status(500).send())
        }
    })
}
const getMeets = (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            const meets = await ZoomMeetService.getMeets(ConfigZoom.idAdminZoom)
            resolve(res.status(200).send(meets))
        } catch (err) {
            console.error(err)
            reject(res.status(500).send())
        }
    })
}

const getMeetById = (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            const idMeet = req.params.idMeet
            const meet = await ZoomMeetService.getMeetById(idMeet)
            if (meet)
                resolve(res.status(200).send(meet))

            reject(res.status(404).send())
        } catch (err) {
            console.error(err)
            reject(res.status(500).send())
        }
    })
}

const deleteMeetById = (req, res) => {
    return new Promise(async (resolve, reject) => {
        try {
            const excluido = await ZoomMeetService.deleteMeetById(ConfigZoom.idAdminZoom)
            resolve(res.status(200).send(excluido))
        } catch (err) {
            console.error(err)
            reject(res.status(500).send())
        }
    })
}

module.exports = {
    getUsers,
    getMeets,
    getMeetById,
    createMeet,
    deleteMeetById
}