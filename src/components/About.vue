<template>
  <div class="about-container">
    <div class="left-side">
      <h1 class="about-header left-header">About Us</h1>
      <svg
        fill="none"
        class="news-icon"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        ></path>
      </svg>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime enim ea
        repudiandae et sapiente nihil, natus deleniti doloremque iste dolorum.
        Corporis numquam eum aperiam. Aliquid!
      </p>
      <button class="discover-more">Discover More</button>
    </div>
    <div class="center-side">
      <img src="../assets/girl-standing.png" alt="girl" class="middle-img" />
    </div>
    <div class="right-side">
      <h1 class="about-header">Our History</h1>
      <svg
        fill="none"
        class="news-icon"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        ></path>
      </svg>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
        consectetur, sapiente quos, cupiditate architecto aperiam vitae, minima
        ipsam dolore labore magni error dolorum quod nesciunt.
      </p>
      
      <button class="discover-more">Know More</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
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
.about-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}
.left-header{
      text-align: right;
}
.left-side{
      display :flex ;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
}
.news-icon {
  width: 30px;
  height: 30px;
  color: #709290;
  fill: #709290;
  color: black;
  margin-bottom: 1rem;
  
}
.middle-img {
  width: 300px;
  height: 300px;
  object-fit: contain;
}
.about-header {
  /* font-family: 'Croissant One', cursive; */
  font-family: "Dosis", sans-serif;
  font-weight: 500;
  color: #b0cdcb;
}
.description {
      font-family: "Caveat", cursive;
      font-family: "Dosis", sans-serif;
  font-weight: 500;
  font-size: .8rem;
  width: 400px;
  /* font-family: 'Mooli', sans-serif; */
  margin-bottom: 1rem;
}
.discover-more {
  padding: 6px;
  font-family: "Dosis", sans-serif;
  background: #709290;
  border: 1px solid #709290;
  border-radius: 1em;
  color: white;
}
</style>