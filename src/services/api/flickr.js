import axios from '../index'

const search = text => {
  return axios.get(`?query=${text}`)
    .then(res => res)
    .catch(error => console.log(error))
}

export {
  search,
}
