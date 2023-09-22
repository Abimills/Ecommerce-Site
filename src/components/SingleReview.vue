<template>
  <div class="review">
    <div class="img-container">
      <img src="../assets/cutepie23.png" alt="" class="review-image" />
    </div>
    <div class="writen-container">
      <h1>''</h1>
      <p class="review-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
        voluptatibus suscipit natus sint? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eum voluptatibus suscipit natus sint? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Eum voluptatibus suscipit
        natus sint?
      </p>
      <div class="underline"></div>
      <p class="reviewer-name">Alex Jackson</p>
      <p class="place">London</p>
    </div>
    <div class="review-stars">
      <font-awesome-icon icon="fa-solid fa-star" class="star-icons" />
      <font-awesome-icon icon="fa-solid fa-star" class="star-icons" />
      <font-awesome-icon icon="fa-solid fa-star" class="star-icons" />
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
</template>
<script>
export default {
  name: "SingleReview",
  data() {},
};
</script>
<style scoped>
.img-container {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: rgb(115, 143, 167);
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

}
.review-image {
  width: 150px;
  height: 150px;
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
  font-size: .8rem;
  max-width: 400px;
  margin-bottom: 1rem;
}
.reviewer-name {
  color: aliceblue;
  font-family: "Dosis", sans-serif;
  font-size: .9rem;
}
.place {
  color: aliceblue;
  font-family: "Dosis", sans-serif;
  font-size:.9rem;
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
  font-size:.8rem;
}
.empty-icon {
  color: white;
  width: 17px;
  height: 20px;
  border-radius: 50%;
}
.empty-icon:hover{
  fill: orange;
}

</style>