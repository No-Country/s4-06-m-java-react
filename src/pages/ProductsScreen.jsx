import Products from "../components/products/Products";
import { Footer } from "../components/sharedComponents/footer/Footer";
import InputSearch from "../components/sharedComponents/inputSearch/InputSearch";
import ListCategories from "../components/sharedComponents/ListCategories/ListCategories";
import { Nav } from "../components/sharedComponents/nav/Nav";

const ProductsScreen = () => {
  return (
    <div className="ProductsScreen">
      <Nav inputSearch={<InputSearch />} />
      <p className="title-section">Nuestros Productos</p>
      <ListCategories />
      <Products />
      <Footer />
    </div>
  );
};

export default ProductsScreen;
