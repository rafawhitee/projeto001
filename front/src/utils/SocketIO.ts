import { io, Socket } from "socket.io-client"

const webSocketUrl: string = `http://localhost:3333`

const getSocket = (): Socket | undefined => {
    const socketIo = io(webSocketUrl)
    if (socketIo && socketIo.disconnected)
        socketIo.connect()

    return socketIo
}

export default getSocket