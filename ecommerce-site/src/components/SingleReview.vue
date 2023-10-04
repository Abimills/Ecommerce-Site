<template>
  <div class="review">
    <div class="img-container">
      <img src="../assets/user.png" alt="" class="review-image" />
    </div>
    <div class="writen-container">
      <!-- <h1>''</h1> -->
      <p class="review-para">
       {{ review?.review }}
      </p>
      <div class="underline"></div>
      <p class="reviewer-name">{{ review?.name }}</p>
      <p class="place">{{ review?.location }}</p>
    </div>
    <div class="review-stars">
      <div class="number-fill-controller" v-for="start in liked" :key="start">
        <font-awesome-icon icon="fa-solid fa-star" class="star-icons" />
      </div>
      <div class="number-fill-controller" v-for="start in unliked" :key="start">
         <svg
        fill="none"
        stroke="currentColor"
        stroke-width="0.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        class="empty-icon"

      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        ></path>
      </svg>
      </div>
    
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"

const props = defineProps(['review'])
const liked = ref(props.review?.rating || 0)
const unliked = ref(5-props.review?.rating || 0)

</script>
<style scoped>
.img-container {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #0c3837;;
  
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1.4px solid black;
}
.review {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  border-bottom: 1px solid black;
  margin: 0 auto;
  margin-bottom: 1rem;
}
.review-image {
  width: 80px;
  height: 100px;
  object-fit: contain;
  margin-top: 1rem;
}
.writen-container {
}
.writen-container h1 {
  color: aliceblue;
  font-family: "Caveat", cursive;
  font-style: italic;
  font-size: 3rem;
}
.review-para {
  font-style: italic;
  color: rgb(189, 196, 202);
  font-family: "Caveat", cursive;
  font-size: 0.8rem;
  max-width: 400px;
  /* margin-bottom: 1rem; */
}
.reviewer-name {
  color: aliceblue;
  font-family: "Dosis", sans-serif;
  font-size: 0.9rem;
}
.place {
  color: aliceblue;
  font-family: "Dosis", sans-serif;
  font-size: 0.9rem;
}
.review-stars {
  width: 130px;
  padding: 6px;
  border: 1.3px solid black;
  border-radius: 40px;
  display: flex;
  align-items: center;
}
.star-icons {
  color: orange;
  font-size: 0.8rem;
}
.empty-icon {
  color: white;
  width: 17px;
  height: 20px;
  margin-top:.3rem;
  border-radius: 50%;
}
.empty-icon:hover {
  fill: orange;
}
</style>