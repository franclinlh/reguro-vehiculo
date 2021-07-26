import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Contacto = () => {
  return (
    <div className="contacto">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="contacto__logo">
              <img src="/images/rimac_rojo.png" alt="logo rimac"></img>
            </div>
            <p className="contacto__parrafo">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius; dignissim elementum. Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare.
            </p>
            <ul className="contacto__ul">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaPinterest />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaWhatsapp />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
