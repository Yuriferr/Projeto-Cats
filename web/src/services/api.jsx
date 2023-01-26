import axios from 'axios'

const api = axios.create({
    baseURL: "https://api-cats.vercel.app"
})

export default api;