import { createStore } from "vuex";
import EventService from '@/services/EventService.js'

export default createStore({
  state: {
    user: 'Neelesh',
    events: [],
    event: {},
    search: []
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
    }
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
        EventService.getSearch(val)
        .then(response => {
          commit('SET_SEARCH_EVENTS', response.data.results)
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  },
  modules: {},
});
