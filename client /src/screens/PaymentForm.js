import React, { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_stripe_publishable_key');

const PaymentForm = () => {
    const [amount, setAmount] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        try {
            const response = await axios.post('/api/payment/process', { amount: parseFloat(amount) * 100 }); // Convert amount to cents
            const { clientSecret } = response.data;
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            if (result.error) {
                console.error('Payment failed:', result.error.message);
                alert('Payment failed. Please try again later.');
            } else {
                console.log('Payment successful');
                alert('Payment successful!');
            }
        } catch (error) {
            console.error('Error processing payment:', error);
            alert('Failed to process payment. Please try again later.');
        }
    };

    const handleChange = (e) => {
        setAmount(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Amount ($):</label>
                <input type="number" value={amount} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Card details:</label>
                <CardElement className="form-control" options={{ style: { base: { fontSize: '16px' } } }} />
            </div>
            <button type="submit" className="btn btn-primary">Submit Payment</button>
        </form>
    );
};

const StripePaymentForm = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    );
};

export default StripePaymentForm;
