import { createStore } from 'vuex'

export default createStore({
  state: {

    cart :JSON.parse(localStorage.getItem("products")) || []
  },
  getters: {
    cartItems : state => state.cart
  },
  mutations: {
    addToCart (state,item) {
      const itemExist = state.cart.find(pro => pro.id === item.id)
      if(itemExist){
        alert("item already exist")
      }else{
        
        state.cart = [item,...state.cart];
        localStorage.setItem("products",JSON.stringify(state.cart))
      }
    },
    removeFromCart (state,id){
      const itemExist = state.cart.find(pro => pro.id ===id)
      if(!itemExist ){
        alert("item does not exist")
      }else{

        state.cart = state.cart.filter(item => item.id !== id);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
