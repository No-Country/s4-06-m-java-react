import React from "react";
import "../components/paypal/payment.css";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export const PaymentScreen = () => {
  const createOrder = async () => {
    try {
      const response = await fetch("url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value: 1000,
        }),
      });

      const responseData = await response.json();

      if (responseData.error) {
        throw new Error(responseData.message);
      }

      return responseData.orderID;
    } catch (e) {
      console.log(e.message);
    }
  };
  const onApprove = (data) => {
    console.log(data);
  };
  return (
    <div className="paymentContainer">
      <div className="subPaymentContainer">
        <div className="paymentMethodContainer">
          <div className="subPaymentMethodContainer">
            <div className="paragraphContainer">
              <p className="colorChooseThe">Choose the</p>
              <p className="paymentmeth">payment method</p>
            </div>
            <div className="buttonsPayContainer">
              <div className="wrapper-paypal-custom">
                <div className="containerpaypalButton">
                  <PayPalScriptProvider
                    options={{
                      "client-id":
                        "AX3zcQlLa0eRLfFezweDWnBEz8-uamICBoGUP3FkpLM8dLk4A4kZr6vDI5TkQqsTyzkq7fI5PKUsH-1",
                      currency: "USD",
                    }}
                  >
                    <PayPalButtons
                      style={{
                        color: "blue",
                        shape: "pill",
                        label: "pay",
                        height: 45,
                      }}
                      //   createOrder={createOrder}
                      //   onApprove={onApprove}
                    ></PayPalButtons>
                  </PayPalScriptProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
