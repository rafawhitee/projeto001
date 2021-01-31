import axios from 'axios'
import RetornoCreateMeet from '../model/RetornoCreateMeet'
import RetornoGetUsersZoom from '../model/RetornoGetUsersZoom'

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

const createMeeting = (): Promise<RetornoCreateMeet | null> => {
    return new Promise(async (resolve, reject) => {
        try {
            const response: any = await axios.post(`${process.env.REACT_APP_API_URL}/zoom/meet`)
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

export { getZoomUsers, createMeeting }