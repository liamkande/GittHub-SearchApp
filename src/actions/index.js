import axios from 'axios'

export const FETCH_USER = 'FETCH_USER'

const ROOT_URL = 'https://api.github.com'

export function fetchUser(user) {
  const url = `${ROOT_URL}/users/${user}`
    const request = axios.get(url)
  //console.log('Request:', request)

  return {
    type: FETCH_USER,
    payload: request
  }
}
