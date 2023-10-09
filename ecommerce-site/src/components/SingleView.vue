<template>
  <div :class="store.state.mode === 'light' ? 'view-item light-view-item': 'view-item'">
    <div class="name-description-container">
      <img :src="product?.img" alt="" class="view-img" />
      <h2>{{ product?.name }}</h2>
      <p class="brand">{{ product?.timeRanges[0] }}</p>
      <p class="price">${{ product?.price }}</p>
      <button class="in-stock">In Stock</button>
      <!-- <p class="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
                earum quibusdam laboriosam hic. Beatae, cumque.
            </p> -->
    </div>
    <div class="new-idea-div">

      <p class="color">
        color: <span>{{ product?.colors[0] }}</span>
      </p>
      <p class="category">
        Category: <span>{{ product?.category }}</span>
      </p>
      <div class="price-delete-container">
        <button @click="deleteProduct(product?._id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const props = defineProps(["product", "deleteProduct"]);
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
.view-img {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
.single-view-container {
  width: 100%;
  margin: 1rem;
}
.header-container {
  width: 100%;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #90cbc9;
}
.new-idea-div{
  width: 100%;
  display:flex;
  align-items:center;
  gap: 1rem;
}
.header-container h1 {
  color: white;
  font-size: 0.9rem;
  margin-bottom: 1rem;

  font-family: "Mooli", sans-serif;
  font-weight: 500;
}
 .light-view-item .header-container h1 {
  color:#90cbc9;
  font-size: 0.9rem;
  margin-bottom: 1rem;

  font-family: "Mooli", sans-serif;
  font-weight: 500;
}
.header-container p {
  color: white;
  font-size: 0.9rem;

  font-family: "Mooli", sans-serif;
  font-weight: 500;
}
.header-container p span {
  color: white;
  font-size: 0.9rem;
  background: #90cbc9;
  padding: 1px 9px;

  font-family: "Mooli", sans-serif;
  font-weight: 500;
}
.all-view-items-container {
  width: 100%;
}
.view-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  border-bottom: 1px solid #90cbc9;
}
.view-img {
  width: 150px;
  height: 200px;
  object-fit: contain;
  background: white;
}
.light-view-item .view-img {
  width: 150px;
  height: 200px;
  object-fit: contain;
  background: #90cbc9;
  color:#90cbc9;
}
.name-description-container {
  display: flex;
  width: 300px;
  align-items: flex-start;
  flex-direction: column;
  /* margin-left: -3rem; */
}
.name-description-container h2 {
  font-size: 1.4rem;
  color: white;
  text-transform: uppercase;
}
.light-view-item .name-description-container h2 {
  font-size: 1.4rem;
  color: #90cbc9;
  text-transform: uppercase;
}
.name-description-container .brand,
.price {
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: white;
  max-width: 250px;
}
.light-view-item .name-description-container .brand {
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #90cbc9;
  max-width: 250px;
}
.price {
  padding: 2px 10px;
  background: orange;
}
.name-description-container .description {
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: rgb(196, 193, 193);
  max-width: 250px;
}
.in-stock {
  padding: 5px 10px;
  background: #90cbc9;
  border: 1px solid #90cbc9;
  color: white;
  font-size: 0.7rem;
}
.color,
.category {
  color: #90cbc9;
  text-transform: uppercase;
  font-size: 0.8rem;
}
.color span,
.category span {
  background: #000000;
  color: white;
  font-size: 0.8rem;
  padding: 5px 10px;
}
.price-delete-container button {
  width: 100px;
  padding: 5px;
  background: rgb(192, 104, 104);
  color: white;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid rgb(192, 104, 104);
}
.light-view-item .price-delete-container button {
  width: 100px;
  padding: 5px;
  background: #90cbc9;
  color:white;
  border-radius: 0px;
  cursor: pointer;
  border: 1px solid #90cbc9;
}
@media screen and (max-width: 680px) {
.view-item {
  width: 100%;
  display: flex;
  align-items: flex-start;
  /* justify-content: flex-start; */
  flex-direction:column;
  padding: 10px;
  border-bottom: 1px solid #90cbc9;
}
.name-description-container {
  display: flex;
  width: 100%;;
  align-items: flex-start;
  flex-direction: column;
  /* margin-left: -3rem; */
  margin-bottom: .5rem;
}
.view-img {
  width: 150px;
  height: 200px;
  object-fit: contain;
  background: white;
  
}
}
@media screen and (max-width: 480px) {
  .new-idea-div .color, .new-idea-div .category {
    display: none;
  }
  .price-delete-container button {
 
  border-radius: 0px;
  
}
}
</style>