import { FlashDeeal } from "../components/home/section-flash-deal/FlashDeeal";
import { HeroCard } from "../components/home/section-HeroCard/HeroCard";
import { SliderCards } from "../components/home/section-oferts/SliderCards";
import { Nav } from "../components/sharedComponents/nav/Nav";

export const HomeScreen = () => {
  return (
    <div className="homeScreen container-principal" id="home">
      <Nav />
      {/* section HeroCard */}
      <HeroCard />
      {/* section new offers */}
      <p className="title-section" id="nuevas-ofertas">
        Nuevas Ofertas
      </p>
      <SliderCards />
      {/* section flash deal */}
      <p className="title-section" id="ofertas-relampago">
        Oferta Relampago
      </p>

      <FlashDeeal />
    </div>
  );
};
