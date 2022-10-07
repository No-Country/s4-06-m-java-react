export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const fileUpload = async (file = [], content) => {
  if (!file) throw new Error("no tenemos ningun archivo a subir");

  const Url = "https://sport-eco.herokuapp.com/product/add";

  const formData = new FormData();
  formData.append("postimages", file);
  formData.append("product", content);

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
