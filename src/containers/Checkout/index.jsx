import {useLocation} from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';
import stripePromise from '../../config/stripeConfig';
import  CheckoutForm  from '../../components/Stripe/CheckoutForm';

export function Checkout() {
     const location = useLocation();

  const clientSecret = location.state?.clientSecret;

  if (!clientSecret) {
    return <div>Client Secret não encontrado</div>;
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{ clientSecret }}
    >
      <CheckoutForm />
    </Elements>
  );
}