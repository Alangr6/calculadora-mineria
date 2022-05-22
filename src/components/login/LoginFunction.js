import axios from "axios";

const baseUrl = 'http://localhost:8000/api/login_check'

const loginFunction = async credentials => {
    const {data} = await axios.post(baseUrl, credentials, {
        headers: {
            Accept: 'application/json',
        }
    })
    return data
} 

export default {loginFunction}