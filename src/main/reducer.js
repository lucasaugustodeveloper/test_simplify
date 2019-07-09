import { combineReducers } from 'redux'
import AppReducer from '../App/reducer'

const rootReducer = combineReducers({
  photo: AppReducer,
})

export default rootReducer
