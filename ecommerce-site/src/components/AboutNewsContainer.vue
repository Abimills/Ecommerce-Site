<template>
  <div class="about-newsletter-container" v-motion
    :initial="{
      opacity: 0,
      y: -100,

    }"
    :enter="{
      opacity: 1,
      y: 0,
    }">
    <!-- <Navbar /> -->
    <AboutView />
    <Newsletter />
  </div>
</template>

<script setup>
import AboutView from "./About.vue";
import Newsletter from "./Newsletter.vue";
</script>

<style scoped>
.about-newsletter-container{
     transition: all 1s ease-in-out ;

}
</style>