import axios from 'axios'

/**
 * Examples
 */
const BASE_URL = 'http://localhost:8080/api/'

export const demoService = {
  getDemo
}

export function getDemo() {
  const url = BASE_URL + 'demo'
  return axios.get(url)
}