<template>
  <div class="news-container">
    <div class="newsletter-container">
      <h3 class="header">Newsletter</h3>
<svg fill="none" class="news-icon" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
</svg>
      <h1 class="subscribe">Subscribe To Our NewLetter</h1>
      <h4 class="miss">And Never Miss Latest Updates</h4>
      <form class="sub-form">
        <input type="text" />
        <button class="sub-btn">Subscribe</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
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
.news-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.newsletter-container {
  border: 2px solid #709290;
  width: 70%;
  min-height: 250px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.header {
  color: white;
  font-size: 1.3rem;
  font-family: "Mooli", sans-serif;
  margin-bottom: 1rem;
}
.subscribe {
  margin-bottom: 1rem;
  color: #709290;
  font-family: "Mooli", sans-serif;
}
.miss {
  color: rgb(238, 237, 237);
  margin-bottom: 1rem;
  font-size: 0.8rem;

  font-family: "Dosis", sans-serif;
  font-weight: 300;
  
  /* font-family: "Caveat", cursive; */
}
.sub-form {
  width: 100%;
  margin-top:1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  justify-content: center;
}
.sub-form input {
  width: 85%;
  padding: 10px;
  border: 1px solid white;
  outline: none;
}
.sub-btn {
  padding: 10px;
  background-color: #709290;
  border: 1px solid #709290;
  color: rgb(255, 253, 253);
}
.news-icon{
      font-size: .6rem;
      width: 30px;
      height: 30px;
      fill: #709290;
      color:rgb(0, 0, 0);
}
</style>