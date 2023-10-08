<template>
  <div class="cart-container">
    <h1 class="cart-header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        className="w-6 h-6"
        class="cart-icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
      My Cart
    </h1>
    <div class="cart-items-payment-container">
      <div class="cart-items-container">
        <SingleCartItem
          v-for="product in cartItems?.cart"
          :key="product?._id"
          :product="product"
        />

        <div class="real-price-items">
          <p>{{ totalItems }} items</p>
          <p>${{ totalPrice }}</p>
        </div>
      </div>
      <div class="payment-container">
        <h4 class="enter-code-header">ENTER PROMO CODE</h4>
        <div class="promo-container">
          <input type="text" placeholder="Promo Code" />
          <button>Submit</button>
        </div>
        <div class="shipping-cost-container">
          <p class="shipping-cost">Shipping cost</p>
          <p>TBD</p>
        </div>
        <div class="discount-cost-container">
          <p class="discount-cost">Discount</p>
          <p>-${{ discount }}</p>
        </div>
        <div class="tax-container">
          <p class="shipping-cost">Tax</p>
          <p>TBD</p>
        </div>
        <div class="esteemed-price-container">
          <p class="esteemed-price-cost">Estimated Total</p>
          <p>${{ totalPrice }}</p>
        </div>
        <div class="esteemed-price-container">
          <p class="esteemed-price-cost">Discount Applied</p>
          <p>${{ totalPrice - discount }}</p>
        </div>
        <p class="free-shipping">
          {{
            totalPrice < 20
              ? `You are $${20 - totalPrice} away from having a free shiping`
              : "Your Products will be delivered free if greater than $20"
          }}
        </p>
        <button class="checkout" @click="toCheckout(totalPrice - discount)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="lock"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <span> Checkout </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import SingleCartItem from "./SingleCartItem.vue";
