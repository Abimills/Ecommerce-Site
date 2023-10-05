import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {

    cart :JSON.parse(localStorage.getItem("products")) || [],
    user :JSON.parse(localStorage.getItem("user")) || [],
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
    amount: JSON.parse(localStorage.getItem('amount')) || 0

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
    addToWishlist (state,id) {
      const itemExist =state.wishlist.find(wish => wish === id);
      if(itemExist){
        state.wishlist = state.wishlist.filter(wish => wish !== id);
        localStorage.setItem("wishlist",JSON.stringify(state.wishlist))
      }else{
        state.wishlist = [...state.wishlist,id]
        localStorage.setItem("wishlist",JSON.stringify(state.wishlist))
      }
      
    },
    removeFromCart (state,id){
      const itemExist = state.cart.find(pro => pro.id ===id)
      if(!itemExist ){
        alert("item does not exist")
      }else{

        state.cart = state.cart.filter(item => item.id !== id);
      }
    },
    updateCartItemQuantity (state,{id,quantity}) {
      const item = state.cart.find(item => item.id ===id);
      if(item){
        item.quantity = quantity
      }
      else{
        console.log("item does not exist")
      }
      
    },
    addAmount (state,amount) {
      
      state.amount = amount
      localStorage.setItem("amount",JSON.stringify(state.amount))
      
    },
    payed (state) {
      
      state.amount = 0
      localStorage.setItem("amount",JSON.stringify(state.amount))
      
    },
    signedIn (state,{data}) {
      
      state.user = data
      localStorage.setItem("user",JSON.stringify(state.user))
      
    },
    signOut (state) {
      
      state.user = []
      localStorage.setItem("user",JSON.stringify(state.user))
      
    }
  },
  actions: {
    updateCartItemQuantity({commit,state}, {id,quantity}) {
      commit('updateCartItemQuantity',{id ,quantity});
      localStorage.setItem('products', JSON.stringify(state.cart))
    },

//     async fetchData ({commit,state}) {
//       const res = await Promise.all(
//     store.state.cart?.map((item) =>
//       axios.get(`http://localhost:4040/products/${item?.id}`)
//     )
//   );
//   const cartProducts = res.map((product) => {
//     const matchingCartItem = store.state.cart.find(
//       (item) => item.id === product?.data?.product?._id
//     );
//     if (matchingCartItem) {
//       return { ...product?.data?.product, quantity: matchingCartItem.quantity };
//     } else {
//       return product?.data?.product;
//     }

//   });

//  } 
 },
  modules: {
  }
})
