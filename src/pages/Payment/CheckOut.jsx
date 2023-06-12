import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const {paymentPrice} = useContext(AuthContext);
    console.log(paymentPrice);

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error.message);
        } else {
            console.log(paymentMethod);
            setCardError('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {cardError && <p className="text-red-500">{cardError}</p>}
            {/* {transactionId && <p className="text-green-500">Transaction complete. TransactionID: {transactionId}</p>} */}
            <button className="table-btn" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckOut;