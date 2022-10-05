import { Card } from "../../sharedComponents/card/Card";
import TshirtYellow from "../../../assets/images/card/t-shirt1.png";
import TshirtWhite from "../../../assets/images/card/t-shirt2.png";
import TshirtRed from "../../../assets/images/card/t-shirt3.png";
import TshirtWhiteAndGrenn from "../../../assets/images/card/t-shirt4.png";
import "./SliderCards.css";
import { Link } from "react-router-dom";
export const SliderCards = () => {
  const NuevasOfertastemporal = ["nueva1", "nueva2", "nueva3", "nueva4"];
  return (
    <div className="SliderCards">
      {NuevasOfertastemporal.map((item) => {
        return (
          <Card
            key={item}
            id={item}
            porcent="-50%"
            image={TshirtYellow}
            text="Tommy Hilfiger padded jackets - black with..."
            price="55"
            discount="110"
          />
        );
      })}
    </div>
  );
};
