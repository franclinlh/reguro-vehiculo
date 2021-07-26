import React from "react";
import { FaAlignJustify } from "react-icons/fa";
const Navbar = () => {
  const [state, setState] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 120) {
      setState(true);
    } else {
      setState(false);
    }
  };
  const [state2, setState2]=React.useState(true);
  return (
    <div className={`navbar ${state ? "whiteBg" : "transparent"} `}>
      <div className="container">
        <div className="navbar__content">
          <div className="navbar__left">
            <img
              src={
                state ? "/images/rimac_rojo.png" : "/images/rimac_blanco.png"
              }
              alt="logo"
            />
          </div>
          {state2 ? (<ul className="navbar__right">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">portafolio</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="navbar__toggle" onClick={() => setState2(!state2)}><FaAlignJustify /></div>
    </div>
  );
};

export default Navbar;
