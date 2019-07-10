// import { search as axios } from '../services/api/flickr'
import axios from 'axios'

const url = 'http://www.mocky.io/v2/5d23eb882f000051002415e4'

export const changeText = event => ({
  type: 'TEXT_CHANGED',
  payload: event.target.value
})

export const search = () => {
  const request = axios.get(url)

    return {
      type: 'TEXT_SEARCHED',
      payload: request,
    }
  // return (dispatch, getState) => {
  //   const text = getState().photos.text
  //   const search = text ? `?query=${text}` : ''
  //   const request = axios.get(search)
  //     .then(res => dispatch({ type: 'TEXT_SEARCHED', payload: res.data }))
  // }
}
