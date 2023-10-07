<template>

    <div class="new-products-container">
      
      <h1 class="brand-header">Categories</h1>
      <div class="category-container">
        <p
          class="filter"
          :class="activeCategory == cat ? 'active-category' : ''"
          @click="filterProducts(cat, index)"
          v-for="cat in productCategory?.categories"
          :key="cat.index"
        >
          {{ cat }}
        </p>
      </div>

      <div class="product-container">
      
          <SingleProduct  v-for="product in productsToShow?.product?.products"
          :key="product?._id" :product="product"/>
       
      </div>
      
    </div>
  
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import SingleProduct from "./SingleProduct.vue";
const activeCategory = ref("Shoes");

// categories set of words from data
const productCategory = reactive({ categories: [] });

const products = reactive({ product: [] });
const productsToShow = reactive({
  product: [],
});
const getCategories = (data) => {
  const categories = data?.products?.map((pro) => pro.category);
  const timeRangeCat = data?.products?.map((pro) => pro.timeRanges[0]);
  productCategory.categories = [
    "All",
    ...new Set(categories),
    ...new Set(timeRangeCat),
  ];
};

const router = useRouter();

const navigateToProduct = (id) => {
  router.push({ name: "product", params: { id: id } });
};
const navigateBack = (id) => {
  router.push({ name: "home"});
};

onMounted(() => {
  const fetch = async () => {
    const res = await axios.get("http://localhost:4040/products/");
    products.product = res.data;
    filterProducts("Shoes");
    getCategories(res.data);
  };
  fetch();
});

