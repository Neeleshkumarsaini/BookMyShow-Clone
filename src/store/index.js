import { createStore } from "vuex";
import EventService from '@/services/EventService.js'

export default createStore({
  state: {
    user: 'neelesh',
    events: [],
  },
  mutations: {
    SET_EVENTS(state, events){
      state.events = events.results
    }
  },
  actions: {
    fetchEvents({ commit }, page){
      EventService.getEvents(page)
	  .then(response => {
      commit('SET_EVENTS', response.data)
	  })
	  .catch(error => {
		  console.log(error)
	  })
    },
  },
  modules: {},
});
