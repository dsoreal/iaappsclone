import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'


export default createStore({
  state: {
    displayName: "",
  },
  mutations: {
    // decreaseCounter(state, randomNum) {
    //   state.counter -= randomNum;
    // },
    // increaseCounter(state, randomNum) {
    //   state.counter += randomNum;
    // },
  },
  actions: {
//    increaseCounter() {
//      console.log("increaseCounter(action)");
//      axios(
//        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
//      ).then((response) => {
//        this.commit("increaseCounter", response.data);
//      });
//    },
//    decreaseCounter() {
//      console.log("increaseCounter(action)");
//      axios(
//        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
// /      ).then((response) => {
//        this.commit("decreaseCounter", response.data);
//      });
//    },
  },
  modules: {},
  plugins: [
    
  ]
});
