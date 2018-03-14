import axios from 'axios'

export const FETCH_USER = 'FETCH_USER'

const ROOT_URL = 'https://api.github.com'

export function fetchUser(user) {
  const request = axios.get(`${ROOT_URL}/users/${user}`)

  return {
    type: FETCH_USER,
    payload: request
  }
}
