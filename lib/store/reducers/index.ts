import { combineReducers } from "redux"
import settingsReducer from "./settings"
import userReducer from "./users"

export default combineReducers({
  settings: settingsReducer,
  user: userReducer
})