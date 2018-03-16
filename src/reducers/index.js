import { combineReducers } from 'redux'
import UserReducer from './reducer_user'

//THis combines the Reducers
const rootReducer = combineReducers({
  user: UserReducer
});

export default rootReducer;
