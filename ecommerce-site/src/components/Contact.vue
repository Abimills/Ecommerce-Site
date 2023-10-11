<template>
  <div class="contact-us-page-container" >
    <div class="my-logo-with-pic-contact-container" v-motion
    :initial="{
      opacity: 0,
      y: 40,

    }"
    :enter="{
      opacity: 1,
      y: 0,
    }">
      <img src="../assets/person.png" alt="" class="tempo-abel-pic" />
    </div>
    <div class="all-input-contact-container" v-motion
    :initial="{
      opacity: 0,
      y: -50,

    }"
    :enter="{
      opacity: 1,
      y: 0,
    }">
      <h1 class="get-in-touch">Contact us</h1>
      <p class="interested-para">
        Want to have a conversation? <br />
        lets make it happen!
      </p>
      <form class="form-control" @submit.prevent="handleSubmit">
        <div class="contact-name-user">
          <input
            type="text"
            placeholder="First Name"
            class="name"
            v-model="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            class="name"
            v-model="lastName"
          />
        </div>
        <div class="email-container">
          <input
            type="email"
            placeholder="Email"
            class="email"
            v-model="email"
          />
        </div>
        <div class="phone-container">
          <input
            type="text"
            placeholder="Phone"
            class="phone"
            v-model="phone"
          />
        </div>
        <div class="text-area-container">
          <textarea
            type="text"
            placeholder="Write your comment here"
            class="comment"
            v-model="text"
          ></textarea>
        </div>
        <div class="send-btn-container">
          <button class="send-contact-comments" type="submit">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const text = ref("");
const handleSubmit = () => {
  if (
    firstName.value &&
    lastName.value &&
    email.value &&
    phone.value &&
    text.value
  ) {
    toast.success(`Thank you ${firstName.value}, We will get back to you!`, {
      timeout: 2000,
    });
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phone.value = "";
    text.value = "";
  } else {
    toast.warning(`Please fill all fields`, {
      timeout: 2000,
    });
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
.contact-us-page-container {
  /* TODO: check for any errors */
  width: 100%;
  display: flex;
  /* margin-bottom: -1.7rem; */
  margin-top: 3rem;
}
.my-logo-with-pic-contact-container {
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
     transition: all 1s ease-in-out ;
}
.my-logo-with-pic-contact-container {
  width: 50%;
}
.tempo-abel-pic {
  width: 350px;

  object-fit: contain;
}
.all-input-contact-container {
  width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
   transition: all 1s ease-in-out ;
}
.get-in-touch {
  font-size: 3rem;
  text-transform: uppercase;
  font-family: "Croissant One", cursive;
  /* font-family: 'Dosis', sans-serif; */
  /* font-family: 'Mooli', sans-serif; */
  font-family: "Outfit", sans-serif;
  font-weight: 100;
  color: #709290;
}
.interested-para {
  font-family: "Dosis", sans-serif;
  color: #709290;
  margin: 1rem 0;
}
.name {
  padding: 10px;
  width: 40%;
  outline: none;
  font-family: "Dosis", sans-serif;
  border: 1px solid #709290;
  background: #709290;
  margin: 0.3rem;
  color: white;
}
.name::placeholder {
  color: white;
}
.email,
.phone,
.comment {
  width: 81%;
  padding: 10px;
  margin: 0.3rem;
  outline: none;
  font-family: "Dosis", sans-serif;
  border: 1px solid #dcdbdb;
  background: #f7f7f7;
}
.send-contact-comments {
  width: 81%;
  padding: 10px;
  margin: 0.3rem;
  border: 1px solid #709290;
  font-family: "Dosis", sans-serif;
  background-color: #709290;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}
@media screen and (max-width: 550px) {
  .my-logo-with-pic-contact-container {
    display: none;
  }
  .all-input-contact-container {
    width: 100%;
    margin: 0;
    justify-content: center;
    /* margin-top: 3rem; */
  }

  .get-in-touch {
    text-align: center;
  }
  .interested-para {
    text-align: center;
  }
  .form-control {
    text-align: center;
  }
}
@media screen and (max-width: 300px) {
  .get-in-touch {
    font-size: 1.9rem;
  }
  .interested-para {
    font-size: 0.9rem;
  }
  .name {
    width: 45%;
  }

  .email,
  .phone,
  .comment {
    width: 93%;
  }
  .send-contact-comments {
    width: 93%;
  }
}
</style>


