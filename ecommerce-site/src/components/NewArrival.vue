<template>
  <div class="new-arrival-container">
    <div class="top-container">
      <div class="left-side-arrival">
        <h1>New Arrivals</h1>
        <p>
          Explore the essence of modern style with our latest arrivals at
          famclog. Each piece is a testament to timeless allure and unparalleled
          craftsmanship, curated to elevate your wardrobe with sophistication.
        </p>
        <div class="btn-container">
          <router-link to="/products">
            <button class="shop-now">Shop Now &#8594;</button>
          </router-link>
        </div>
      </div>
      <!-- <div class="img-container">
        <img :src="glassGirl" alt="" class="girl-glass-pic" />
      </div> -->
      <div class="product-container">
        <div class="product">
          <img :src="shoes" alt="" class="product-img" />
          <p class="discount">25% OFF</p>
          <router-link to="/brand-products">
            <button class="shop-btn shop-color">Buy now</button>
          </router-link>
        </div>
        
        <div class="check-div">
          <h2>New arrivals</h2>
          <p class="discover-paragraph">
            Discover all of our discounted prices and donot miss a cheap price
          </p>
          <router-link to="/products">
            <button class="shop-btn ">check all</button>
          </router-link>
        </div>
        <div class="product">
          <img :src="women" alt="" class="product-img" />
          <p class="discount">35% OFF</p>
          <router-link to="/brand-products">
            <button class="shop-btn shop-color">Buy now</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import glassGirl from "../assets/girl-one.jpg";
import shoes from "../assets/shoes.png";
import women from "../assets/women.png";
export default {
  name: "NewArrival",
  data() {
    return {
      glassGirl,
      shoes,
      women,
    };
  },
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
.new-arrival-container {
  width: 100%;
  margin-top: 2rem;
}
.product-img {
  width: 200px;
  height: 100px;
  object-fit: contain;
}
.top-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row-reverse;
}
.product-container {
  width: 50%;
  margin-top: 3rem;
  display: flex;
  align-items: center;
}
.product {
  width: 30%;
  height: 200px;
  background: #709290;
  background: rgb(172, 156, 127);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
}
.check-div {
  width: 300px;
  height: 200px;
  background: #709290;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 1rem; */
  padding: 10px;
}
.discount {
  font-family: "Outfit", sans-serif;
  font-size: 0.8em;
  letter-spacing: 2px;
  color: rgb(225, 222, 215);
  margin-bottom: 1rem;
}
.check-div h2 {
  color: #064240;
  font-family: "Outfit", sans-serif;
  font-weight: 300;
  /* margin-top: -2rem; */
  margin-bottom: 2rem;
}
.discover-paragraph {
  color: #064240;
  color: rgb(225, 222, 215);
  font-family: "Outfit", sans-serif;
  font-weight: 300;
  font-size: 0.8rem;
  margin-bottom: 2rem;
}
.shop-btn {
  padding: 8px 16px;
  border: none;
  font-family: "Outfit", sans-serif;
  font-size: 0.7rem;
  background: #064240;
  color: rgb(225, 222, 215);
  border-radius: 30px;
  text-transform: capitalize;
}
.shop-color{
  background:white ;
}
.shop-btn:hover{
  background: white;;
  color:#064240 ;
}
.left-side-arrival {
  width: 50%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.left-side-arrival h1 {
  color: white;

  text-align: center;

  margin-bottom: 2.5rem;
  font-size: 3rem;
  font-weight: 300;
  font-family: "Outfit", sans-serif;
}
.left-side-arrival p {
  color: #fff;
  font-family: "Caveat", cursive;
  font-family: 'Croissant One', cursive;
/* font-family: 'Dosis', sans-serif; */
/* font-family: 'Mooli', sans-serif; */
  color: #90cbc9;
  font-size: .8rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
  width: 350px;
}
.btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shop-now {
  padding: 6px 10px;
  text-align: center;
  margin-left: -2rem;
  font-family: "Dosis", sans-serif;
  border: 1px solid #3c7270;
    background: wheat;;
  color:rgb(180, 180, 180);
  border-radius: 4px;
}
.shop-now:hover{
  background-color: #3c7270;
  color: white;
  
}
@media screen and (max-width: 980px) {
.top-container {
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column-reverse;
}
.product-container {
  width: 100%;
  margin-top: -2.93rem;
  display: flex;
  align-items: center;
}
.check-div {
  width: 32%;
  height: 200px;
  
}
.left-side-arrival {
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-direction: row; */
}
.left-side-arrival h1 {
  color: white;

  text-align: center;

  margin-bottom: 1.5rem;
  font-size: 3rem;
  font-weight: 300;
  font-family: "Outfit", sans-serif;
}
.left-side-arrival p {
  color: #fff;
  font-family: "Caveat", cursive;
  font-family: 'Croissant One', cursive;
font-family: 'Dosis', sans-serif;
font-family: 'Mooli', sans-serif;
  color: #90cbc9;
  font-size: .8rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
  width: 70%;
  text-transform: uppercase;
}
}
</style>