import { computed, onMounted, reactive, watch, ref } from "vue";
import { useStore } from "vuex";
import router from "@/router";
const store = useStore();
const cartItems = reactive({ cart: [] });
const totalItems = ref(0);
const totalPrice = ref(0);
const discount = ref(0);
const priceAfterDiscount = ref(totalPrice - discount || 0);
const fetchProducts = async () => {
  const res = await Promise.all(
    store.state.cart?.map((item) =>
      axios.get(`http://localhost:4040/products/${item?.id}`)
    )
  );
  const cartProducts = res.map((product) => {
    const matchingCartItem = store.state.cart.find(
      (item) => item.id === product?.data?.product?._id
    );
    if (matchingCartItem) {
      return { ...product?.data?.product, quantity: matchingCartItem.quantity };
    } else {
      return product?.data?.product;
    }
  });
  cartItems.cart = cartProducts;
};
watch(cartItems, (newValue, oldValue) => {
  totalPrice.value = newValue.cart?.reduce((total, item) => {
    return total + item?.price * item.quantity;
  }, 0);
  discount.value = newValue.cart?.reduce((total, item) => {
    return total + item.discount * item.quantity;
  }, 0);
});
const toCheckout = (amount) => {
 store.commit('addAmount',amount)
 router.push('/payment')
}
watch(store.state.cart, (newValue, oldValue) => {
  const cartProducts = cartItems.cart.map((product) => {
    const matchingCartItem = newValue.find((item) => item.id === product?._id);
    if (matchingCartItem) {
      return { ...product, quantity: matchingCartItem.quantity };
    } else {
      return product?.data?.product;
    }
  });

  cartItems.cart = cartProducts;
  totalPrice.value = cartProducts?.reduce((total, item) => {
    return total + item?.price * item.quantity;
  }, 0);
  discount.value = cartProducts?.reduce((total, item) => {
    if (!item.discount) {
      return;
    } else if (item.discount) {
      return total + item?.discount * item.quantity;
    }
  }, 0);
});
onMounted(() => {});
fetchProducts();
onMounted(() => {
  totalItems.value = store.state.cart.length;
  // totalPrice.value = store.state.cart.reduce((total,item) => {
  //   return total + item
  // })
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Croissant+One&family=Dosis:wght@200;300;400;500;600;700;800&family=Mooli&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
/* font-family: 'Caveat', cursive; */
/* font-family: 'Croissant One', cursive; */
/* font-family: 'Dosis', sans-serif; */
/* font-family: 'Mooli', sans-serif; */
/* font-family: 'Outfit', sans-serif; */
/* font-family: 'Roboto', sans-serif; */
.cart-container {
  width: 100%;
  color: #90cbc9;
  font-family: "Outfit", sans-serif;
  display: flex;
  flex-direction: column;
 
  gap: 2rem;
  margin-bottom: 2rem;
}
.lock {
  width: 20px;
  height: 20px;
}
.cart-icon {
  width: 40px;
  height: 50px;
}
.cart-header {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  color: white;
  /* margin: 2rem; */
  margin: 2em;
  font-weight: 300;
}
.cart-image {
  width: 150px;
  height: 180px;
  object-fit: contain;
  background-color: rgba(223, 233, 243, 0.1);
  backdrop-filter: blur(5px);
  margin: 1rem 0;
  border-radius: 5px;
}
.cart-items-payment-container {
  width: 95%;
  padding: 10px;
  display: flex;
  /* align-items: center; */
  justify-content: center;

}
.cart-items-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  /* border-top: 1px solid #90cbc9; ; */

  margin: -5rem 1.2rem 0;
}
.real-price-items {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.4rem;
}
.real-price-items p {
  font-family: "Dosis", sans-serif;
  font-weight: 700;
}
.additional-container {
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: space-evenly;
  margin-top: 1rem;
  /* border-top: 1px solid #90cbc9; ; */
  border-bottom: 1px solid #90cbc9;
  /* margin: -3rem 0rem 0; */
}
.item-info-container {
  display: flex;
  align-items: flex-start;
  /* justify-content: center; */
  flex-direction: column;
  margin-top: 1rem;
}
.item-name,
.color,
.item-size,
.stock {
  color: white;
  text-transform: capitalize;
  font-family: "Roboto", sans-serif;
  font-family: "Dosis", sans-serif;
  font-weight: 300;
  margin-bottom: 0.4rem;
}
.stock {
  color: white;
  padding: 3px 10px;
  background: #90cbc9;
}
.each-price-container {
  display: flex;
  align-items: flex-start;
  /* justify-content: center; */
  flex-direction: column;
  margin-top: 1.2rem;
}
.each-price-container p {
  color: white;
  font-family: "Dosis", sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
}
.item-price {
  color: white;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  /* font-size: 1.1rem; */
  margin-bottom: 0.4rem;
}
.quantity-container {
  margin-top: 1.2rem;
}
.quantity-container p {
  color: white;
  font-family: "Dosis", sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
}
.quantity-container input {
  padding: 3px 10px;
  width: 55px;
  background: transparent;
  border: 1px solid white;
  border-radius: 40px;
  outline: none;
}

.quantity-container input::placeholder {
  color: white;
  text-align: center;
  font-family: "Roboto", sans-serif;
}
.total-item-price {
  margin-top: 1.2rem;
}
.total-item-price p {
  color: white;
  font-family: "Dosis", sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
}
.total-item-price .total-price-info {
  font-weight: 600;
}
.payment-container {
  width: 40%;
  margin-top: -2rem;
  margin-bottom: 0rem;
 
}
.enter-code-header {
  font-family: "Mooli", sans-serif;
  font-family: "Outfit", sans-serif;
  /* font-family: 'Roboto', sans-serif; */
  font-weight: 300;
  color: rgb(218, 224, 230);
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  font-size: 0.7rem;
}
.promo-container {
  width: 100%;
  margin-bottom: 1rem;
}
.promo-container input {
  padding: 10px;
  width: 80%;
  background: transparent;
  border: 1px solid #90cbc9;
  color:#90cbc9;
  outline: none;
  font-family: "Outfit", sans-serif;
  color: white;
}
.promo-container input::placeholder {
  color:#90cbc9;
}
.promo-container button {
  padding: 10px;
  border: 1px solid #90cbc9;
  font-family: "Outfit", sans-serif;
  outline: none;
  background: #90cbc9;
}
.discount-cost-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.tax-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.esteemed-price-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.shipping-cost-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.shipping-cost-container p {
  color:#90cbc9;
  font-family: "Outfit", sans-serif;
  font-size: 0.9rem;
}
.discount-cost-container p {
  color:#90cbc9;
  font-family: "Outfit", sans-serif;
  font-size: 0.9rem;
}
.tax-container p {
  color:#90cbc9;
  font-family: "Outfit", sans-serif;
  font-size: 0.9rem;
}
.esteemed-price-container p {
  color:#90cbc9;
  font-family: "Outfit", sans-serif;
  font-size: 1rem;
}
.free-shipping {
  color: white;
  font-family: "Outfit", sans-serif;
  font-size: 0.7rem;
  text-align: center;
  margin-bottom: 4rem;
}
.checkout {
  width: 100%;
  padding: 10px;
  background: aliceblue;
  border: 1px solid aliceblue;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkout span {
  margin-top: 0.3rem;
}
@media screen and (max-width:980px){
  .cart-items-payment-container {
    width: 100%;
    padding: 10px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;

}
.payment-container {
  width: 90%;
  margin-top: 2rem;
 
}

}
    @media screen and (max-width:480px){
      .promo-container {
  width: 100%;
  margin-bottom: 1rem;
}
.promo-container input {
 
  width: 70%;
}
.promo-container input::placeholder {
  color:#90cbc9;
}
.promo-container button {
 
  width: 30%;
}
.payment-container {
  font-size:.5rem;

}
    }
</style>