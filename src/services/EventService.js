import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(page) {
    return apiClient.get('/movie/popular?api_key=af887aca762fa26e9947081957eeadef&language=en-US&page='+page)
  }, 
  getEvent(id) {
     return apiClient.get('/movie/'+id+'?api_key=af887aca762fa26e9947081957eeadef&language=en-US&page=1')
  },
  getSearch(val){
    return apiClient.get('/search/movie?api_key=af887aca762fa26e9947081957eeadef&query='+val)
  }
}
