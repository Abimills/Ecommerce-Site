<template>
  <div :class="{'body' : store.state.mode === 'light' }">
    <!-- <Navbar /> -->
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useStore } from "vuex";
const store = useStore();

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
  /* Set a fixed height for the scrollbar to be visible */
  height: 300px;
  /* Customize scrollbar colors */
  scrollbar-color: darkorange darkslategrey;
  /* Customize scrollbar width */
  scrollbar-width:thin;
  scroll-behavior: smooth;

  /* Additional styles for WebKit browsers (Chrome, Safari) */
  
}
::-webkit-scrollbar {
    width: 1px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
  }
  ::-webkit-scrollbar-track {
    background-color: #709290;
  }
.body {
  width: 100%;
   background: white;
    /* background: linear-gradient(to bottom,#010a0a,#064240 ); */
  /* background: #3d4935; */
  
}

</style>




