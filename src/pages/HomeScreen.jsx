import { HeroCard } from "../components/home/section-HeroCard/HeroCard";
import { SliderCards } from "../components/home/section-oferts/SliderCards";
import { Nav } from "../components/nav/Nav";
import "../utils/utils.css";
export const HomeScreen = () => {
  return (
    <div className="homeScreen container-principal ">
      <Nav />
      <HeroCard />

      <p className="title-section">Nuevas Ofertas</p>

      <SliderCards />

      <p className="title-section">Oferta Relampago</p>
    </div>
  );
};
