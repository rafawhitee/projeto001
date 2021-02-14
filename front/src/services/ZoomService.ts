import axios from 'axios'
import RetornoCreateMeet from '../model/RetornoCreateMeet'
import RetornoGetUsersZoom from '../model/RetornoGetUsersZoom'
import RetornoMeet from '../model/RetornoMeet'

const getZoomUsers = (): Promise<RetornoGetUsersZoom[] | null> => {
    return new Promise(async (resolve, reject) => {
        try {
            const response: any = await axios.get(`${process.env.REACT_APP_API_URL}/zoom/users`)
            if (response && response.data) {
                const data: RetornoGetUsersZoom[] | null = response.data
                resolve(data)
            }
            resolve(null)
        } catch (err) {
            reject(err)
        }
    })
}

const getMeets = (): Promise<RetornoMeet | null> => {
    return new Promise(async (resolve, reject) => {
        try {
            const response: any = await axios.get(`${process.env.REACT_APP_API_URL}/zoom/meet`)
            if (response && response.data) {
                const data: RetornoMeet | null = response.data
                resolve(data)
            }
            resolve(null)
        } catch (err) {
            reject(err)
        }
    })
}

const deleteMeet = (id: any): Promise<RetornoMeet | null> => {
    return new Promise(async (resolve, reject) => {
        try {
            const response: any = await axios.delete(`${process.env.REACT_APP_API_URL}/zoom/meet/${id}`)
            if (response && response.data) {
                resolve(response.data)
            }
            resolve(null)
        } catch (err) {
            reject(err)
        }
    })
}

const createMeeting = (): Promise<RetornoCreateMeet | null> => {
    return new Promise(async (resolve, reject) => {
        try {
            const response: any = await axios.post(`https://testeapi.ngrok.io/zoom/meet`)
            if (response && response.data) {
                const meetCriado: RetornoCreateMeet | null = response.data
                resolve(meetCriado)
            }
            resolve(null)
        } catch (err) {
            reject(err)
        }
    })
}

export { getMeets, getZoomUsers, deleteMeet, createMeeting }