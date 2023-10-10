<template>
  <div class="footer-container">
    <div class="left">
      <h3 class="contact-us">Contact Us</h3>
      <p>Utrecht 1223,Netherlands</p>
      <p>+325435435245</p>
      <p>+313290432490</p>
    </div>
    <div class="center">
      <h2 class="ecom">EcoM</h2>
      <p>" buy your best clothes from a trusted seller "</p>

      <div class="social-media">
        <font-awesome-icon icon="fa-brands fa-facebook" />
        <font-awesome-icon icon="fa-brands fa-linkedin" />
        <font-awesome-icon icon="fa-brands fa-instagram" />
      </div>
      <p class="copy-right">&copy; 2023 Abel T. developer</p>
    </div>
    <div class="right-side">
      <h3>Working Hours</h3>
      <div class="mone-fri">
        <p>Monday-Friday</p>
        <p class="time">8:00am-12pm</p>
      </div>
      <div class="sat-sun">
        <p>Saturday-Sunday</p>
        <p class="time">8:00am - 10pm</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {},
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
.news-icon {
  width: 30px;
  height: 30px;
}
.footer-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* margin-bottom: 1rem; */
  background: #709290;
  color:white;
}
.contact-us {
  font-family: "Dosis", sans-serif;
  margin-bottom: 1rem;
}
.left :nth-child(2) {
  font-family: "Caveat", cursive;
  color: white;
}
.left :nth-child(3),
:nth-child(4) {
  font-family: "Caveat", cursive;
  font-family: "Dosis", sans-serif;
  font-size: 0.8rem;
  margin: 1rem 0;

    color:white;

}
.ecom {
  font-family: "Croissant One", cursive;
  font-family: "Dosis", sans-serif;
  font-weight: 400;
  letter-spacing: 2px;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
    color:white;

}
.center p {
  font-family: "Dosis", sans-serif;
  font-size: 0.75rem;
  color: #709290;
    color:white;

}
.social-media {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 1rem 0;
}
.social-media * {
  color: white;
}
.center .copy-right {
  font-size: 0.9rem;
  margin-top: -0.1rem;
}
.right-side h3 {
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}
.mone-fri {
  margin-bottom: 0.5rem;
}
.mone-fri p {
  font-family: "Caveat", cursive;
  color: white;
}
.sat-sun p {
  font-family: "Caveat", cursive;
  color: white;
}
.mone-fri .time {
  color: rgb(191, 187, 187);
}
.sat-sun .time {
  color: rgb(191, 187, 187);
}
@media screen and (max-width:650px) {
  .left p{
    font-size:.7rem;
  }
}
@media screen and (max-width:480px) {
  .right-side{
    display: none;
  }
  .center p {
    font-size: 0.7rem;
  }
  .center .copy-right{
    font-size: 0.7rem;
  }
}
</style>