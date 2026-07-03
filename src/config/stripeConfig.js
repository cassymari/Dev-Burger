import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51TmM2BCgUxcWGubni76YDojQD2uN5AccuqUdMsiURvIFsqivzZ4tWqk9U0oAYQjxRGpGA148wxIvyyNTeUeQAyrj00GtrGryeC'
);

export default stripePromise;