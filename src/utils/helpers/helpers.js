export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const productAdd = async (formData = [], token) => {
  if (!formData) throw new Error("no tenemos ningun archivo a subir");

  const Url = "https://eco-sports.herokuapp.com/product/a";

  try {
    const res = await fetch(Url, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: token,
        // "content-type": "multipart/form-data",
        // "content-type": "application/json",
      },
    });

    if (!res.ok) throw new Error("no se pudo subir ");

    const data = await res.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const getUniquesValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  return ["all", ...new Set(unique)];
};
