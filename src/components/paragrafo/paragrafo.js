import React from "react";
import "./paragrafo.css";

const ParagrafoColorido = (props) => {
  return (
    <p style={{ color: props.corTexto, textTransform: props.upper }}>
      {props.paragrafo}
    </p>
  );
};

export default ParagrafoColorido;
