<template>
  <div
   v-motion
    :initial="{
      opacity: 0,
      y: 100,

    }"
    :enter="{
      opacity: 1,
      y: 0,
    }"
    :class="
      store.state.mode === 'light'
        ? 'home-container light-landing'
        : 'home-container'
    "
  >
    <div class="upper-text-container">
      <p class="fashion">
        <span>Big </span> Fashion<span class="sale">Sale</span>
      </p>
      <p class="description-paragraph">
        Step into a realm of curated elegance at famclog, where sophistication
        meets convenience. Elevate your online shopping to an art form,
        unveiling masterpieces with every click in this world where style
        converges with substance, "famclog"
      </p>
      <div class="btns-container">
        <router-link to="/products">
          <button class="buy-now-btn empty-btn">SHOP NOW</button>
        </router-link>
        <router-link to="/products">
          <button class="buy-now-btn">PRE-ORDER</button>
        </router-link>
      </div>
    </div>

    <div class="pic-and-style-container">
      <img src="../assets/girl-two.png" alt="girl-image" class="girl-image" />

      <div class="dot-container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="dot-container next-side-dot">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="circle"></div>
      <div class="circle lefty-one"></div>
      <div class="circle righty-one"></div>
      <div class="x-sign"></div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import AOS from 'aos';
AOS.init();
const store = useStore();
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Croissant+One&family=Dosis:wght@200;300;400;500;600;700;800&family=Mooli&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
/* font-family: 'Caveat', cursive; */
/* font-family: 'Croissant One', cursive; */
/* font-family: 'Dosis', sans-serif; */
/* font-family: 'Mooli', sans-serif; */
/* font-family: 'Outfit', sans-serif; */
/* font-family: 'Roboto', sans-serif; */
.home-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto; 
  transition: all 1s ease-in-out ;

 
}
/* div {
  animation: fadeAn .3s ease-in-out both;
  animation-timeline: view();

} */
@keyframes fadeAn {
 0% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

.words-btns-container {
  width: 100%;
  /* background: red; */
}

.description-paragraph {
  color: #90cbc9;
  max-width: 400px;
  margin-bottom: 3rem;
  font-family: "Caveat", cursive;
  text-align: center;
  font-family: "Dosis", sans-serif;
  /* font-family: 'Mooli', sans-serif; */
}
.girl-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  margin-top: -3rem;
  /* margin-right: -4rem; */
  z-index: 0;
}

.upper-text-container {
  width: 100%;
  /* margin-left: 1rem; */
  margin-bottom: -6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.btns-container {
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  /* margin-left: -3rem; */
}
.buy-now-btn {
  padding: 6px 20px;
  border: 1px solid #90cbc9;
  background-color: transparent;
  font-size: 0.8rem;
  color: #90cbc9;
  font-family: "Dosis", sans-serif;
  transition: all 0.3s ease-in-out;
}
.buy-now-btn:hover {
  /* background-color: transparent; */
  color: white;
}
.light-landing .buy-now-btn:hover {
  /* background-color: transparent; */
  color: #447e7c;
}
.empty-btn {
  background-color: rgb(172, 156, 127);
  color: white;
  border: 2px solid rgb(172, 156, 127);
}
.light-landing .empty-btn:hover {
  background-color: rgb(172, 156, 127);
  color: #def3f2;
}

.fashion {
  font-size: 5rem;
  font-family: "Croissant One", cursive;
  font-family: "Dosis", sans-serif;
  /* font-family: 'Mooli', sans-serif; */
  font-family: "Outfit", sans-serif;
  /* font-family: 'Roboto', sans-serif; */
  color: rgb(228, 226, 226);
}

.fashion span {
  font-family: "Caveat", cursive;
  color: #90cbc9;
  font-size: 7rem;
}
.fashion .sale {
  color: rgb(172, 156, 127);
}
.pic-and-style-container {
  width: 100%;
  position: relative;
}
.dot {
  content: none;
  width: 2px;
  height: 2px;
  background-color: white;
  border-radius: 50%;
}
.light-landing .dot {
  width: 3px;
  height: 3px;
  background-color: #90cbc9;
}
.dot-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  left: 200px;
  top: 50%;
}
.next-side-dot {
  top: 74%;
  left: 180px;
}
.circle {
  content: none;
  width: 15px;
  height: 15px;
  background-color: transparent;
  border: 3.2px solid wheat;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 100px;
}
.righty-one {
  border: 3.2px solid white;
  left: 0;
}
.light-landing .righty-one {
  border: 3.2px solid wheat;
  left: 0;
}
.lefty-one {
  top: 60%;
  right: 0;
  border: 3.2px solid #90cbc9;
}
.x-sign {
  width: 15px;
  height: 15px;
  background-color: transparent;
  border: none;
  color: #90cbc9;
  border-radius: 50%;
  position: absolute;
  font-size: 0.8rem;
  top: 10%;
  left: 150px;
  font-family: "Dosis", sans-serif;
  font-weight: 302;
}

