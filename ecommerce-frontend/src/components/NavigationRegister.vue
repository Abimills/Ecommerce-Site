<template>
  <div class="navigation-container">
      <div :class="store.state.mode === 'light' ? 'nav-header-container light-mode-nav-header' :'nav-header-container'">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="return-arrow"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
          @click="navigateBack"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>

        <h1 class="header" @click="navigateBack">Home/Register</h1>
      </div>
<RegisterPage/>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import SingleCategory from './SingleCategory.vue';
import LoginPage from './LoginPage.vue';
import RegisterPage from './RegisterPage.vue';
const router = useRouter();
const store = useStore();
function navigateBack() {
      router.push({name:'home'})
}
</script >

<style scoped>
.navigation-container{
      width: 100%;
      padding: 10px;;

}
.nav-header-container {
  /* width: 30%; */
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
}
.nav-header-container h1 {
  color: aliceblue;
  text-transform: capitalize;
  font-weight: 300;
  font-size: 1.1rem;

  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition:all 1s ease-in-out;
}
.light-mode-nav-header h1 {
  color:#77aaa8;
  text-transform: capitalize;
  font-weight: 300;
  font-size: 1.1rem;

  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition:all 1s ease-in-out;
}
.nav-header-container h1:hover {
       color: orange;
      
  
      font-weight: 300;
      font-size: 1.1rem;
      
      font-family: "Roboto", sans-serif;
      transition:all 1s ease-in-out;
  cursor: pointer;
}
.light-mode-nav-header  h1:hover {
      color: orange;
      
  
      font-weight: 300;
      font-size: 1.1rem;
      
      font-family: "Roboto", sans-serif;
      transition:all 1s ease-in-out;
  cursor: pointer;
}
.nav-header-container p {
  color: gray;
  font-size: 2rem;
  /* background: black; */
  padding: 5px;
  border-radius: 50%;
  letter-spacing: -0.5rem;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
}
.nav-header-container p span {
  /* margin-top:-74px; */
  /* margin-left:-1px; */
  margin-bottom: 0.3rem;
}
.return-arrow {

  color:aliceblue;
  font-size: 0.8rem;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.light-mode-nav-header .return-arrow{
      color:gray;
}
.return-arrow:hover{
  color:#77aaa8;
}
</style>