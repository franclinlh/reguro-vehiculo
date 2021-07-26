import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import InputReutilizable from "./InputReutilizable";
import { LabelL } from "./InputReutilizable";
const Formulario = () => {
  const [cabeceraFormulario] = React.useState({
    titulo: "CONTACTANOS",
  });
  const [nombreUsu, cambiarUsuario] = React.useState({
    campo: "",
    valido: null,
  });
  const [nombres, cambiarNombre] = React.useState({
    campo: "",
    valido: null,
  });
  const [correoUsu, cambiarCorreo] = React.useState({
    campo: "",
    valido: null,
  });
  const [telefonoUsu, cambiarTelefono] = React.useState({
    campo: "",
    valido: null,
  });
  const [mensajeUsu, cambiarMensaje] = React.useState({
    campo: "",
    valido: null,
  });
  const [terminos, cambiarTermino] = React.useState(false);
  const [formularioValido, cambiarFormulario] = React.useState(null);
  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };
  const formValues = {
    nameUsu: nombreUsu.campo,
    namePersona: nombres.campo,
    correoPersona: correoUsu.campo,
    telPersona: telefonoUsu.campo,
    mensPersona: mensajeUsu.campo,
    termPersona: terminos,
  };
  //cambiar estados
  const onChangeTerminos = (e) => {
    cambiarTermino(e.target.checked);
  };
  //
  const onChangeMensaje = (e) => {
    cambiarMensaje({ ...mensajeUsu, campo: e.target.value });
    console.log("mensaje", { ...mensajeUsu });
  };

  //validando que los inputs sean validos

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("valores", formValues);
    if (
      nombreUsu.valido === "true" &&
      nombres.valido === "true" &&
      correoUsu.valido === "true" &&
      telefonoUsu.valido === "true" &&
      terminos
    ) {
      //console.log('valores',formValues)
      //enviando la informacion al api
      axios.post('https://jsonplaceholder.typicode.com/posts',formValues)
      .then(res=>{
        console.log('respuesta del servidor xd)',res)
      })
      .catch(error => {
        console.log('error',error)
        })
      cambiarFormulario(true);
      cambiarUsuario({ campo: "", valido: null });
      cambiarNombre({ campo: "", valido: null });
      cambiarCorreo({ campo: "", valido: null });
      cambiarTelefono({ campo: "", valido: null });
      cambiarMensaje({ campo: "",valido:null });
      cambiarTermino(false);
    } else {
      cambiarFormulario(false);
    }
  };
  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <h3>{cabeceraFormulario.titulo}</h3>
          <div className="headplan__button"></div>
        </div>
        <main className="row">
          <form className="form__form" action="" onSubmit={onSubmit}>
            <InputReutilizable
              estado={nombreUsu}
              cambiarEstado={cambiarUsuario}
              tipo="text"
              label="Usuario"
              placeholder="usuario"
              name="usuario"
              leyendaError="4 letras como minimo y 16 como maximo"
              expresionRegular={expresiones.usuario}
              //valor={formValues}
            />
            <InputReutilizable
              estado={nombres}
              cambiarEstado={cambiarNombre}
              tipo="text"
              label="Nombre Completo"
              placeholder="nombre"
              name="nombre"
              leyendaError="4 letras como minimo"
              expresionRegular={expresiones.nombre}
            />
            <InputReutilizable
              estado={correoUsu}
              cambiarEstado={cambiarCorreo}
              tipo="email"
              label="Correo Electronico"
              placeholder="email@gmail.com"
              name="email"
              leyendaError="tiene que cumplir con el formato {frg@gmail.com}"
              expresionRegular={expresiones.correo}
            />
            <InputReutilizable
              estado={telefonoUsu}
              cambiarEstado={cambiarTelefono}
              tipo="number"
              label="Numero de Telefono"
              placeholder="telefono"
              name="email"
              leyendaError="solo acepta numeros"
              expresionRegular={expresiones.telefono}
            />
            <div className="form__form-textoArea">
              <LabelL htmlFor="consulta">Consulta</LabelL>
              <textarea name="consulta" onChange={onChangeMensaje}></textarea>
            </div>
            <div className="form__form-terminos">
              <label>
                <input
                  type="checkbox"
                  name="terminos"
                  id="terminos"
                  checked={terminos}
                  onChange={onChangeTerminos}
                />
                Acepto los Terminos y Condiciones
              </label>
            </div>

            {formularioValido === false && (
              <div className="form__form-error">
                <p>
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  <b>Error:</b>Por favor rellenear el formulario correctamente
                </p>
              </div>
            )}

            <div className="form__form-enviar">
              <button type="submit">Enviar</button>
              {formularioValido === true && (
                <p>Formulario enviado exitosamente</p>
              )}
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Formulario;
