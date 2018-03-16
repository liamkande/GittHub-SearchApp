import { FETCH_USER } from '../actions/index'

// state must always return null if nothing is assign to it.
// In this case state is an array so we're good!
export default function(state = [],action) {
  console.log('Action received', action)
  switch (action.type) {
    case FETCH_USER:
      //return state.concat([action.payload.data])
      //The below return is the same as the above concat method in the new ES6 Syntax howerver
      //we returning it in a different set of order witch could be changed by switching the orders
      return [action.payload.data, ...state]
    default:
    return state
  }
}
