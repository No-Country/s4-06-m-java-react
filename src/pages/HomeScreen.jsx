import { FlashDeeal } from "../components/home/section-flash-deal/FlashDeeal";
import { HeroCard } from "../components/home/section-HeroCard/HeroCard";
import { SliderCards } from "../components/home/section-oferts/SliderCards";



export const HomeScreen = () => {
  return (
    <div className="homeScreen container-principal ">
      {/* section HeroCard */}
      <HeroCard />
      {/* section new offers */}
      <p className="title-section">Nuevas Ofertas</p>
      <SliderCards />
      {/* section flash deal */}
      <p className="title-section">Oferta Relampago</p>

      <FlashDeeal />
    </div>
  );
};
