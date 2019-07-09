const INITIAL_STATE = {
  text: '',
  list: []
}

export default (state = INITIAL_STATE, action) => {
  console.log(action.type)

  switch (action.type) {
    case 'TEXT_CHANGED':
      return { ...state, text: action.payload }
    case 'TEXT_SEARCHED':
      return { ...state, list: action.payload }
    default:
      return state
  }
}
