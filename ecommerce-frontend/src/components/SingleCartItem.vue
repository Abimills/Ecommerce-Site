<template>
  <div
    class="additional-container"
    :class="
      store.state.mode === 'light'
        ? 'additional-container light-additional-container'
        : 'additional-container'
    "
  >
    <div class="item-info-container">
      <img :src="product?.img" alt="" class="cart-image" />
      <div class="writen-all-container">
        <h3 class="item-name">{{ product?.name }}</h3>
        <p class="color">Color : {{ product?.colors[0] }}</p>
        <p class="item-size">
          Discount :
          {{
            ((product?.discount / product?.price) * 100).toFixed(0) + "% " || 0
          }}
        </p>
        <p class="stock">In Stock</p>
        <p
          class="stock delete-btn"
          @click="deleteProduct(product?._id)"
        >
          delete
        </p>
      </div>
    </div>
    <div class="total-quantity-all-container">
      <div class="each-price-container">
        <p>Each</p>
        <h5 class="item-price">${{ product?.price }}</h5>
      </div>
      <div class="quantity-container">
        <p>Quantity</p>

        <input type="number" placeholder="1" v-model="quantity" />
      </div>
      <div class="total-item-price">
        <p>Total</p>
        <p class="total-price-info">${{ product?.price * quantity }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

const props = defineProps(["product", 'deleteProduct']);
const store = useStore();
const quantity = ref(1);
watch(quantity, (newValue, oldValue) => {
  if (newValue === 0) {
    quantity.value = 1;
  } else {
    quantity.value = newValue;
  }
  store.dispatch("updateCartItemQuantity", {
    id: props.product?._id,
    quantity: newValue,
  });
});


onMounted(() => {
  const item = store.state.cart.find((item) => item.id === props.product?._id);
  if (item) {
    quantity.value = item.quantity;
  }
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
  font-family: "Caveat", cursive;
  font-family: "Croissant One", cursive;
  font-family: "Dosis", sans-serif;
  font-family: "Mooli", sans-serif;
  font-family: "Outfit", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
}
/* div {
  animation: fadeAn .3s ease-in-out both;
  animation-timeline: view();

} */
@keyframes fadeAn {
 0% {
    opacity: 0.5;
  }

  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
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
.total-quantity-all-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.cart-image {
  width: 150px;
  height: 180px;
  object-fit: contain;
  background-color: aliceblue;
  /* backdrop-filter: blur(5px); */
  margin: 0;
  border-radius: 5px;
}
.cart-items-payment-container {
  width: 95%;
  padding: 10px;
  display: flex;
  align-items: center;
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
  /* flex-direction: column; */
  margin-top: 1rem;
  /* margin-left:1rem; */
}
.writen-all-container {
  width: max-content;
  display: flex;
  align-items: flex-start;
  /* justify-content: center; */
  flex-direction: column;
  /* margin-top: 1rem; */
  margin-left: 1rem;
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
.light-additional-container .item-name,
.color,
.item-size,
.stock {
  color: #90cbc9;
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
.light-additional-container .each-price-container p {
  color: #90cbc9;
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
.light-additional-container .item-price {
  color: #90cbc9;
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
.light-additional-container .quantity-container p {
  color: #90cbc9;
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
  color: white;
}
.light-additional-container .quantity-container input {
  padding: 3px 10px;
  width: 55px;
  background: transparent;
  border: 1px solid #90cbc9;
  border-radius: 40px;
  outline: none;
  color: #90cbc9;
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
.light-additional-container .total-item-price p {
  color: #90cbc9;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
}
.total-item-price .total-price-info {
  font-weight: 600;
}
.payment-container {
  width: 40%;
  margin-top: 2rem;
  margin-bottom: 2rem;
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
  border: 1px solid rgb(155, 160, 165);
  outline: none;
  font-family: "Outfit", sans-serif;
  color: white;
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
  color: rgb(173, 170, 170);
  font-family: "Outfit", sans-serif;
  font-size: 0.9rem;
}
.discount-cost-container p {
  color: rgb(173, 170, 170);
  font-family: "Outfit", sans-serif;
  font-size: 0.9rem;
}
.tax-container p {
  color: rgb(173, 170, 170);
  font-family: "Outfit", sans-serif;
  font-size: 0.9rem;
}
.esteemed-price-container p {
  color: rgb(233, 230, 230);
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
.delete-btn {
  background: rgb(233, 186, 186);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.delete-btn:hover {
  background: rgb(235, 52, 52);
}
@media screen and (max-width: 530px) {
  .total-quantity-all-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 4rem;
    margin-bottom: 1rem;
  }
  .additional-container {
    width: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: space-evenly;
    flex-direction: column;
    margin-top: 1rem;
  }
}
</style>