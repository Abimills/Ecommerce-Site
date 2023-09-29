<template>
  <div class="home-container">
    <div class="upper-text-container">
      <p class="fashion"><span>Big</span> Fashion <span class="sale">Sale</span></p>
      <p class="description-paragraph">
        Step into a realm of curated elegance at famclog, where
        sophistication meets convenience. Elevate your online shopping to an art
        form, unveiling masterpieces with every click in this world where style
        converges with substance, "famclog"
      </p>
      <div class="btns-container">
        <router-link to="/item">
          <button class="buy-now-btn empty-btn">SHOP NOW</button>
        </router-link>
        <router-link to="/products">
          <button class="buy-now-btn">PRE-ORDER</button>
        </router-link>
      </div>
    </div>

    <div class="pic-and-style-container">
      <img :src="girlOne" alt="girl-image" class="girl-image" />

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

<script>
import girlOne from "../assets/girl-two.png";

export default {
  name: "LandingPage",
  components: {},
  data() {
    return {
      girlOne,
    };
  },
};
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
  /* background: #064240; */
}
.vertical-line {
  content: none;
  width: 100px;
  height: 2px;
  background: black;
  transform: rotate(90deg);
  position: absolute;
  left: 10px;
}
.words-btns-container {
  width: 100%;
  /* background: red; */
}
.bottom-one {
  bottom: 90px;
}
.description-paragraph {
  color: #90cbc9;
  max-width: 450px;
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
  margin-left: 1rem;
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
.empty-btn {
  background-color:rgb(172, 156, 127);
  color: white;
  border: 2px solid rgb(172, 156, 127);
}
.empty-btn:hover {
  background-color: rgb(172, 156, 127);
  color: black;
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
  border: 2.2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 100px;
}
.righty-one {
  border: 2.2px solid white;
  left: 0;
}
.lefty-one {
  top: 60%;
  right: 0;
  border: 2.2px solid greenyellow;
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
</style>