<template>
  <div class="mother-container">
    <Navbar />
    <LandingPage />
    <NewArrivalVue />
    <NewProductsVue />
    <OurValue />
    <PopularProducts />
    <Review />
    <AboutNewsContainer />
    <Contact />
    <Footer /> 
   
    
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import AboutNewsContainer from "../components/AboutNewsContainer.vue";
import Footer from "../components/Footer.vue";
import LandingPage from "../components/LandingPage.vue";
import NewArrivalVue from "../components/NewArrival.vue";
import NewProductsVue from "../components/NewProducts.vue";
import PopularProducts from "../components/PopularProducts.vue";
import OurValue from "../components/OurValue.vue";
import Review from "../components/Review.vue";
import Newsletter from "../components/Newsletter.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.mother-container {
  width: 100%;
  margin: 0 auto;
}
</style>