const filterProducts = (category) => {
  if (products.product) {
    if (category === "All") {
      productsToShow.product.products = products.product.products;
      activeCategory.value = category;
    } else {
      productsToShow.product.products = products.product.products?.filter(
        (product) =>
          product.category?.toLowerCase() == category?.toLowerCase() ||
          product.timeRanges[0]?.toLowerCase() == category?.toLowerCase()
      );
      activeCategory.value = category;
    }
  } else {
    return;
  }
};

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Croissant+One&family=Dosis:wght@200;300;400;500;600;700;800&family=Mooli&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
.create-product-container {
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  gap: 6rem;
  position: relative;

  font-family: "Outfit", sans-serif;
}
.return-arrow{
  width:30px;
  height:30px;
  color:white;
  margin-left:1rem;
  cursor: pointer;
}
.header-redirect-container{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}
.right-side-container {
  width: 100%;
}
.add-products-form-container {
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 1rem;
  margin-left: 14rem;
}
.log-out-request-container {
  margin-top: 1rem;
  width: 100%;
}
.log-out-request-container button {
  width: 100%;
  background: #90cbc9;
  padding: 10px;
  border: 1px solid #90cbc9;
  color: white;
  text-transform: capitalize;
}
.log-out-request-container button:hover {
  background: transparent;
  color: black;
}
.add-product-form {
  width: 60%;

  padding: 20px;
  border: 1px solid #90cbc9;
  border-radius: 5px;
}
.link-profile {
  list-style: none;
  text-decoration: none;
}
.name-container,
.price-container,
.img-container,
.colors-container,
.time-ranges-container,
.discount-container,
.description-container,
.category-container {
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
}
.name-container label,
.price-container label,
.img-container label,
.colors-container label,
.time-ranges-container label,
.discount-container label,
.description-container label,
.category-container label {
  color: #90cbc9;
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
}
.name-container input::placeholder,
.price-container input::placeholder,
.img-container input::placeholder,
.colors-container input::placeholder,
.time-ranges-container input::placeholder,
.discount-container input::placeholder,
.description-container input::placeholder,
.category-container input::placeholder {
  font-size: 0.6rem;
  color: #90cbc9;
}
.name-container input,
.price-container input,
.img-container input,
.colors-container input,
.time-ranges-container input,
.discount-container input,
.description-container input,
.category-container input {
  width: 100%;
  padding: 10px;
  border: 1px solid white;
  outline: none;
  margin-bottom: 1rem;
}
.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #90cbc9;
  border: 1px solid #90cbc9;
  color: white;
  outline: none;
  cursor: pointer;
}
.add-products-header {
  color: white;
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  margin-bottom: -1rem;
}
.line {
  content: none;
  width: 200px;
  height: 2px;
  background: #90cbc9;
  border-radius: 40px;
  /* margin-bottom: 1rem; */
}
.admin-pic {
  width: 70px;
  height: 70px;
  object-fit: contain;
  border-radius: 50%;
  background: orange;
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-mother-container {
  width: 25%;
  height: 100vh;
  position: relative;
}
.admin-information-navigation {
  width: 20%;
  height: 100vh;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  /* margin-left: 3rem; */
  border-top-right-radius: 90px;
  position: fixed;

  padding: 10px;
}
.admin-pic-label {
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: space-evenly;
  margin: 1rem;
  border-bottom: 1px solid rgb(184, 183, 183);
  padding: 20px 10px;
}
.admin-pic-label p {
  /* font-family: "Roboto", sans-serif; */
  font-weight: 600;
  color: #064240;
}
.profile-container,
.categories-container,
.Add-product-container,
.view-products-container,
.user-request-container {
  width: 100%;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid #90cbc9;
}
.profile-container p,
.categories-container p,
.Add-product-container p,
.view-products-container p,
.user-request-container p {
  color: #064240;
  color: #90cbc9;
  cursor: pointer;
}
.person-profile-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  background: rgb(20, 20, 20);
  border-radius: 50%;
  padding: 10px;
}
.profile-all-container {
  /* margin-left: 15rem; */
  /* margin-left: 16rem; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  margin-left: 4rem;
  margin-top: 2rem;
}
.profile-all {
  width: 50%;
  border: 1px solid #90cbc9;
  padding: 10px;
  border-radius: 5px;
}
.person-info {
  color: white;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  font-size: 0.8rem;
}

.top-img-info-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 10px;
  border-bottom: 1px solid gray;
}
.product-info-container {
  width: 100%;
  background: white;
  text-transform: capitalize;
}
.list-info {
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
li {
  list-style: none;
}
.li-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: aliceblue;
  padding: 10px;
  /* margin:.5rem; */
  color: #064240;
}
.li-container p {
  background: white;
  padding: 5px;
}
.owner {
  padding: 3px 10px;
  background: #90cbc9;
}
.product-img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  cursor: pointer;

}
.price-container{

}
.new-products-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
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
  background: aliceblue;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.price-container {
  width: 100%;
  display: flex;
  /* align-items: center;
  justify-content: space-between; */
  margin-bottom: 1rem;
  gap: 1rem;
}
.product-name {
  font-family: "Dosis", sans-serif;
  color: #064240;
  cursor: pointer;
  text-transform: uppercase;
  font-size:.8rem;
}
.product-price {
  font-family: "Dosis", sans-serif;
  color: white;
  background-color: #064240;
  padding: 0px 5px;
  font-size: .9rem;
}
.description {
  font-family: "Dosis", sans-serif;
  color: #064240;
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
.category-container {
  width: 80%;
  margin-left: 8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  gap: 2rem;
  justify-content: space-evenly;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 20px;
}
.category-container p {
  cursor: pointer;
  font-family: "Dosis", sans-serif;
  transition: all 0.5s ease-in-out;
}
.active-category {
  background: orange;
  padding: 2px 10px;
  color: white;
  border-radius: 20px;
  transition: all 0.5s ease-in-out;
}
.hide-arrow{
  display: none;
}
@media screen and (max-width:600px){
  .category-container {
    width: 100%;
    margin-left: 0rem;
    gap: 1rem;
    
  }
  .category-container p{
    font-size:.8rem;
  }
}
@media screen and (max-width:360px){
  .category-container{
    flex-wrap: wrap;
  }
  .category-container p{
    font-size:.8rem;
    text-transform: uppercase;
  }
  .hide-arrow{
  display: none;
}
}
.brand-header {
  margin-bottom: 2rem;
}


</style>