// import { search as axios } from '../services/api/flickr'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  headers: {
    'Authorization': 'Client-ID ac0f01b804cf94e9188c2a3a9f8c82fb3fd89fe247c91643eea356146d95a61d'
  },
})

export const changeText = event => ({
  type: 'TEXT_CHANGED',
  payload: event.target.value
})

export const search = text => {
  return (dispatch, getState) => {
    const textState = getState().photos.text
    const search = textState ? `?query=${textState}` : text
    const request = instance.get(search)
      .then(res => dispatch({ type: 'TODO_SEARCHED', payload: res }))
  }
}
