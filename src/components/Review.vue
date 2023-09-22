<template>
  <div class="review-container">
    <h1 class="review-header">/ Review</h1>
    <SingleReviewVue />
    <SingleReviewVue />
    <SingleReviewVue />
    <div class="give-review-btn">
      <button class="more">Check All Review</button>
      <button class="review-btn"> Give a review! </button>
    </div>
  </div>
</template>
<script>
import SingleReviewVue from "./SingleReview.vue";
export default {
  name: "Review",
  components: {
    SingleReviewVue,
  },
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
.review-container {
  width: 100%;
}
.review-header {
  text-align: center;
  color: aliceblue;
  font-size: 3rem;
  font-family: "Caveat", cursive;
  font-weight: 300;
  font-family: "Dosis", sans-serif;
}
.give-review-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 1rem 0;
}
.more{
padding: 10px;
background:#709290 ;
border:  1px solid #709290;
font-family: 'Croissant One', cursive;
font-family: 'Dosis', sans-serif;
border-radius: 10px;
color:rgb(207, 201, 201);
}
.review-btn{
  padding: 10px;
  border:1px solid orange;
  font-family: 'Caveat', cursive;
  background:orange;
  font-size:.9rem;
  border-radius: 30px;
}
</style>