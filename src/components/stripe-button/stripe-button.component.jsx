import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken=(token)=>{
    console.log('onToken')
}
const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*1000
    // const publishableKey='1222'
    return <StripeCheckout
        label='payment'
        name='CRWN Clothing'
        billingAddress
        shippingAddress
        description={`yout total is $${price}`}
        amount={priceForStripe}
        panelLabel='pay now'
        token={onToken}
    />

}
export default StripeCheckoutButton