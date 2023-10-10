import { createStore } from 'vuex'
import { useToast } from 'vue-toastification'
import axios from 'axios'
const toast = useToast();
export default createStore({
  state: {

    cart :JSON.parse(localStorage.getItem("products")) || [],
    user :JSON.parse(localStorage.getItem("user")) || [],
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
    amount: JSON.parse(localStorage.getItem('amount')) || 0,
    mode: JSON.parse(localStorage.getItem('mode')) || 'light'

  },
  getters: {
    cartItems : state => state.cart
  },
  mutations: {
    addToCart (state,item) {
      const itemExist = state.cart.find(pro => pro.id === item.id)
      if(itemExist){
        toast.warning("Product is already in Cart", {
        timeout: 2000
      });
    }else{
      
      state.cart = [item,...state.cart];
      toast.success("Product added to Cart", {
        timeout: 2000
      });
      
        localStorage.setItem("products",JSON.stringify(state.cart))
      }
    },
    toggleMode (state) {
     
      if(state.mode === 'light'){
        state.mode = 'dark'
        localStorage.setItem("mode",JSON.stringify(state.mode))
      }
      else if(state.mode === 'dark'){
        
        state.mode = 'light';
        localStorage.setItem("mode",JSON.stringify(state.mode));
      }
      else{
        
        state.mode = 'light';
        localStorage.setItem("mode",JSON.stringify(state.mode));
      }
    },
    addToWishlist (state,id) {
      const itemExist =state.wishlist.find(wish => wish === id);
      if(itemExist){
        state.wishlist = state.wishlist.filter(wish => wish !== id);
         toast.success("Product removed from  Wishlist", {
        timeout: 2000
      });
        localStorage.setItem("wishlist",JSON.stringify(state.wishlist))
      }else{
        state.wishlist = [...state.wishlist,id]
         toast.success("Product added to Wishlist", {
        timeout: 2000
      });
        localStorage.setItem("wishlist",JSON.stringify(state.wishlist))
      }
      
    },
    removeFromCart (state,id){
      const itemExist = state.cart.find(pro => pro.id ===id)
      if(!itemExist ){
         toast.warning("Product does not exist in cart", {
        timeout: 2000
      });
      }else{

        state.cart = state.cart.filter(item => item.id !== id);
        console.log(state.cart)
           localStorage.setItem("products",JSON.stringify(state.cart))
         toast.success("Product removed from Cart", {
        timeout: 2000
      });
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
      state.cart = []
      localStorage.setItem("amount",JSON.stringify(state.amount))
      localStorage.setItem("cart",JSON.stringify(state.cart))
        toast.success("Payment done successfull ", {
        timeout: 2000
      });
        toast.info("Hang tight for the delivery of your product, Thank you!! ", {
        timeout: 4000
      });
      
    },
    signedIn (state,{data}) {
      
      state.user = data
       toast.success("Successfully Signed In", {
        timeout: 2000
      });
      localStorage.setItem("user",JSON.stringify(state.user))
      
    },
    signOut (state) {
      
      state.user = []
       toast.success("Successfully Signed Out", {
        timeout: 2000
      });
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
