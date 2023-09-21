<template>
  <div class="mother-container">
    <NavbarVue />
    <Home />
    <NewArrivalVue />
    <NewProductsVue />
    <OurValue />
    <PopularProducts />
  </div>
</template>
<script>
import Home from "./components/HomeView.vue";
import NavbarVue from "./components/Navbar.vue";
import NewArrivalVue from "./components/NewArrival.vue";
import NewProductsVue from "./components/NewProducts.vue";
import PopularProducts from "./components/PopularProducts.vue";
import OurValue from "./components/OurValue.vue";
export default {
  name: "App",
  components: {
    Home,
    NavbarVue,
    NewArrivalVue,
    NewProductsVue,
    PopularProducts,
    OurValue,
  },
  data() {
    return {};
  },
};
</script>

<style >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  background: #064240;
}
</style>>




