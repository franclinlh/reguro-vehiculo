import React from "react";

const About = () => {
  const [state] = React.useState({
    heading: "¿Quines somos?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo possimus voluptatum qui quae accusantium porro rerum sit quod, atque quos necessitatibus sunt architecto, quaerat repellendus culpa nemo amet voluptatibus ab? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed numquam magni illo. Nemo provident nobis vero, autem sint officia porro. Provident similique aliquam voluptate sunt minus doloremque pariatur quidem necessitatibus!",
  });
  const [secciones] = React.useState([
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.5em"
          height="2.5em"
          fill="currentColor"
          class="bi bi-card-checklist"
          viewBox="0 0 16 16"
        >
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
          <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
        </svg>
      ),
      heading: "Vocación de servicio",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      icon: (
        <svg
          width="2.5em"
          height="2.5em"
          viewBox="0 0 16 16"
          class="bi bi-tv"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"
          />
        </svg>
      ),
      heading: "Excelencia",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      icon: (
        <svg
          width="2.5em"
          height="2.5em"
          viewBox="0 0 16 16"
          class="bi bi-layers"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3.188 8L.264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l-1.063.567L14.438 10 8 13.433 1.562 10 4.25 8.567 3.187 8z"
          />
          <path
            fill-rule="evenodd"
            d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4zM1.563 6L8 9.433 14.438 6 8 2.567 1.562 6z"
          />
        </svg>
      ),
      heading: "Compromiso",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h4 className="about__h4">{state.heading}</h4>
          </div>
          <div className="col-9">
            <div className="about__text">
              <p>{state.text}</p>
            </div>
          </div>
        </div>
        <div className="row mt-60">
          {secciones.map((seccion) => (
            <div className="col-4 pl-15" key={seccion.id}>
              <div className="about__section">
                <div className="about__section-icon">{seccion.icon}</div>
                <div className="about__section-heading">
                  <h6>{seccion.heading}</h6>
                </div>
                <div className="about__section-text">
                  <p>{seccion.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
