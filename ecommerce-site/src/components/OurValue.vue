<template>
  <div class="value-container">
    <div class="image-container">
      <img src="../assets/women-2.png" alt="" class="image-value" />
    </div>
    <div class="value-items-container">
      <div class="item">
        <font-awesome-icon icon="fa-solid fa-truck" class="truck-icon" />
        <div class="written-container">
          <h4 class="header-written">Fast Delivery</h4>
          <p class="text-written">Order your fav product</p>
        </div>
      </div>

      <div class="item">
        <font-awesome-icon icon="fa-solid fa-headphones" class="truck-icon" />
        <div class="written-container">
          <h4 class="header-written">Customer Service</h4>
          <p class="text-written">24/7 customer services</p>
        </div>
      </div>

      <div class="item">
        <font-awesome-icon
          icon="fa-solid fa-money-check-dollar"
          class="truck-icon"
        />
        <div class="written-container">
          <h4 class="header-written">Free Return Policy</h4>
          <p class="text-written">Read our Policy on our free return</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurValue",
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
.value-container {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  background-color: aliceblue;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  overflow: hidden;
}
.image-value {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
.value-items-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}
.written-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
}
.header-written {
  font-family: "Mooli", sans-serif;
  font-size: 0.95rem;
  letter-spacing: 2px;
}
.text-written {
  font-family: "Caveat", cursive;
}
.truck-icon {
  font-size: 2rem;
  color: #064240;
}
</style>