import { FETCH_USER } from '../actions/index'


export default function(state = [], action) {
  console.log('Action received', action)
  switch (action.type) {
    case FETCH_USER:
    //return state.concat([ action.payload.data ])
      return [ action.payload.data, ...state ]
    default:
    return state
  }
}
