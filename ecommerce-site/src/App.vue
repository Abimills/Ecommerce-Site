<template>
  <div>
    <!-- <Navbar /> -->
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
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
</style>




