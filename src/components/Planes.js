import React from "react";

const Planes = () => {
  const [cabeceraplan] = React.useState({
    plan: "ESCOJE UN PLAN",
    subplan: "Precio del Plan",
    descripcion: "lorem lorem lorem lorem lorem lorem lorem lorem",
  });
  const [stado] = React.useState([
    {
      id: 1,
      heading: "Básico",
      precio: 50,
      msj1: "Lorem lorem lorem lorem",
      msj2: "Lorem lorem lorem lorem",
      msj3: "Lorem lorem lorem lorem",
      msj4: "Lorem lorem lorem lorem",
      msj5: "Lorem lorem lorem lorem",
    },
    {
      id: 2,
      heading: "Estandar",
      precio: 100,
      msj1: "Lorem lorem lorem lorem",
      msj2: "Lorem lorem lorem lorem",
      msj3: "Lorem lorem lorem lorem",
      msj4: "Lorem lorem lorem lorem",
      msj5: "Lorem lorem lorem lorem",
    },
    {
      id: 3,
      heading: "Premiun",
      precio: 250,
      msj1: "Lorem lorem lorem lorem",
      msj2: "Lorem lorem lorem lorem",
      msj3: "Lorem lorem lorem lorem",
      msj4: "Lorem lorem lorem lorem",
      msj5: "Lorem lorem lorem lorem",
    },
  ]);
  return (
    <div className="precios">
      <div className="container">
        <div className="precios__tituloG">
          <h3>{cabeceraplan.plan}</h3>
          <h1>{cabeceraplan.subplan}</h1>
          <p>{cabeceraplan.descripcion}</p>
          <div className="precios__tituloG-botton"></div>
        </div>
        <div className="row">
            {stado.map(precios => (
          <div className="col-4" key={precios.id}>
            <div className="precio">
              <div className="precio__cabecera">{precios.heading}</div>
              <div className="precio__rs">
                <span>$</span>{precios.precio}
              </div>
              <ul>
                <li>{precios.msj1}</li>
                <li>{precios.msj2}</li>
                <li>{precios.msj3}</li>
                <li>{precios.msj4}</li>
                <li>{precios.msj5}</li>
              </ul>
              <div className="precio__buton">
                   <a href="#" className="btn-outline">Cotizar</a>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planes;
