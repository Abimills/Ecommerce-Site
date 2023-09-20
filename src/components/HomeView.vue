<template>
  <div class="home-container">
    <div class="words-btns-container">
      <div class="upper-text-container">
        <div class="vertical-line"></div>
        <div class="vertical-line bottom-one"></div>
        <p class="fashion"><span>Big</span> Fashion Sale</p>
        <p class="description-paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          nam mollitia ratione, vel corrupti, aliquam fugiat expedita eaque
          numquam in, perferendis libero excepturi voluptates quo facilis
          incidunt! Ab, totam vel! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Exercitationem laboriosam perferendis saepe commodi?
          Similique, laudantium.
        </p>
        <div class="btns-container">
          <button class="buy-now-btn empty-btn">BUY NOW</button>
          <button class="buy-now-btn">PRE-ORDER</button>
        </div>
      </div>

      <div class="shirts-container">
        <div class="shirt-one-container">
          <img src="" alt="" />
        </div>
        <div class="shirt-two-container">
          <img src="" alt="" />
        </div>
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
  name: "Home",
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
  justify-content: center;
  background: #064240;
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
.bottom-one {
  bottom: 90px;
}
.description-paragraph {
  color: #90cbc9;
  max-width: 450px;
  margin-bottom: 3rem;
  font-family: "Caveat", cursive;
}
.girl-image {
  width: 600px;
  height: 100vh;
  object-fit: cover;
  margin-top: -3rem;
  margin-right: -4rem;
}
.upper-text-container {
  width: 100%;
  margin-left: 1rem;
  margin-bottom: -6rem;
}
.btns-container {
  width: 80%;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  align-items: center;
  /* margin-left: -3rem; */
}
.buy-now-btn {
  padding: 6px 20px;
  border: 2px solid #90cbc9;
  font-size: 0.8rem;
  color: black;
  background-color: #90cbc9;
  font-family: "Dosis", sans-serif;
}
.empty-btn {
  background-color: transparent;
  color: #90cbc9;
  border: 1px solid #90cbc9;
}
.fashion {
  font-size: 5rem;
  font-family: "Croissant One", cursive;
  font-family: "Dosis", sans-serif;
  /* font-family: 'Mooli', sans-serif; */
  font-family: "Outfit", sans-serif;
  /* font-family: 'Roboto', sans-serif; */
  color: white;
}
.fashion span {
  font-family: "Caveat", cursive;
  color: #90cbc9;
  font-size: 7rem;
}
.pic-and-style-container {
  /* width: 100%; */
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