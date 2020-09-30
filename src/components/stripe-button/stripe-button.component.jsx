import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ totalAmount }) => {
  const amountForStripe = totalAmount * 100;
  const publishableKey = "pk_test_51HWj4hD1IVTAQj5YvlWmW9ycnswJJziCF3UaKXiGRhJVHQS3nFyAEICRUTfGrEIJBZiC8kX63VYiyGvAwRKPL7rk00MAgHMOED";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${totalAmount}`}
      amount={amountForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="USD"

    />
  );
}

export default StripeCheckoutButton;