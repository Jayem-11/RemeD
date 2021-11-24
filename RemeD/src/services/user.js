import axios from 'axios'
import { SEND_APP_ID, SENDBIRD_TOKEN } from '../utils/sendbird_const'

const baseUrl = 'http://localhost:3007/api/users'

// method to perform authentication with email and password

const signin = async (user) => {
    try {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
        let resp = await axios.post(`${baseUrl}/signin`, user, config)
        return await resp.data;
    } catch (err) {
        console.log(err)
    }
}


const signup = async (user) => {
    try {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
        let resp = await axios.post(`${baseUrl}/signup`, user, config)
        return await resp.data;
    } catch (err) {
        console.log(err)
    }
}

const profile = async (userId) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        let resp = await axios.get(`${baseUrl}/profile/${userId}`, config)
        return await resp.data;
    } catch (err) {
        console.log(err);
    }
}

const authenticateGoogle = async (user) => {
    try {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }

        let resp = await axios.post(`${baseUrl}/auth/google`, user, config)
        return await resp.data;
    } catch (err) {
        console.log(err);
    }
}

const registerSendBirdUser = async user => {
    try {
        const config = {
            headers: {
                "Api-Token": `${SENDBIRD_TOKEN}`,
                "Content-Type": "application/json"
            }
        }

        let resp = await axios.post(`https://api-${SEND_APP_ID}.sendbird.com/v3/users`, user, config);
        return await resp.data;
    } catch (err) {
        console.log(err)
    }
}

const fetchSendbirdUsers = async () => {
    try{
        const config = {
            headers: {
                "Api-Token": `${SENDBIRD_TOKEN}`,
                "Content-Type": "application/json"
            }
        }
        let resp = await axios.get(`https://api-${SEND_APP_ID}.sendbird.com/v3/users`, config);
        return await resp.data;
    } catch (err) {
        console.log(err)
    }
}

export { signup, profile, authenticateGoogle, signin, registerSendBirdUser, fetchSendbirdUsers };