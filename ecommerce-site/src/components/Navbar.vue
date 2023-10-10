<template>
  <nav
    :class="
      store.state.mode === 'light' ? 'nav-container light-nav' : 'nav-container'
    "
  >
    <ul :class="show ? 'list-nav-container' : 'list-nav-container hide-list'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="close"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        className="w-6 h-6"
        @click="toggleShow"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <li>
        <router-link to="/" class="links" @click="toggleShow"
          >Famclog</router-link
        >
      </li>
      <li>
        <router-link to="/" class="links" @click="toggleShow">Home</router-link>
      </li>
      <li>
        <router-link to="/about" class="links" @click="toggleShow"
          >About</router-link
        >
      </li>
      <li>
        <router-link to="/products" class="links" @click="toggleShow"
          >Products</router-link
        >
      </li>
      <li>
        <router-link to="/login" class="links" @click="toggleShow"
          >Sign in</router-link
        >
      </li>

      <li>
        <router-link to="/wishlist" class="links wishlist" @click="toggleShow"
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
        <p class="links wishlist" @click="toggleMode">
          {{ store.state.mode === "dark" ? "Dark" : "Light" }}
          <svg
            v-if="store.state.mode === 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="dark-mode-icon"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="dark-mode-icon"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>
        </p>
      </li>

      <li>
        <router-link to="/contact" class="links" @click="toggleShow"
          >Contacts</router-link
        >
      </li>
    </ul>
    <div class="mother-cart-container">
      <div class="cart-container">
        <router-link to="/cart" class="links">
          <font-awesome-icon
            icon="fa-solid fa-bag-shopping"
            class="shopping-bag"
          />
        </router-link>
        <p class="total-all-items-cart">{{ totalItems }}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="hamburger"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        className="w-6 h-6"
        @click="toggleShow"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  </nav>
</template>
 <script setup>
import { watch, ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const totalItems = ref(0);
const show = ref(false);
watch(store.state, (newValue, oldValue) => {
  totalItems.value = newValue.cart?.length;
});
const toggleShow = () => {
  show.value = !show.value;
};
const toggleMode = () => {
  store.commit("toggleMode");
};
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
  width: 100%;
  position: relative;

  display: flex;
  width: 100%;
  height: 60px;
  justify-items: space-between;
  align-items: center;

}
.light-nav {
  background: white;
  color: black;
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
.dark-mode-icon {
  width: 20px;
  height: 20px;
  fill: black;
  color: #709290;
  fill: #78c0bb;
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
  z-index: 10;
  
}
li{
  z-index: 10;

}
.light-nav .links {
  color: rgb(172, 156, 127);
  /* color:#064240; */
  font-size: 1.1rem;
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
.total-all-items-cart {
  position: absolute;
  background-color: black;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  color: white;
  top: -14px;
  left: 20px;
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Roboto", sans-serif;
}
.close {
  display: none;
}
.hamburger {
  display: none;
}
.wishlist {
  cursor: pointer;
}
@media screen and (max-width: 800px) {
  .nav-container {
    position: relative;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: row-reverse;
  }
  .list-nav-container {
    flex-direction: column;
    background: white;
    position: fixed;
    top: 0px;
    right: -15px;
    width: 100%;
    height: 100vh;
    transition: all 0.6s ease-in-out;
    padding: 28px 10px;
  }
  .links {
    color: #064240;
  }
  .close {
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 5px;
    right: 10px;
    color: #064240;
    /* background: #064240; */
  }

  .hide-list {
    width: 0;
    padding: 0;
    transition: all 0.3s ease-in-out;
  }
  .hide-list .links {
    font-size: 0;
  }
  .hide-list .close {
    width: 0;
    height: 0;
  }
  .hide-list .heart-icon {
    width: 0;
    height: 0;
  }

  .mother-cart-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background: red; */
    height: 60px;
    padding: 10px;
  }
  .cart-container {
    margin-top: 0.3rem;
    margin-left: -0.1rem;
  }
  .hamburger {
    width: 30px;
    height: 30px;
    display: block;
    /* margin-left:2rem; */
    margin-top: 0.4rem;
    color: white;
  }
}
</style>
 