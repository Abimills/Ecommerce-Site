<template>
  <nav class="nav-container">
    <ul class="list-nav-container">
      <li>
        <router-link to="/" class="links">Famclog</router-link>
      </li>
      <li>
        <router-link to="/" class="links">Home</router-link>
      </li>
      <li>
        <router-link to="/about" class="links">About</router-link>
      </li>
      <li>
        <router-link to="/products" class="links">Products</router-link>
      </li>
      <li>
        <router-link to="/login" class="links">Sign in</router-link>
      </li>
      <li>
        <router-link to="/wishlist" class="links wishlist"
          >Wishlist
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="heart-icon"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </router-link>
      </li>

      <li>
        <router-link to="/contact" class="links">Contacts</router-link>
      </li>
    </ul>
    <div class="cart-container">
      <router-link to="/cart" class="links">
        <font-awesome-icon
          icon="fa-solid fa-bag-shopping"
          class="shopping-bag"
        />
      </router-link>
      <p>{{ totalItems }}</p>
    </div>
  </nav>
</template>
 <script setup>
import { watch, ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const totalItems = ref(0);
watch(store.state, (newValue, oldValue) => {
  totalItems.value = newValue.cart?.length;
});
onMounted(() => {
  totalItems.value = store.state.cart.length;
});
</script>
<style scoped>
/* TODOS : DELETE COMMENTED OUT IN CSS */
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Croissant+One&family=Dosis:wght@200;300;400;500;600;700;800&family=Mooli&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
/* font-family: 'Caveat', cursive; */
/* font-family: 'Croissant One', cursive; */
/* font-family: 'Dosis', sans-serif; */
/* font-family: 'Mooli', sans-serif; */
/* font-family: 'Outfit', sans-serif; */
/* font-family: 'Roboto', sans-serif; */
.nav-container {
  background: #064240;
  /* background: #3d4935; */

  display: flex;
  width: 100%;
  height: 60px;
  justify-items: space-between;
  align-items: center;
}
.nav-container li {
  text-decoration: none;
  list-style: none;
}
.wishlist {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0rem;
}
.heart-icon {
  width: 20px;
  height: 15px;
  fill: wheat;
  color: wheat;
  margin-top: 0.2rem;
}
.list-nav-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  margin: 0 1rem;
  font-weight: 300;
  font-family: "Dosis", sans-serif;
}
.links {
  color: white;

  text-decoration: none;
  z-index: 3;
}
.cart-container {
  /* background-color: red; */
  width: 40px;
  height: 20px;
  position: relative;
  margin: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.shopping-bag {
  color: white;
  color: wheat;
  font-size: 1.5rem;
  margin-top: -0.9rem;
  cursor: pointer;
}
.cart-container p {
  position: absolute;
  background-color: black;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  color: white;
  top: -14px;
  left: 20px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Roboto", sans-serif;
}
</style>
 