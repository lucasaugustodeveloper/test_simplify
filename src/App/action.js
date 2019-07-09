import { search as axios } from '../services/api/flickr'

export const changeText = event => ({
  type: 'TEXT_CHANGED',
  payload: event.target.value
})

export const search = () => {
  console.log('call me')
  return (dispatch, getState) => {
    const text = getState().photo.text
    const search = text ? `?query=${text}` : ''
    const request = axios.get(search)
      .then(res => dispatch({ type: 'TEXT_SEARCHED', payload: res.data }))
  }
}
