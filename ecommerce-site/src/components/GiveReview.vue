<template>
  <div class="mother-review-container">
    <h2 class="header">WE APPRECIATE YOUR REVIEW!</h2>
    <h6 class="customer-app">
      Your review will help us to improve our web hosting quality products, and
      customer services.
    </h6>

    <form class="feedback" @submit.prevent="handleSubmit">
      <h1 class="info-header">Your personal info</h1>

      <div class="form-group">
        <div class="inputGroupContainer">
          <div class="input-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="input-group-addon"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <input
              placeholder="John Doe"
              class="form-control"
              type="text"
              v-model="name"
            />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="input-group-addon"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <input
              type="email"
              class="form-control"
              placeholder="john.doe@gmail.com"
              v-model="email"
            />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="input-group-addon"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <input
              placeholder="London"
              class="form-control"
              type="text"
              v-model="location"
            />
          </div>
        </div>
      </div>

      <div class="pinfo">Rate our overall services.</div>

      <div class="form-group">
        <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 input-group-addon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            <select class="form-control" id="rate" v-model="rating">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </div>

      <p class="feedback-header">Write your feedback.</p>

      <div class="form-group">
        <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
              class="input-group-addon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>

            <textarea
              class="form-control"
              id="review"
              rows="3"
              v-model="review"
            ></textarea>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const name = ref("");
const email = ref("");
const location = ref("");
const rating = ref(1);
const review = ref("");
const handleSubmit = async () => {
  if (
    name.value &&
    email.value &&
    location.value &&
    rating.value &&
    review.value
  ) {
    const data = {
      name: name.value,
      email: email.value,
      location: location.value,
      rating: +rating.value,
      review: review.value,
    };

    const res = await axios.post("http://localhost:4040/reviews/", data);
    
  } else {
    alert("Please fill the necessary fields");
  }
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
.feedback {
  max-width: 60%;
  width: 100%;
  margin: 10px auto;
  padding: 20px;
  border: solid 1px #f1f1f1;
  background: #fbfbfb;
  box-shadow: wheat 0 0 4px;
  border-radius: 0.25rem;
  font-family: "Roboto", sans-serif;
}
.mother-review-container {
  width: 100%;
  font-family: "Roboto", sans-serif;
}
.info-header {
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
}
.feedback-header {
  text-transform: capitalize;
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
}
.header {
  padding: 2px 15px;
  color: white;
  margin: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.customer-app {
  padding: 2px 15px;
  text-align: center;
  font-weight: normal;
  color: #90cbc9;
}

.pinfo {
  margin: 8px auto;
  font-weight: bold;
  line-height: 1.5;
  color: #0d0d0d;
}
.form-group {
  margin-bottom: 1rem;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.8rem;
  line-height: 1.25;
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  /* -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s; */
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:focus {
  color: #696060;
  background-color: #fff;
  border-color: #5cb3fd;
  outline: none;
}

/* .form-control::-webkit-input-placeholder {
  color: #f34949;
  opacity: 1;
} */

/* .form-control::-moz-placeholder {
  color: brown;
  opacity: 1;
} */

/* .form-control:-ms-input-placeholder {
  color: blue;
  opacity: 1;
} */

.form-control::placeholder {
  color: rgb(155, 153, 153);
  font-size: 0.7rem;
}

.form-control:disabled,
.form-control[readonly] {
  background-color: red;
  opacity: 1;
}

select.form-control:not([size]):not([multiple]) {
  height: calc(2.25rem + 2px);
}

.form-control-file,
.form-control-range {
  display: block;
}

.input-group {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}

.input-group .form-control {
  position: relative;
  z-index: 2;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}

.input-group .form-control:focus,
.input-group .form-control:active,
.input-group .form-control:hover {
  z-index: 3;
}

.input-group-addon {
  width: 45px;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.25;
  color: white;
  text-align: center;
  background-color: #90cbc9;
  border: 1px solid #90cbc9;
  border-radius: 0.25rem;
}

.input-group-addon.form-control-sm,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .input-group-addon.btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.input-group-addon.form-control-lg,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .input-group-addon.btn {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.input-group-addon input[type="radio"],
.input-group-addon input[type="checkbox"] {
  margin-top: 0;
}

.btn {
  display: inline-block;
  font-weight: normal;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.btn:focus,
.btn:hover {
  text-decoration: none;
}

.btn:focus,
.btn.focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);
  box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);
}

.btn:active,
.btn.active {
  background-image: none;
}

a.btn.disabled,
fieldset[disabled] a.btn {
  pointer-events: none;
}

.btn-primary {
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-primary:hover {
  color: #fff;
  background-color: #025aa5;
  border-color: #01549b;
}

.btn-primary:focus,
.btn-primary.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);
  box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);
}

.btn-primary.disabled,
.btn-primary:disabled {
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-primary:active,
.btn-primary.active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #025aa5;
  background-image: none;
  border-color: #01549b;
}
</style>