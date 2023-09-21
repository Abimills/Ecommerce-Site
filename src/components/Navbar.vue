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
        <router-link to="/about" class="links">Items</router-link>
      </li>
      <li>
        <router-link to="/about" class="links">Contacts</router-link>
      </li>
    </ul>
    <div class="cart-container">
      <router-link to="/cart" class="links">
        <font-awesome-icon
          icon="fa-solid fa-bag-shopping"
          class="shopping-bag"
        />
      </router-link>
      <p>3</p>
    </div>
  </nav>
</template>
 <script>
export default {
  name: "NavbarVue",
  data() {
    return {};
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Croissant+One&family=Dosis:wght@200;300;400;500;600;700;800&family=Mooli&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
/* font-family: 'Caveat', cursive; */
/* font-family: 'Croissant One', cursive; */
/* font-family: 'Dosis', sans-serif; */
/* font-family: 'Mooli', sans-serif; */
/* font-family: 'Outfit', sans-serif; */
/* font-family: 'Roboto', sans-serif; */
.nav-container {
  background: #064240;

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
.list-nav-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  margin: 0 1rem;
  font-family: "Caveat", cursive;
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
 