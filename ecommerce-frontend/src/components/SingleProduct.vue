<template>
  <div class="product">
    <p class="wish">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        @click="handleWish"
        viewBox="0 0 24 24"
        :class="isInWishlist ? 'full-icon' : 'heart-icon'"
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
    </p>
    <img
      :src="product?.img"
      alt=""
      class="product-img"
      @click="navigateToProduct(product?._id)"
    />
    <div class="price-container">
      <!-- <router-link :to="'/product/' + product?._id"> -->
      <p class="product-name" @click="navigateToProduct(product?._id)">
        {{ product?.name }}
      </p>
      <!-- </router-link> -->
      <p class="product-price">${{ product?.price }}</p>
    </div>
    <p :class="show ? 'description' : 'hidden-description'">
      {{ product?.description }}
    </p>
    <p class="read-more" @click="toggleShow">
      {{ show ? "read more..." : "read less..." }}
    </p>
    <button class="add-to-cart" @click="addToCart(product?._id)">
      Add to Cart
    </button>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
import { computed, onMounted, reactive, ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();
const show = ref(true);
const isInWishlist = ref(
  store.state.wishlist.some((wish) => wish === props.product?._id)
);
const navigateToProduct = (id) => {
  router.push({ name: "product", params: { id: id } });
};

const addToCart = (id) => {
  const item = {
    id: id,
    quantity: 1,
  };
  store.commit("addToCart", item);
};
const toggleShow = () => {
  show.value = !show.value;
};
const handleWish = () => {
  store.commit("addToWishlist", props.product?._id);
  isInWishlist.value = store.state.wishlist.some(
    (item) => item === props.product?._id
  );
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
  width: 200px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 1rem;
  cursor: pointer;
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
.wish {
  width: 100%;

  color: black;
  /* position: absolute; */
  top: 10px;
  left: 50%;
  fill: black;
  text-align: right;
}
.heart-icon {
  width: 25px;
  height: 25px;
  color: black;
}
.full-icon {
  width: 25px;
  height: 25px;
  color: black;
  fill: black;
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
/* pagination ----- */

.pagination-container {
  width: 80%;
  /* background: rgb(199, 195, 195); */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 5px;
  margin: 2rem 1rem;
  border-radius: 30px;
  font-family: "Mooli", sans-serif;
  font-family: "Outfit", sans-serif;
  font-family: "Roboto", sans-serif;
  color: white;
}
.pages-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 0.7rem;
}
.pages-container p {
  cursor: pointer;
}
.left-arrow,
.right-arrow {
  font-family: "Caveat", cursive;
  font-family: "Croissant One", cursive;
  font-family: "Dosis", sans-serif;
  font-size: 3rem;
  font-weight: 200;
  cursor: pointer;
}
.active-page {
  color: white;
  background: orange;
  padding: 5px;
}
/* pagination end  */
.product {
  width: 280px;
  padding: 10px;
  background: aliceblue;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease-in-out;
}

.price-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  transition: all 0.5s ease-in-out;
}
.product-name {
  font-family: "Dosis", sans-serif;
  color: #064240;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
}
.product-price {
  font-family: "Dosis", sans-serif;
  color: white;
  background-color: #064240;
  padding: 0px 8px;
}
.description {
  font-family: "Dosis", sans-serif;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  transition: all 0.5s ease-in-out;
}
.description {
  font-family: "Dosis", sans-serif;
  color: rgb(240, 238, 238);
  color: #064240;
  color:gray;;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  max-height: 50px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}
.hidden-description {
  font-family: "Dosis", sans-serif;
  color: rgb(240, 238, 238);
  color: #064240;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  height: max-content;
}
.read-more {
  background: transparent;
  display: inline;
  border: none;
  text-align: left;
  width: 100%;
  font-family: "Dosis", sans-serif;
  color: #7d8584;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.5s ease-in-out;
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