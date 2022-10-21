import React from "react";

import styled from "styled-components";
import { Footer } from "../components/sharedComponents/footer/Footer";
import { Nav } from "../components/sharedComponents/nav/Nav";
import { useCartContext } from "../context/cart_context";
import { useProductsContext } from "../context/products_context";
import iconPaypal from "../assets/images/payment/paypal.svg";

export const PaymentScreen = () => {
  const { token } = useProductsContext();

  const { total_amount } = useCartContext();

  const handlerPaypal = async () => {
    try {
      const response = await fetch(
        "https://eco-sports.herokuapp.com/paypalRest/pay",
        {
          method: "POST",
          body: JSON.stringify({
            price: total_amount,
            currency: "USD",
            method: "Paypal",
            intent: "sale",
            description: "eco-sports products",
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      // console.log(response);

      // console.log(response.headers.get("content-type"));

      // response.header.keys();

      let url = await response.text();

      const urlstring = url.slice(9);

      window.location.href = urlstring;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Nav />
      <Wrapper>
        <div className="wrapper-content">
          <h1 className="wrapper-content__title">
            CONTINUA TU PAGO CON PAYPAL
          </h1>

          <img
            src={iconPaypal}
            onClick={handlerPaypal}
            style={{ cursor: "pointer", width: "300px" }}
            alt="paypal"
          />
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 7rem;
  .wrapper-content {
    width: 70%;
    height: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .wrapper-content__title {
  }

  .wrapper-content__btn {
  }
`;

/***********************************metodo 2******************************************/

// import React from "react";
// import "../components/paypal/payment.css";
// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

// export const PaymentScreen = () => {
//   const createOrder = async () => {
//     try {
//       const response = await fetch("url", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           value: 1000,
//         }),
//       });

//       const responseData = await response.json();

//       if (responseData.error) {
//         throw new Error(responseData.message);
//       }

//       return responseData.orderID;
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
//   const onApprove = (data) => {
//     console.log(data);
//   };
//   return (
//     <div className="paymentContainer">
//       <div className="subPaymentContainer">
//         <div className="paymentMethodContainer">
//           <div className="subPaymentMethodContainer">
//             <div className="paragraphContainer">
//               <p className="colorChooseThe">Choose the</p>
//               <p className="paymentmeth">payment method</p>
//             </div>
//             <div className="buttonsPayContainer">
//               <div className="wrapper-paypal-custom">
//                 <div className="containerpaypalButton">
//                   <PayPalScriptProvider
//                     options={{
//                       "client-id":
//                         "AX3zcQlLa0eRLfFezweDWnBEz8-uamICBoGUP3FkpLM8dLk4A4kZr6vDI5TkQqsTyzkq7fI5PKUsH-1",
//                       currency: "USD",
//                     }}
//                   >
//                     <PayPalButtons
//                       style={{
//                         color: "blue",
//                         shape: "pill",
//                         label: "pay",
//                         height: 45,
//                       }}
//                       //   createOrder={createOrder}
//                       //   onApprove={onApprove}
//                     ></PayPalButtons>
//                   </PayPalScriptProvider>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
