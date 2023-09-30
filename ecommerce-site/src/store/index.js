import { createStore } from 'vuex'

export default createStore({
  state: {

    cart : [{id:1, quantity: 1}]
  },
  getters: {
    cartItems : state => state.cart
  },
  mutations: {
    addToCart (state,item) {
    state.cart.push(item);
    },
    removeFromCart (state,id){
      state.cart.filter(item => item.id !== id);
    }
  },
  actions: {
  },
  modules: {
  }
})
