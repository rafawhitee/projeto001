import { io } from "socket.io-client"

const webSocketUrl: string = `http://localhost:3333`

const getSocket = () => {
    const socketIo = io(webSocketUrl)
    if (socketIo.disconnected)
        socketIo.on('connection', () => { })

    return socketIo
}

export default getSocket