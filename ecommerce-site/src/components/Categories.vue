<template>
  <div class="create-product-container">
  <div class="admin-mother-container">
    
      <svg xmlns="http://www.w3.org/2000/svg"  @click="toggleProfile"  class="admin-bar" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

      <div
        class="admin-information-navigation"
        :class="{
          'hide-admin-navigation': showProfile,
        }"
      >
        <div class="profile-container">
          <div class="link-profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="profile-icon"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
              @click="navigateHome"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>

            <p>Admin</p>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              class="close-profile"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
              @click="toggleProfile"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div class="admin-pic-label">
          <img src="../assets/cutepie23.png" alt="" class="admin-pic" />
          <router-link to="/">
            <button class="log-btn" @click="signOut">logout</button>
          </router-link>
        </div>
        <div class="profile-container">
          <router-link to="/admin/profile" class="link-profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
              class="profile-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <p>Profile</p>
          </router-link>
        </div>
        <div class="categories-container">
          <router-link to="/admin/category" class="link-profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
              class="profile-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>

            <p>Categories</p>
          </router-link>
        </div>
        <div class="Add-product-container">
          <router-link to="/admin/add-products" class="link-profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
              class="profile-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p>Add Products</p>
          </router-link>
        </div>
        <div class="view-products-container">
          <router-link to="/admin/view-products" class="link-profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
              class="profile-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <p>View Products</p>
          </router-link>
        </div>
        <div class="user-request-container">
          <router-link to="/admin/view-users" class="link-profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
              class="profile-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p>View User</p>
          </router-link>
        </div>
   
      </div>
    </div>
         <div class="category-all-container">

           <SingleCategory />
          </div>
  </div>
</template>

<script setup>
import SingleCategory from "./SingleCategory.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue";
const store = useStore();
const router = useRouter();
const showProfile = ref(true);
const toggleProfile = () => {
  showProfile.value = !showProfile.value;
};
const signOut = () => {
  store.commit("signOut");
  router.push("/");
};
const navigateHome = () => {
 
  router.push("/");
}
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
.link-profile {
  list-style: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  /* gap: 2rem; */
}
.profile-icon {
  width: 20px;
  height: 20px;
  /* fill: orange; */
  /* color: orange; */
  margin-top: -0.2rem;
  /* border: 1px solid orange;
  border-radius: 50%; */
}
.log-btn {
  /* padding: 5px 10px; */
  background: #90cbc9;
  border: 1px solid #90cbc9;
  color:white;
  padding: 5px 8px;
  font-size: 0.6rem;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  border-radius: 10px;
   cursor: pointer;
  
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
.price-container {
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
  font-size: 0.8rem;
}
.product-price {
  font-family: "Dosis", sans-serif;
  color: white;
  background-color: #064240;
  padding: 0px 5px;
  font-size: 0.9rem;
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
  transition: all 0.5s ease-in-out;
}
.active-category {
  background: orange;
  padding: 2px 10px;
  color: white;
  border-radius: 20px;
  transition: all 0.5s ease-in-out;
}
.profile-container .close-profile {
  display: none;
  width: 0px;
  height: 0px;
}
.admin-bar {
  display: none;
}
.category-all-container{
  width: 100%;
}
@media screen and (max-width: 930px) {
  .profile-all {
    width: 80%;
  }
  /* admin all navigation resonsive */
  .admin-mother-container {
    width: 10%;
  }
  .admin-bar {
    width: 30px;
    height: 30px;
    color: #718b8a;
    fill: #90cbc9;
    position: absolute;
    display: block;
    top: 10px;
    margin-left: 1rem;
    z-index: 3;
    /* background: #709290;; */
    border: 1px solid #709290;
    border-radius: 50%;
  }
  .admin-pic-label {
      width: 100%;
      display: flex;
      align-items: center;
    
      justify-content: space-between;
      gap: 3rem;
      margin: 0rem;
    
      border-bottom: 1px solid rgb(184, 183, 183);
      padding: 5px;
    }
    .admin-pic-label p {
      font-weight: 600;
      color: #064240;
    }
  .admin-information-navigation {
    width: 100%;
    z-index: 4;
    border-top-right-radius: 0px;
    transition: all 0.3s ease-in-out;
  }
  .admin-information-navigation .close-profile {
    display: block;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 5px;
    right: 5px;
  }
  .hide-admin-navigation .link-profile {
    width: 0%;
    font-size: 0;
  }
  .hide-admin-navigation .profile-container .close-profile {
    display: none;
  }
  .hide-admin-navigation .admin-pic-label,
  .hide-admin-navigation .close-profile {
    display: none;
  }
  .hide-admin-navigation .profile-container,
  .hide-admin-navigation .categories-container,
  .hide-admin-navigation .Add-product-container,
  .hide-admin-navigation .view-products-container,
  .hide-admin-navigation .user-request-container {
    width: 0%;
    font-size: 0;
    border: none;
   
  }
  
  .hide-admin-navigation .close-profile {
    display: none;
  }
  .hide-admin-navigation {
      width: 0%;
      height:0;
      /* background: transparent; */
      /* height: 100vh; */
      transition: all .5s ease-out;
      /* display:none; */
      font-size: 0;
      background: #064240;
      color:#064240;
      
    }
  .hide-admin-navigation *{
      width: 0%;
      height: 0%;
     font-size: 0;
     display:none;
      
    }
    .create-product-container {
  width: 100%;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;
  gap: 0rem;
  position: relative;
  /* background:red; */

  font-family: "Outfit", sans-serif;
}
.category-all-container{
  width: 100%;
  position:absolute;
  top: 10px;
}
    
}
</style>