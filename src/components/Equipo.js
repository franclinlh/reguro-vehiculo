import React from "react";

const Equipo = () => {
  const [state] = React.useState([
    { id: 1, image: "/images/01.jpg", nombre: "Franco", puesto: "Asesor financiero" },
    { id: 2, image: "/images/02.jpg", nombre: "Edward", puesto: "Analista" },
    { id: 3, image: "/images/03.jpg", nombre: "Franclin", puesto: "Analista Front End" },
  ]);
  return (
    <div className="equipo">
      <div className="container">
        <div className="equipo__section">
          <div className="row">
            <div className="col-4">
              <div className="equipo__content">
                <h6 className="equipo__content-h6">EMPLEADOS</h6>
                <h3 className="equipo__content-h3">NUESTRO EQUIPO.</h3>
              </div>
            </div>
            <div className="col-8">
              <div className="row">
                {state.map((usuario) => (
                  <div className="col-4 pl-15" key={usuario.id}>
                    <div className="equipo__card">
                      <div className="equipo__card-img">
                        <img src={usuario.image} alt="card" />
                      </div>
                      <h5 className="equipo__card-name">{usuario.nombre}</h5>
                      <p className="equipo__card-expert">{usuario.puesto}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipo;
