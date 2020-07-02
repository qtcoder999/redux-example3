import { combineReducers } from "redux"
import countReducer from "../containers/reducers"

const rootReducer = combineReducers({

    count: countReducer

})

export default rootReducer