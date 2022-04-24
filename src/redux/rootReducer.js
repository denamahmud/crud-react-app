import { combineReducers } from "redux";
import infoReducer from './reducers/reducer'


const rootReducer = combineReducers({
    infoUser : infoReducer
})

export default rootReducer