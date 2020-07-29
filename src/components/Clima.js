import React from "react";
import PropTypes from "prop-types";

const Clima = ({ resultado }) => {
  const { main, name } = resultado;
  const kelvin = 273.15;
  if (!name) return null;
  return (
    <div className="card-panel white col s12">
      <h2 className="black-text">el clima en {name} es:</h2>
      <p className="temperatura">
        {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
      </p>
      <p>
        {" "}
        Temperatura Máxima:
        {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}{" "}
        <span>&#x2103;</span>
      </p>
      <p>
        {" "}
        Temperatura Miníma:
        {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}{" "}
        <span>&#x2103;</span>
      </p>
    </div>
  );
};

Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default Clima;
