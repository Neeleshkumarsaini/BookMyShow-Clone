import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(page) {
    return apiClient.get('/popular?api_key=af887aca762fa26e9947081957eeadef&language=en-US&page='+page)
  }, 
  getEvent(id) {
     return apiClient.get('/'+id+'?api_key=af887aca762fa26e9947081957eeadef&language=en-US&page=1')
  }
}
