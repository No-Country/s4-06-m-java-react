import "./Footer.css";
import footerImage from "../../../assets/images/footer/footerImage.png";
import footerMobile from "../../../assets/images/footer/FooterMobile.png";
export const Footer = () => {
  return (
    <div className="Footer">
      <img className="Footer__Image" src={footerMobile} alt="tree" />
      <img className="Footer__Imagedesktop" src={footerImage} alt="tree" />

      <div className="Footer-content">
        <button className="button button--White">
          Conoce Nuestra Historia
        </button>

        <ul className="Footer-content__list">
          <div className="Footer-content__list__wrapperItem">
            <li className="Footer-content__list__item">Hombre</li>
            <li className="Footer-content__list__item">Mujer</li>
            <li className="Footer-content__list__item">Ninos</li>
          </div>
          <div className="Footer-content__list__wrapperItem">
            <li className="Footer-content__list__item">Soporte</li>
            <li className="Footer-content__list__item">Cuenta</li>
            <li className="Footer-content__list__item">Devoluciones</li>
          </div>
        </ul>

        <span className="Footer-content__rightReserved">
          © 2021 FIFAH. All Right Reserved
        </span>
      </div>
    </div>
  );
};
