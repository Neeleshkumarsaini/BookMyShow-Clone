import { createStore } from "vuex";
import EventService from '@/services/EventService.js';
import axios from 'axios'

export default createStore({
  state: {
    user: null,
    events: [],
    event: {},
    search: [],
    error: ''
  },
  mutations: {
    SET_EVENTS(state, payload){
      state.events = payload.results
    },
    SET_EVENT(state, payload){
      state.event = payload
    },
    SET_SEARCH_EVENTS(state, payload){
      state.search = payload
    },
    SET_ERROR(state, payload){
      state.error = payload
     
    },
    SET_USER_DATA (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
    },
    CLEAR_USER_DATA (state) {
      state.user = null
      localStorage.removeItem('user')
     
      axios.defaults.headers.common['Authorization'] = null
    },
   
  },
  actions: {
    fetchEvents({ commit }, page){
      return EventService.getEvents(page)
	  .then(response => {
      commit('SET_EVENTS', response.data)
	
	  })
	  .catch(error => {
		  throw(error)
	  })
    },
    fetchEvent({ commit, state }, id){
      const existingEvent = state.events.find(event => event.id === id)
      if(existingEvent){
        commit('SET_EVENT', existingEvent)
      }
      else{
        return EventService.getEvent(id)
	        .then(response => {
          commit('SET_EVENT', response.data)
	
	      })
	      .catch(error => {
		    throw(error)
	    })
      } 
    },
    fetchSearchEvents({ commit, state }, val){
      const existingEvent = state.events.find(event => event.title === val)
      if(existingEvent){
        commit('SET_EVENT', existingEvent)
      }
      else{
         if(val!='' && val!=' '){
        return EventService.getSearch(val)
        .then(response => {
          commit('SET_SEARCH_EVENTS', response.data.results)
        })
        .catch(error => {
          throw(error)
        })
      }
      else{
        commit('SET_SEARCH_EVENTS', [])
      }
      }
    },
   
    register ({ commit }, credentials) {
      return axios.post('https://da3c-103-157-240-78.ngrok.io/register', credentials)
        .then(({ data }) => {
          console.log('user data is: ', data)
           commit('SET_USER_DATA', data)
        })
    },
    login ({ commit }, credentials) {
      return axios.post('https://da3c-103-157-240-78.ngrok.io/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },
    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    }
  },
  modules: {},
});
