import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FIREBASE_URL // 'https://api-656cf-default-rtdb.firebaseio.com/users.json' //
})

export default api
