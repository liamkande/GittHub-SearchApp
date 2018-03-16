import axios from 'axios'

const ROOT_URL = 'https://api.github.com'

//created a constant with the value of type as it is the best way to avoid errors and typos
export const FETCH_USER = 'FETCH_USER'

export function fetchUser(user) {
  const url = `${ROOT_URL}/users/${user}`
    const request = axios.get(url)
  //this is a good way to test the request in the console >
  //console.log('Request:', request)

  return {
    type: FETCH_USER,
    payload: request
  }
}
