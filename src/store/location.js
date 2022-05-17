export const location = {
  state: () => ({
    locations: [],
  }),

  mutations: {
    addLocation(state, location) {
      if (state.locations.indexOf(location) === -1) {
        state.locations.push(location);
        alert("Location Added");
      } else {
        alert("Location Already Exists");
      }
    },
  },

  actions: {
    addLocation({ commit }, location) {
      commit("addLocation", location);
    },
  },

  getters: {
    locations: (state) => state.locations,
  },
};
