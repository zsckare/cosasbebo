import actions from "./auth.actions";
import mutations from "./auth.mutations";
import getters from "./auth.getters";
import state from "./auth.state";

const namespaced = true;

const auth = {
  namespaced,
  getters,
  mutations,
  actions,
  state
};

export default auth;