@media screen and (max-width: 1000px) {
  .fashion {
    font-size: 3rem;
    font-family: "Outfit", sans-serif;
    color: rgb(228, 226, 226);
    margin-left: 0.5rem;
  }
  .description-paragraph {
    font-size: 0.8rem;
    width: 360px;
  }
  .fashion span {
    font-family: "Caveat", cursive;
    color: #90cbc9;
    font-size: 4rem;
    margin-left: 0.5rem;
  }
  .fashion .sale {
    color: rgb(172, 156, 127);
    font-size: 3.4rem;
  }
  .buy-now-btn {
    padding: 6px 20px;
    border: 1px solid #90cbc9;
    background-color: transparent;
    font-size: 0.65rem;
    color: #90cbc9;
    font-family: "Dosis", sans-serif;
    transition: all 0.3s ease-in-out;
  }
  .empty-btn {
    background-color: rgb(172, 156, 127);
    color: white;
    border: 2px solid rgb(172, 156, 127);
  }
  .girl-image {
    width: 90%;
    height: 100vh;
    object-fit: cover;
    /* margin-top: -3rem; */
    /* margin-right: -4rem; */
    z-index: 0;
  }
  .dot {
    display: none;
  }
  .circle {
    display: none;
  }
  .pic-and-style-container {
    display: flex;
    justify-content: flex-end;
    margin: 0rem;
  }
}
@media screen and (max-width: 640px) {
  .home-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column-reverse;
    /* background: #064240; */
  }

  .pic-and-style-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .girl-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* margin-top: -3rem; */
    /* margin-right: -4rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    border-radius: 50%;
  }
  .dot {
    content: none;
    width: 2px;
    height: 2px;
    background-color: orange;

    border-radius: 50%;
  }
  .dot-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    left: 20%;
    top: 50%;
  }
  /* .dot{
  display: none;
} */
  /* .circle{
  display: none;
} */
}
@media screen and (max-width: 480px) {
  .pic-and-style-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    width: 98%;
    height: 100%;
  }
  .girl-image {
    width: 100%;
    /* height: 90vh; */
    object-fit: cover;
    /* margin-top: -3rem; */
    /* margin-right: -4rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    border-radius: 50%;
  }
  .description-paragraph {
    font-size: 0.8rem;
    width: 95%;
  }
}
@media screen and (max-width: 360px) {
  .fashion span {
    font-family: "Caveat", cursive;
    color: #90cbc9;
    font-size: 3rem;
    margin-left: 0.5rem;
  }
  .fashion .sale {
    color: rgb(172, 156, 127);
    font-size: 3rem;
  }
  .fashion {
    font-size: 2rem;
    font-family: "Outfit", sans-serif;
    color: rgb(228, 226, 226);
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .description-paragraph {
    font-size: 0.75rem;
    width: 95%;
  }
}
@media screen and (max-width: 300px) {
  .fashion span {
    font-family: "Caveat", cursive;
    color: #90cbc9;
    font-size: 2.6rem;
    margin-left: 0.5rem;
  }
  .fashion .sale {
    color: rgb(172, 156, 127);
    font-size: 2.6rem;
  }
  .fashion {
    font-size: 1.7rem;
    font-family: "Outfit", sans-serif;
    color: rgb(228, 226, 226);
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>