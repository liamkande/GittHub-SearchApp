import axios from 'axios'

export const FETCH_USER = 'FETCH_USER'
export const FETCH_FOLLOWERS = 'FETCH_FOLLOWERS'

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

export function fetchFollowers(user) {
  const url = `${ROOT_URL}/users/${user}/followers`
    const request = axios.get(url)

  console.log('Request:', request)

  return {
    type: FETCH_FOLLOWERS,
    payload: request
  }
}
