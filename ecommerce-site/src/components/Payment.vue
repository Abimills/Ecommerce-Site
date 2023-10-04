<template>
  
</template>

<script setup>

</script>

<style scoped>

</style>
<!-- import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./payment.css";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { AppContext } from "../Context/Context";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const { totalAmount } = useContext(AppContext);

  useEffect(() => {
    fetch("http://localhost:4000/payment/config").then(async (res) => {
      const { publishableKey } = await res.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  const fetchIntent = async () => {
    const totalInCents = totalAmount * 100;

    const response = await axios.post(
      "http://localhost:4000/payment/create-payment-intent",
      { total: totalInCents }
    );
    setClientSecret(response?.data?.clientSecret);
  };

  useEffect(() => {
    // fetch("http://localhost:4000/payment/create-payment-intent", {
    //   method: "POST",
    //   body: JSON.stringify({ total: 300 }),
    // }).then(async (result) => {
    //   var { clientSecret } = await result.json();
    //   setClientSecret(clientSecret);
    // });
    fetchIntent();
  }, []);

  return (
    <>
      <h1 className="payment-header">Total : ${totalAmount}.00</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment; -->