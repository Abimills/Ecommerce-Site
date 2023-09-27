<template>
  <div class="single-view-container">
    <div class="header-container">
      <h1>All Products</h1>
      <p>Products : <span>23</span></p>
    </div>
    <div class="all-view-items-container">
      <div class="view-item">
        <img src="../assets/t-shirt.png" alt="" class="view-img" />
        <div class="name-description-container">
          <h2>Shirt black</h2>
          <p class="brand">Brand</p>
          <p class="price">$23</p>
          <button class="in-stock">In Stock</button>
          <!-- <p class="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
                earum quibusdam laboriosam hic. Beatae, cumque.
            </p> -->
        </div>
        <p class="color">color: <span>black</span></p>
        <p class="category">Category: <span>Shoes</span></p>
        <div class="price-delete-container">
          <button>Delete</button>
        </div>
      </div>
      <div class="view-item">
        <img src="../assets/t-shirt.png" alt="" class="view-img" />
        <div class="name-description-container">
          <h2>Shirt black</h2>
          <p class="brand">Brand</p>
          <p class="price">$23</p>
          <button class="in-stock">In Stock</button>
          <!-- <p class="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
                earum quibusdam laboriosam hic. Beatae, cumque.
            </p> -->
        </div>
        <p class="color">color: <span>black</span></p>
        <p class="category">Category: <span>Shoes</span></p>
        <div class="price-delete-container">
          <button>Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
.header-container h1 {
  color: white;
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
  justify-content: space-between;
  padding: 10px;
  border-bottom:1px solid #90cbc9;

}
.view-img {
  width: 150px;
  height: 200px;
  object-fit: contain;
  background: white;
}
.name-description-container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: -3rem;
}
.name-description-container h2 {
  font-size: 1.4rem;
  color: white;
  text-transform: uppercase;
}
.name-description-container .brand,
.price {
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: white;
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
  color: rgb(196, 193, 193);
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
</style>