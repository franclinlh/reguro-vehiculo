import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";

const InputReutilizable = ({
  estado,
  cambiarEstado,
  tipo,
  label,
  placeholder,
  name,
  leyendaError,
  expresionRegular,
}) => {
  const onChange = (e) => {
    //obtenemos las propiedades del estado con ...estado
    //luego le decimo a la propiedad campo que sea igual
    // a lo que tenemos en el input
    cambiarEstado({ ...estado, campo: e.target.value });
    console.log("evento", e.target.value);
    console.log("propiedades del estado", { ...estado });
  };
  
  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        //estamos comprobando el contenido
        cambiarEstado({ ...estado, valido: "true" }); //aca no acepta booleano por eso lo coloco en comillas
        console.log("input correcto");
      } else {
        cambiarEstado({ ...estado, valido: "false" });
        console.log("input incorrecto");
      }
    }
  };
  return (
    <div className="form__form-ele">
      <LabelL htmlFor={name} valido={estado.valido}>
        {label}
      </LabelL>
      <div className="inp">
        <InputF
          type={tipo}
          placeholder={placeholder}
          id={name}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
        />
        <IconoValidacion 
        icon={estado.valido==='true' ? faCheckCircle: faTimesCircle} 
        valido={estado.valido}
        />
      </div>
      <LeyendaErr className="form__form-p" valido={estado.valido}>
        {leyendaError}
      </LeyendaErr>
    </div>

  );
};
//validaciones
const IconoValidacion = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  //opacity: 0;
  ${(props) =>
    props.valido === "false" &&
    css`
      opacity:1;
      color:#f66060;
    `}
    ${(props) =>
        props.valido === "true" &&
        css`
          opacity:1;
          color:rgb(76, 165, 76);
        `}
`;
const InputF = styled.input`
  width: 25rem;
  background: $blanco;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;
  &:focus {
    border: 3px solid #0075ff;
    outline: none;
    box-shadow: 3px 0 30px rgba(163, 163, 163, 0.4);
  }
  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid transparent;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid #f66060 !important;
    `}
`;
const LabelL = styled.label`
  display: block;
  font-weight: $bold;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;

  ${(props) =>
    props.valido === "false" &&
    css`
      color: #f66060;
    `}
`;
const LeyendaErr = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: $rojo;
  display: none;
  ${(props) =>
    props.valido === "true" &&
    css`
      display: none;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      display: block;
      color: #f66060;
    `}
`;
export {LabelL};
export default InputReutilizable;
