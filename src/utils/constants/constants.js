/*auth*/

export const registerUrl = "https://eco-sports.herokuapp.com/auth/register";

export const loginUrl = "https://eco-sports.herokuapp.com/auth/login";

/*product*/

export const products_url = "https://eco-sports.herokuapp.com/product/all";

export const single_product_url = `https://eco-sports.herokuapp.com/product/`;

export const productbyIdDelete = `https://eco-sports.herokuapp.com/product/`;

export const productAddUrl = `https://eco-sports.herokuapp.com/product/add`;

/**users*/

export const GetallUsers = "https://eco-sports.herokuapp.com/user/all";
export const GetUserId = "https://eco-sports.herokuapp.com/user/";
export const deleteUserById = "https://eco-sports.herokuapp.com/user/";

// https://sport-eco.herokuapp.com/review/add

/*reviews*/

export const reviewUrlPost = "https://eco-sports.herokuapp.com/review/add";

const paymentobj = {
  total: "1000",
  currency: "USD",
  "payment Method": "paypal",
  intent: "sale",
  "Payment Description": "pagado correctamente",
};
