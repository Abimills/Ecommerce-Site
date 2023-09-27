<template>
  <div class="item-container">
    <div class="left-side">
      <img src="../assets/t-shirt.png" alt="" class="item-image" />
      <div class="related-items">
            <h3 class="related-header">Related Items</h3>
            <div class="items">
                  <img src="../assets/t-shirt.png" alt="">
                  <img src="../assets/shoes.png" alt="">
                  <img src="../assets/shoes.png" alt="">
                  <img src="../assets/t-shirt.png" alt="">

            </div>
      </div>
    </div>
    <div class="right-side">
      <h2 class="item-name">Short sleeve T-shirt for men</h2>
      <div class="wishlist-rating-container">
        <div class="price-rating-container">
          <p class="price">$212.99</p>

          <p class="wishlist-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="heart-icon"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            wishlist
          </p>
        </div>
        <div class="wishlist-container">
          <div class="rating-container">
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
          <p class="review-count">65 reviews</p>
        </div>
      </div>
      <div class="color-quantity-container">
        <div class="color-container">
          <p class="color">Color: black</p>
          <div class="color-options">
            <div class="orange-color-option"></div>
            <div class="white-color-option"></div>
            <div class="black-color-option"></div>
          </div>
        </div>
        <div class="quantity">
          <p>Quantity</p>
          <input type="number" placeholder="1" />
        </div>
      </div>
      <button class="add-to-cart">Add to Cart</button>
      <div class="description-container">
        <p>Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tenetur
          natus, in beatae corporis dolor sint, numquam repellendus illum iste
          quam? Minima, amet.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const id = $route.params.id

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Croissant+One&family=Dosis:wght@200;300;400;500;600;700;800&family=Mooli&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
/* font-family: 'Caveat', cursive; */
/* font-family: 'Croissant One', cursive; */
/* font-family: 'Dosis', sans-serif; */
/* font-family: 'Mooli', sans-serif; */
/* font-family: 'Outfit', sans-serif; */
/* font-family: 'Roboto', sans-serif; */
.item-image {
  width: 400px;
  height: 400px;
  object-fit: contain;
 
}
.item-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}
.left-side {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.right-side {
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}
.item-name {
  font-size: 2.5rem;
  color: white;
  text-transform: capitalize;
  font-family: "Caveat", cursive;
  font-family: "Croissant One", cursive;
  font-family: "Dosis", sans-serif;
  font-family: "Mooli", sans-serif;
}
.price-rating-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wishlist-rating-container {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.wishlist-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}
.empty-icon {
  width: 25px;
  height: 20px;
  /* background: red; */
  color: black;
  font-weight: 900;
}
.rating-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.star-icons {
  margin: 0 0.2rem;
  color: orange;
}
.heart-icon {
  width: 20px;
  height: 20px;
}
.wishlist-text {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;

  font-family: "Dosis", sans-serif;
  text-transform: capitalize;
}
.price {
  font-family: "Dosis", sans-serif;
  text-transform: capitalize;
  color: white;

  font-size: 1.1rem;
}
.review-count {
  font-family: "Dosis", sans-serif;
  color: white;
}
.color-container {
  margin: 1rem 0;
}
.color {
  font-family: "Croissant One", cursive;
  color: white;
  margin-bottom: 0.4rem;
}
.color-options {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.orange-color-option {
  width: 15px;
  height: 15px;
  background-color: orange;
  border-radius: 50%;
}
.black-color-option {
  width: 15px;
  height: 15px;
  background-color: black;
  border-radius: 50%;
}
.white-color-option {
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
}
.color-quantity-container {
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
}
.quantity {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.quantity input {
  width: 40px;
  text-align: center;
  background: transparent;
  border: 1px solid white;
  padding: 3px;
  color: white;
  border-radius: 30px;
  outline:none;

}
.quantity input::placeholder {
  color: white;
}
.quantity p {
  color: white;
  font-family: "Dosis", sans-serif;
}
.add-to-cart{
      padding: 10px 25px;
      font-family: "Dosis", sans-serif;
      margin: 1rem 0;
      border: 1px solid #709290;
      background: #709290;;
      cursor: pointer;
      color:white;
      border-radius: 30px;
      font-size: 1rem;
}
.description-container{
      margin-bottom: 1rem;
      font-family: "Dosis", sans-serif;
      width: 440px;
      color: white;

}
.related-items{
      width: 100%;
}
.items{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
}
.related-header{
      font-family: "Dosis", sans-serif;
      color: white;
      margin: 1rem;
      font-weight: 300;
}
.items img{
      width:90px;
      height: 90px;
      object-fit: cover;
}
</style>