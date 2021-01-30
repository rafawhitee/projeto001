const axios = require('axios')
const Config = require('../../../config/Zoom')

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const url = 'https://api.zoom.us/v2/users'
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
    getUsers
}