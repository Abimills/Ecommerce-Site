<template>
  <div class="mother-container">
    <div class="container" v-motion
    :initial="{
      opacity: 0,
      x: 10,

    }"
    :enter="{
      opacity: 1,
      x: 0,
    }">
      <div class="screen">
        <div class="screen__content">
          <form class="login" @submit.prevent="handleSubmit">
            <div class="login__field">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="user-icon"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <input
                type="text"
                class="login__input"
                placeholder="Name"
                v-model="name"
              />
            </div>
            <div class="login__field">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="user-icon"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>

              <input
                type="text"
                class="login__input"
                placeholder="Email"
                v-model="email"
              />
            </div>
            <div class="login__field">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="user-icon"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <input
                type="password"
                class="login__input"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <button class="button login__submit" type="submit">Sign Up</button>
          </form>
          <div class="social-login">
            <router-link to="/login" class="link">
              <h3 :class="{ 'dark-login': store.state.mode === 'light' }">
                Login
              </h3>
            </router-link>
            <div class="social-icons">
              <a href="#" class="social-login__icon fab fa-instagram"></a>
              <a href="#" class="social-login__icon fab fa-facebook"></a>
              <a href="#" class="social-login__icon fab fa-twitter"></a>
            </div>
          </div>
        </div>
        <div class="screen__background">
          <span
            class="screen__background__shape screen__background__shape4"
          ></span>
          <span
            class="screen__background__shape screen__background__shape3"
          ></span>
          <span
            class="screen__background__shape screen__background__shape2"
          ></span>
          <span
            class="screen__background__shape screen__background__shape1"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
const toast = useToast();
const router = useRouter();
const store = useStore();
const data = ref([]);
const name = ref("");
const email = ref("");
const password = ref("");
const handleSubmit = () => {
  if (name.value && email.value && password.value) {
    axios
      .post(`https://my-ecommerce-bkends.onrender.com/users/register`, {
        name: name.value,
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        if (res.data.success) {
            toast.success("Successfully Registered", {
            timeout: 2000,
          });
          router.push({ name: "login" });
        } else {
          toast.warning("something went wrong with registration", {
            timeout: 2000,
          });
        }
      })
      .catch((err) => console.log(err));
  } else {
    toast.warning("Please provide all fields", {
      timeout: 2000,
    });
  }
};
watch(data.value, (newValue, oldValue) => {
  console.log(newValue);
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
.mother-container {
  width: 100%;
}
.container {
  width: 100%;
  min-height: 600px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: max-content;
  position: relative;
  font-family: "Caveat", cursive;
  /* display: none; */
    transition: all 1s ease-in-out ;
}

.screen {
  position: relative;
  height: 550px;
  width: 400px;
  box-shadow: 0px 0px 24px rgb(139, 123, 93);
  border-radius: 10px;
  /* margin-top: 2rem; */
  overflow: hidden;
}
.link {
  text-decoration: none;
  color: white;
}

.screen__content {
  z-index: 1;
  position: relative;
  height: 100%;
  border-radius: 20px;
}
.user-icon {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 26px;
  color: #7875b5;
}

.screen__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
  border-radius: 20px;
}

.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}

.screen__background__shape1 {
  height: 520px;
  width: 520px;
  background: #fff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: #90cbc9;
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, wheat, #90cbc9);
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: #90cbc9;
  top: 420px;
  right: 50px;
  border-radius: 60px;
}

.login {
  width: 320px;
  padding: 30px;
  padding-top: 156px;
}

.login__field {
  padding: 20px 10px;
  position: relative;
  background: transparent;
}

.login__input {
  border: none;
  border-bottom: 2px solid #e4e4e7;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 78%;
  font-size: 1rem;
  transition: 0.2s;
  color: #e4e4e7;
  color: #4c489d;
  background: transparent;
  margin-top: -0.2rem;
  font-family: "Caveat", cursive;
  /* font-family: 'Croissant One', cursive; */
  /* font-family: 'Dosis', sans-serif; */
  /* font-family: 'Mooli', sans-serif; */
  /* font-family: 'Outfit', sans-serif; */
  /* font-family: 'Roboto', sans-serif; */
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  color: #4c489d;
  border-bottom-color: orange;
}

.login__submit {
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid white;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  color: #4c489d;
  font-family: "Roboto", sans-serif;
  /* box-shadow: 0px 2px 2px #5c5696; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: pointer;
  transition: 0.2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #6a679e;
  outline: none;
}

.button__icon {
  font-size: 24px;
  margin-left: auto;
  color: #7875b5;
}

.social-login {
  position: absolute;
  height: 140px;
  width: 160px;
  text-align: center;
  bottom: 0px;
  right: 0px;
  color: #fff;
  cursor: pointer;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-login__icon {
  padding: 20px 10px;
  color: #fff;
  text-decoration: none;
  text-shadow: 0px 0px 8px #7875b5;
}

.social-login__icon:hover {
  transform: scale(1.5);
}
.dark-login {
  color: black;
}
</style>