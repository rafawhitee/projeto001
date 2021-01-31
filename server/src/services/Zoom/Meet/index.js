const axios = require('axios')
const Config = require('../../../config/Zoom')

const createMeet = (idUser, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const url = `https://api.zoom.us/v2/users/${idUser}/meetings`
            const response = await axios.post(url, data, {
                headers: { 'Authorization': `Bearer ${Config.jwt}` }
            })
            if (response && response.data)
                resolve(response.data)

            resolve(null)
        } catch (err) {
            console.error(err)
            reject(err)
        }
    })
}

const getMeetById = (meetId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const url = `https://api.zoom.us/v2/meetings/${meetId}`
            const response = await axios.get(url, {
                headers: { 'Authorization': `Bearer ${Config.jwt}` }
            })
            if (response && response.data)
                resolve(response.data)

            resolve(null)
        } catch (err) {
            reject(err)
        }
    })
}

const deleteMeetById = (meetId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const url = `https://api.zoom.us/v2/meetings/${meetId}`
            const response = await axios.delete(url, {
                headers: { 'Authorization': `Bearer ${Config.jwt}` }
            })
            if (response && response.data)
                resolve(response.data)

            resolve(null)
        } catch (err) {
            reject(err)
        }
    })
}

const getMeets = (idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            const url = `https://api.zoom.us/v2/users/${idUser}/meetings`
            const response = await axios.get(url, {
                headers: { 'Authorization': `Bearer ${Config.jwt}` }
            })
            if (response && response.data)
                resolve(response.data)

            resolve(null)
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = {
    createMeet,
    getMeets,
    getMeetById,
    deleteMeetById
}