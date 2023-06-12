import { Elements } from "@stripe/react-stripe-js";
import SectionHeader from "../../components/SectionHeader";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <main>
            <SectionHeader miniTitle={'pay for access'} bigTitle={'Payment'}></SectionHeader>
            <section>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </section>
        </main>
    );
};

export default Payment;