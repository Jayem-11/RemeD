import axios from 'axios'

const baseUrl = 'http://localhost:3007/api/users'

// method to perform authentication with email and password

const signin = async (user) => {
    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    let resp = await axios.post(`${baseUrl}/signin`, user, config)
    console.log(resp)
    return resp.data;
    // try {
    //     const config = {
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //         }
    //     }
    //     let resp = await axios.post(`${baseUrl}/signin`, user, config)
    //     console.log(resp)
    //     return resp.data;
    // } catch (err) {
    //     console.log(err)
    // }
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

export { signup, profile, authenticateGoogle, signin };