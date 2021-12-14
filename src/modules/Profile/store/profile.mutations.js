import Vue from "vue";

const mutations = {
  updateProfile(state, value) {
    state.profile = value;
  },
  updateStatus(state, value) {
    Vue.set(state.status, "Cargando", value);
  }
};

export default mutations;
