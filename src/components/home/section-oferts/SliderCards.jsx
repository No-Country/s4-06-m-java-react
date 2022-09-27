import "./SliderCards.css";
import { Card } from "../../sharedComponents/card/Card";
import TshirtYellow from "../../../assets/images/card/t-shirt1.png";
import TshirtWhite from "../../../assets/images/card/t-shirt2.png";
import TshirtRed from "../../../assets/images/card/t-shirt3.png";
import TshirtWhiteAndGrenn from "../../../assets/images/card/t-shirt4.png";
export const SliderCards = () => {
  return (
    <div className="SliderCards">
      <Card
        porcent="-50%"
        image={TshirtYellow}
        text="Tommy Hilfiger padded jackets - black with..."
        price="55"
        discount="110"
      />
      <Card
        porcent="-50%"
        image={TshirtWhite}
        text="Tommy Hilfiger padded jackets - black with..."
        price="55"
        discount="110"
      />
      <Card
        porcent="-50%"
        image={TshirtRed}
        text="Tommy Hilfiger padded jackets - black with..."
        price="55"
        discount="110"
      />
      <Card
        porcent="-50%"
        image={TshirtWhiteAndGrenn}
        text="Tommy Hilfiger padded jackets - black with..."
        price="55"
        discount="110"
      />
    </div>
  );
};
