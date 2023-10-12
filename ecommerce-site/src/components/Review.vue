<template>
  <div class="review-container">
    <h1 :class="store.state.mode === 'light'? 'review-header light-header':'review-header'"> Reviews</h1>
    <SingleReviewVue
      v-for="review in reviews"
      :review="review"
      :key="review?._id"
    />

    <div class="give-review-btn">
      <router-link to="/all-review">
        <button class="more">Check All Review</button>
      </router-link>
      <router-link to="/give-review">
        <button class="review-btn">Give a review!</button>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import SingleReviewVue from "./SingleReview.vue";
const reviews = ref([]);
const store = useStore();
const fetch = async () => {
  const res = await axios.get("http://localhost:4040/reviews/");
  reviews.value = res.data.reviews;
};
onMounted(() => {
  fetch();
});
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
  margin-bottom: 1rem;
}
div {
  animation: fadeAn .3s ease-in-out both;
  animation-timeline: view();

}
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
.light-header{
  color:#709290;
}
.give-review-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 1rem 0;
}
.more {
  padding: 10px;
  background: #709290;
  border: 1px solid #709290;
  font-family: "Croissant One", cursive;
  font-family: "Dosis", sans-serif;
  border-radius: 10px;
  color: rgb(207, 201, 201);
}
.review-btn {
  padding: 10px;
  border: 1px solid orange;
  font-family: "Caveat", cursive;
  background: orange;
  font-size: 0.9rem;
  border-radius: 30px;
}
</style>