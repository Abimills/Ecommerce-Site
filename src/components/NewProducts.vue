<template>
  <div class="new-products-container">
    <h1 class="brand-header">Brand New Products</h1>
    <p class="brand-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat pariatur
      ipsa eos sunt vero, eligendi totam hic quaerat sed quis!
    </p>
    <div class="product-container">
      <div class="product">
        <img src="../assets/shoes.png" alt="" class="product-img" />
        <div class="price-container">
          <p class="product-name">Halico Dress</p>
          <p class="product-price">$34</p>
        </div>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          impedit sint ducimus! Autem, sint ab!
        </p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
      <div class="product">
        <img src="../assets/t-shirt.png" alt="" class="product-img" />
        <div class="price-container">
          <p class="product-name">Halico Dress</p>
          <p class="product-price">$34</p>
        </div>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          impedit sint ducimus! Autem, sint ab!
        </p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
      <div class="product">
        <img src="../assets/shoes.png" alt="" class="product-img" />
        <div class="price-container">
          <p class="product-name">Halico Dress</p>
          <p class="product-price">$34</p>
        </div>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          impedit sint ducimus! Autem, sint ab!
        </p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
      <div class="product">
        <img src="../assets/shoes.png" alt="" class="product-img" />
        <div class="price-container">
          <p class="product-name">Halico Dress</p>
          <p class="product-price">$34</p>
        </div>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          impedit sint ducimus! Autem, sint ab!
        </p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
      <div class="product">
        <img src="../assets/shoes.png" alt="" class="product-img" />
        <div class="price-container">
          <p class="product-name">Halico Dress</p>
          <p class="product-price">$34</p>
        </div>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          impedit sint ducimus! Autem, sint ab!
        </p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
      <div class="product">
        <img src="../assets/shoes.png" alt="" class="product-img" />
        <div class="price-container">
          <p class="product-name">Halico Dress</p>
          <p class="product-price">$34</p>
        </div>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          impedit sint ducimus! Autem, sint ab!
        </p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewProducts",
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
.product-img {
  width: 150px;
  height: 150px;
  object-fit: contain;
}
.new-products-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 6rem;
  margin-bottom: 6rem;
}
.brand-header {
  color: rgb(217, 217, 217);
  font-family: "Dosis", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 2rem;
}
.brand-text {
  color: rgb(159, 156, 156);
  font-family: "Dosis", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-bottom: 2rem;
}
.product-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
}
.product {
  width: 250px;
  padding: 10px;
  background: #709290;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.price-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.product-name {
  font-family: "Dosis", sans-serif;
  color: white;
}
.product-price {
  font-family: "Dosis", sans-serif;
  color: white;
  background-color: #064240;
  padding: 0px 8px;
}
.description {
  font-family: "Dosis", sans-serif;
  color: white;
  margin-bottom: 1rem;
  font-size: 0.8rem;
}
.add-to-cart {
  padding: 5px 15px;
  background: #064240;
  border: 1px solid #064240;
  color: white;
  border-radius: 20px;
  font-family: "Dosis", sans-serif;
  margin: 0.5rem 0;
  font-size: 0.7rem;
  transition: all 0.4s ease-in;
}
.add-to-cart:hover {
  background: transparent;
}
</style>