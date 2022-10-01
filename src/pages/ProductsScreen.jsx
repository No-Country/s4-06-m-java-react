import Products from "../components/products/Products";
import ListCategories from "../components/sharedComponents/ListCategories/ListCategories";

const ProductsScreen = () => {
  return (
    <div className="ProductsScreen">
      <p className="title-section">Nuestros Productos</p>

      <ListCategories />

      <Products />
    </div>
  );
};

export default ProductsScreen;
