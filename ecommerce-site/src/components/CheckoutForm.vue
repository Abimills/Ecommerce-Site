<template>
  <form id="payment-form" @submit.prevent="handleSubmit" class="payment-form">
    <PaymentElement :id="paymentElementId" />
    <button :disabled="isProcessing || !stripe || !elements" id="submit" class="pay-btm">
      <span id="button-text">{{ isProcessing ? "Processing ... " : "Pay now" }}</span>
    </button>
    <!-- Show any error or success messages -->
    <div v-if="message" id="payment-message">{{ message }}</div>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { PaymentElement } from '@stripe/vue-stripe-js';
import { useStripe, useElements } from '@stripe/vue-stripe-js';

const stripe = useStripe();
const elements = useElements();

const paymentElementId = 'payment-element';
const message = ref(null);
const isProcessing = ref(false);

const handleSubmit = async () => {
  if (!stripe || !elements) {
    // Stripe.js has not yet loaded.
    // Make sure to disable form submission until Stripe.js has loaded.
    return;
  }

  isProcessing.value = true;

  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      // Make sure to change this to your payment completion page
      return_url: `${window.location.origin}/complete`,
    },
  });

  if (error.type === 'card_error' || error.type === 'validation_error') {
    message.value = error.message;
  } else {
    message.value = 'An unexpected error occurred.';
  }

  isProcessing.value = false;
};
</script>
