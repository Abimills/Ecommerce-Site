<template>
  <div class="review-container">
    <h1 class="review-header">/ Review</h1>
    <div class="review">
      <div class="img-container">
        <img src="../assets/cutepie23.png" alt="" class="review-image" />
      </div>
      <div class="writen-container">
        <h1>''</h1>
        <p class="review-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptatibus suscipit natus sint? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eum voluptatibus suscipit natus sint?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptatibus suscipit natus sint?
        </p>
        <div class="underline"></div>
        <p class="reviewer-name">Alex Jackson</p>
        <p class="place">London</p>
      </div>
      <div class="review-stars">
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />
        <font-awesome-icon icon="star" class="icon-star" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Review",
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
.img-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 2px solid black;
}
.review {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
}
.review-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-top: 1rem;
}
.writen-container {
  margin-left: -7rem;
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
  max-width: 400px;
  margin-bottom: 1rem;
}
.reviewer-name {
  color: aliceblue;
  font-family: "Dosis", sans-serif;
}
.place {
  color: aliceblue;
  font-family: "Dosis", sans-serif;
}
.review-stars{
      width: 200px;
      padding: 10px;;
      border: 1.3px solid black;
      border-radius: 40px;;

}
.icon-star{
      
}
</style>