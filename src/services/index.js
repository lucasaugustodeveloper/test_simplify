import axios from 'axios'

const instance = axios.create({
  // baseURL: 'https://api.unsplash.com/search/photos',
  baseURL: 'http://www.mocky.io/v2/5d23eb882f000051002415e4',
  headers: {
    'Authorization': 'Client-ID ac0f01b804cf94e9188c2a3a9f8c82fb3fd89fe247c91643eea356146d95a61d'
  },
})

export default instance
