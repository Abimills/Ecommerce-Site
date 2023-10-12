<template>
  <div class="new-products-container">
    <h1
      :class="
        store.state.mode === 'light'
          ? 'brand-header change-brand-header'
          : 'brand-header'
      "
    >
      Popular Products
    </h1>

    <div
      class="product-container"
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
    >
      <SingleProduct
        v-for="product in products?.product"
        :key="product?._id"
        :product="product"
      />
    </div>
    <div
      :class="
        store.state.mode === 'light'
          ? 'pagination-container change-color-pagination'
          : 'pagination-container'
      "
    >
      <p class="left-arrow" @click="decCurrentPage">{{ "<" }}</p>
      <div class="pages-container">
        <p
          :class="currentPage == page ? 'active-page' : 'page'"
          v-for="(page, index) in arrayPages.array"
          :key="index"
          @click="setPagination(page)"
        >
          {{ page }}
        </p>
        <p class="page dot-page" @click="setPagination(1)">...</p>
        <!-- {{ propValue }} -->
      </div>
      <p class="right-arrow" @click="incCurrentPage">{{ ">" }}</p>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import SingleProduct from "./SingleProduct.vue";
import { computed, onMounted, reactive, ref, watch, watchEffect } from "vue";
import { useStore } from "vuex";

const data = reactive({ product: [] });
const products = reactive({ product: [] });
const arrayPages = reactive({ array: [] });
const currentPage = ref(1);
const store = useStore();
// const isInWishlist = ref(store.state.wishlist?.some(wish => wish ===));

const productsPerPage = 8;
const fetchProducts = async () => {
  const res = await axios.get(
    "https://my-ecommerce-bkends.onrender.com/products/"
  );
  console.log(res.data);
  data.product = res.data?.products?.sort(() => Math.random() - 0.5);
};

onMounted(() => {
  fetchProducts();
});

// useRouter returns the router instance

// Reactive calculations inside computed
const totalPages = computed(() => {
  const productLength = data.product?.length || 0;
  return Math.ceil(productLength / productsPerPage);
});

const startIndex = computed(() => (currentPage.value - 1) * productsPerPage);
const endIndex = computed(() => startIndex.value + productsPerPage);

// Computed property to get sliced products
const slicedProducts = computed(() => {
  return data.product?.slice(startIndex.value, endIndex.value) || [];
});
watchEffect(() => {
  products.product = slicedProducts.value;
});
watchEffect(() => {
  arrayPages.array = Array(totalPages.value)
    .fill()
    .map((_, index) => index + 1);
});
const incCurrentPage = () => {
  if (currentPage.value < totalPages?.value) {
    currentPage.value++;
  } else {
    currentPage.value = 1;
  }
};
const decCurrentPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  } else {
    currentPage.value = 1;
  }
};
const setPagination = (value) => {
  currentPage.value = value;
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
div {
  animation: fadeAn 0.3s ease-in-out both;
  animation-timeline: view();
}
@keyframes fadeAn {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
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
.change-brand-header {
  color: rgb(144, 171, 194);
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
  transition: all 1s ease-in-out;
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
.change-color-pagination .active-page {
  color: white;
  background: gray;
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
  color: #064240;
  margin-bottom: 1rem;
  font-size: 0.8rem;
}
.description {
  font-family: "Dosis", sans-serif;
  color: rgb(240, 238, 238);
  color: #709290;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  max-height: 50px;
  overflow: hidden;
}
.change-color-pagination {
  color: gray;
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
  color: #064240;
  cursor: pointer;
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
@media screen and (max-width: 480px) {
  .pages-container {
    width: 100%;
  }
  .pagination-container {
    width: 100%;
    /* background: rgb(199, 195, 195); */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0rem;
    padding: 15px;
    margin: 2rem 1rem;
    border-radius: 30px;
    font-family: "Mooli", sans-serif;
    font-family: "Outfit", sans-serif;
    font-family: "Roboto", sans-serif;
    color: white;
  }
  .left-arrow,
  .right-arrow {
    font-family: "Caveat", cursive;
    font-family: "Croissant One", cursive;
    font-family: "Dosis", sans-serif;
    font-size: 2rem;
    font-weight: 100;
    cursor: pointer;
  }
  .left-arrow {
    margin-top: 0.3rem;
  }
  .dot-page {
    display: none;
  }
  .active-page,
  .page {
    font-size: 0.7em;
  }
}
@media screen and (max-width: 320px) {
  .product-img {
    width: 90%;
  }
  .product {
    width: 90%;
    padding: 10px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}
</style>