<template>
  <div>
    <!-- <Navbar /> -->
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

</script>
<style  >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
   background: #064240;
    /* background: linear-gradient(to bottom,#010a0a,#064240 ); */
  /* background: #3d4935; */
}
</style>




