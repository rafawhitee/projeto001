const ZoomUserService = require('../../services/Zoom/Users')

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const usuarios = await ZoomUserService.getUsers()
            resolve(usuarios)
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = {
    getUsers
}