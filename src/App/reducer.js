const INITIAL_STATE = {
  text: '',
  list: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TEXT_CHANGED':
      return { ...state, text: action.payload }
    default:
      return state
  }
}
