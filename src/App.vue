<template>
  <div class="mother-container">
    <NavbarVue />
    <Home />

    <!-- <router-view /> -->
  </div>
</template>
<script>
import Home from "./components/HomeView.vue";
import NavbarVue from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Home,
    NavbarVue,
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

</style>>




