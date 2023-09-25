<template>
  <div class="create-product-container">
    <div class="admin-information-navigation">
      <div class="admin-pic-label">
        <img src="../assets/cutepie23.png" alt="" class="admin-pic" />
        <p>Admin</p>
      </div>
      <div class="profile-container">
        <p>Profile</p>
      </div>
      <div class="categories-container">
        <p>Categories</p>
      </div>
      <div class="Add-product-container">
        <p>Add Products</p>
      </div>
      <div class="view-products-container">
        <p>View Products</p>
      </div>
      <div class="user-request-container">
        <p>View User</p>
      </div>
    </div>
    <div class="add-products-form-container">
      <h1 class="add-products-header">Add Products</h1>
      <div class="line"></div>
      <form class="add-product-form" @submit.prevent="onSubmit">
        <div class="name-container">
          <label class="label">Product Name</label>
          <input
            type="text"
            class="name"
            placeholder="Enter Product name"
            v-model="data.name"
          />
        </div>
        <div class="price-container">
          <label class="label">Product Price</label>
          <input
            type="number"
            class="name"
            placeholder="Enter Product price"
            v-model="data.price"
          />
        </div>
        <div class="category-container">
          <label class="label">Category</label>
          <input
            type="text"
            class="name"
            placeholder="Enter Product category"
            v-model="data.category"
          />
        </div>
        <div class="description-container">
          <label class="label">Product Description</label>
          <input
            type="text"
            class="name"
            placeholder="Enter Product Description"
            v-model="data.description"
          />
        </div>
        <div class="discount-container">
          <label class="label"> Discount </label>
          <input
            type="number"
            class="name"
            placeholder="Enter Product discount if applies"
            v-model="data.discount"
          />
        </div>
        <div class="time-ranges-container">
          <label class="label">
            Give label for the product entrance name
          </label>
          <input
            type="text"
            class="name"
            placeholder="Label product entrance time"
            v-model="data.timeRanges"
          />
        </div>
        <div class="colors-container">
          <label class="label">Product colors </label>
          <input
            type="text"
            class="name"
            placeholder="Enter Product colors availability"
            v-model="data.colors"
          />
        </div>
        <div class="img-container">
          <label class="label">Product Image </label>
          <input
            type="file"
            class="name"
            placeholder="Provide product image"
            @change="handleImage"
          />
        </div>

        <input type="submit" class="submit-btn" value="Add Product" />
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive, ref } from "vue";

const data = reactive({
  name: "",
  price: "",
  description: "",
  category: "",
  img: "3241324",
  colors: "",
  timeRanges: "",
  discount: "",
});
const handleImage = (e) => {
  const file = e.target.files[0];
  data.img = file;
  console.log(data.img);
};

const onSubmit = async () => {
  if (
    data?.price &&
    data?.name &&
    data?.description &&
    data?.category &&
    data?.img &&
    data?.timeRanges &&
    data?.img
  ) {
    const newData = new FormData();
    newData.append("file", data?.img);
    newData.append("upload_preset", "uploads");
    const imgUploaded = await axios.post(
      "https://api.cloudinary.com/v1_1/dnokvmwmd/image/upload",
      newData
    );
    const { url } = imgUploaded.data;
    const res = await axios.post(`http://localhost:4040/products/`, {
      ...data,
      img: url,
    });
    console.log(res);
  } else {
    alert("Please provide stared fields");
  }
};

// export default {
//   name: "Login",

//   setup() {
//     const data = ref("abel");

//     return {
//       data,
//       productName: "",
//       price: "",
//       description: "",
//       category: "",
//       img: "",
//       colors: "",
//       timeRanges: "",
//       discount: "",
//     };
//   },
//   methods: {
//     async submitProduct() {
//       console.log(this.data.value);
//       // if (
//       //   this.productName == ""
//       // ) {
//       //   alert("please provide with all required fields");
//       //   return;
//       // } else {
//       //   const data = {
//       // //     name: this.productName,
//       //     price: this.price,
//       //     category: this.category,
//       //     description: this.description,
//       //     discount: this.discount,
//       //     img: this.img,
//       //     colors: this.colors,
//       //     timeRanges: this.timeRanges,
//       //   };
//       //   const res = await axios.post(`http://localhost:4040/products/`, data);
//       //   console.log(res);
//       // }
//     },
//   },
// };
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Croissant+One&family=Dosis:wght@200;300;400;500;600;700;800&family=Mooli&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
/* font-family: 'Caveat', cursive; */
/* font-family: 'Croissant One', cursive; */
/* font-family: 'Dosis', sans-serif; */
/* font-family: 'Mooli', sans-serif; */
/* font-family: 'Outfit', sans-serif; */
/* font-family: 'Roboto', sans-serif; */
.create-product-container {
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;

  gap: 6rem;

  font-family: "Outfit", sans-serif;
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
.add-product-form {
  width: 60%;

  padding: 20px;
  border: 1px solid #90cbc9;
  border-radius: 5px;
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
.admin-information-navigation {
  width: 20%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  /* margin-right: 3rem; */
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
</style>