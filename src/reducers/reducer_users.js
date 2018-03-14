import { FETCH_USER } from '../actions/index'


//'all' represents the list of our users, and 'user' represents the active user
const INITIAL_STATE = { all: [], user: null }


export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USER:
      return { ...state, user: action.payload.data}

    default:
    return state
  }
}
