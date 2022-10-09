export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const fileUpload = async (formData = [], content) => {
  if (!formData) throw new Error("no tenemos ningun archivo a subir");

  const Url = "https://sport-eco.herokuapp.com/product/add";

  try {
    const res = await fetch(Url, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("no se puedo subir imagen ");

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
