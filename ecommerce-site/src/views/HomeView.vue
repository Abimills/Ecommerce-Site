<template>
  <div class="mother-container">
    <Navbar />
    <LandingPage />
    <NewArrivalVue />
    <NewProductsVue />
    <OurValue />
    <PopularProducts />
    <Review />
    <About />

    <Newsletter />
    <Contact />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import LandingPage from "../components/LandingPage.vue";
import NewArrivalVue from "../components/NewArrival.vue";
import NewProductsVue from "../components/NewProducts.vue";
import PopularProducts from "../components/PopularProducts.vue";
import OurValue from "../components/OurValue.vue";
import Review from "../components/Review.vue";
import Newsletter from "../components/Newsletter.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
export default {
  name: "HomeView",
  components: {
   LandingPage,
   Navbar,
    NewArrivalVue,
    NewProductsVue,
    PopularProducts,
    OurValue,
    Review,
    Newsletter,
    About,
    Contact,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  background: #064240;
}
</style>