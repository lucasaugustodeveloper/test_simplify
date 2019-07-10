import { combineReducers } from 'redux'
import AppReducer from '../Header/reducer'

const rootReducer = combineReducers({
  photos: AppReducer,
})

export default rootReducer
