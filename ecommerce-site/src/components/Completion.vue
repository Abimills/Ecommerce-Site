<template>
  <div class="pizza-finish-payment">
    <h1 class="thank-you">Your order is on the way!</h1>
    <div class="pizza-icon-container">
      <IoPizza class="pizza-icon one" />
      <TbPizza class="pizza-icon two" />
      <IoIosPizza class="pizza-icon three" />
      <TbPizza class="pizza-icon" />
    </div>
    <div class="text-container">
      <p class="smart-text-pizza">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        omnis laboriosam sapiente reprehenderit nisi sed voluptatum earum!
        Perferendis in ex dignissimos sequi quaerat!
      </p>
    </div>
    <div class="icons-container">
      <BsFillBalloonHeartFill />
      <p>🎉</p>
    </div>
    <p class="pizzafam-thank">Thank you for choosing pizzaFam</p>
  </div>
</template>

<script setup>
import { BsFillBalloonHeartFill } from 'react-icons/bs';
import { IoPizza, IoIosPizza } from 'react-icons/io5';
import { TbPizza } from 'react-icons/tb';
</script>
