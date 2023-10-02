<template>
  <div class="favorite-container">
    <div class="top-header-container">
      <div class="nav-header-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="return-arrow"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>

        <h1 class="header">Favorite Products</h1>
      </div>
      <div class="category-container">
        <p>Shoes</p>
        <p>Shirts</p>
      </div>
    </div>
    <div class="products-container-favorite">
      <div
        class="favorite-product"
        v-for="product in wishlist"
        :key="product?._id"
      >
        <img :src="product?.img" alt="" class="fav-img" />
        <p class="name">{{ product?.name }}</p>
        <p class="brand">{{ product?.timeRanges[0] }} Product</p>
        <p class="price">${{ product?.price }}</p>
        <button class="close" @click="handleWish(product?._id)">X</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const wishlist = ref([]);

const fetchData = async (store) => {
  const res = await Promise.all(
    store.state.wishlist?.map((item) =>
      axios.get(`http://localhost:4040/products/${item}`)
    )
  );
  const cartProducts = res.map((product) => product.data.product);
  wishlist.value = cartProducts;
};
const handleWish = (id) => {
  store.commit("addToWishlist",id);
  fetchData(store);
};
watch(wishlist, (newValue, oldValue) => {
  console.log(wishlist.value);
});
onMounted(() => {
  fetchData(store);
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
.favorite-container {
  width: 100%;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
}
.fav-img {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
.top-header-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid gray;
  /* padding: 4px; */
}
.nav-header-container {
  /* width: 30%; */
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
}
.nav-header-container h1 {
  color: white;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1.7rem;

  font-family: "Roboto", sans-serif;
}
.nav-header-container p {
  color: white;
  font-size: 2rem;
  /* background: black; */
  padding: 5px;
  border-radius: 50%;
  letter-spacing: -0.5rem;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
}
.nav-header-container p span {
  /* margin-top:-74px; */
  /* margin-left:-1px; */
  margin-bottom: 0.3rem;
}
.category-container {
  width: max-content;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: -2rem;
}
.category-container p {
  padding: 4px 20px;
  border: 1.4px solid white;
  color: white;
  font-family: "Dosis", sans-serif;
  font-size: 0.72rem;
  text-transform: uppercase;
}
.category-container p:nth-child(2) {
  border: 1.4px solid rgb(165, 164, 164);
  color: rgb(165, 164, 164);
}
.products-container-favorite {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
}
.favorite-product {
  width: 200px;
  height: max-content;
  padding: 10px;
  background: rgb(219, 219, 218);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(187, 15, 15, 0.15) 1.95px 1.95px 2.6px;
  position: relative;
}
.name,
.price,
.brand {
  color: black;
  text-transform: uppercase;
  font-family: "Dosis", sans-serif;
  font-family: "Roboto", sans-serif;
  /* font-weight: 700; */
  font-size: 0.8rem;
  text-align: left;
  width: 100%;
}
.brand,
.price {
  color: rgb(146, 145, 145);
  font-size: 0.6rem;
}
.price {
  font-size: 0.8rem;
  background: orange;
  text-align: center;
  margin-top: 0.5rem;
  color: black;
  cursor: pointer;
  padding: 4px;
}
.return-arrow {
  color: white;
  font-size: 0.8rem;
  width: 20px;
  height: 20px;
}
.close {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  width: 20px;
  border-radius: 50%;
  height: 20px;
  right: 10px;
  font-size: 0.8rem;
  background: black;
  border: none;

  font-weight: 400;
  font-family: "Dosis", sans-serif;
  font-family: "Roboto", sans-serif;
}
</style>