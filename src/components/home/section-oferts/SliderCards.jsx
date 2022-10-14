import { Card } from "../../sharedComponents/card/Card";
import { useProductsContext } from "../../../context/products_context";
import { DiscountComponent } from "../../../stylesComponents/DiscountComponent";
import "./SliderCards.css";
import { Heart } from "../../../stylesComponents/Heart";
export const SliderCards = () => {
  const { featured_products: featured } = useProductsContext();

  return (
    <div className="SliderCards">
      {featured.slice(0, 4).map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            porcent="-50%"
            image={item.imgList[0].fileUrl}
            text="Tommy Hilfiger padded jackets - black with..."
            price="55"
            stars={item.stars}
            Discount={<DiscountComponent />}
            Heart={<Heart />}
          />
        );
      })}
    </div>
  );
};
