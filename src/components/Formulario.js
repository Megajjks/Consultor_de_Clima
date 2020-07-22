import React, { useState } from "react";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [error, setError] = useState(false);

  //Extrayendo campos del state
  const { ciudad, pais } = busqueda;

  //funciones para escuhar los cambios de los inputs
  const handleChange = (e) => {
    //actulizar el state
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };
  //cuando el usuario le de submit al form
  const handleSubmit = (e) => {
    //validar
    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //pasarlo al componente principal
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className="red darken-4 error">Todos los campos son obligatorios</p>
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad"> Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select name="pais" value={pais} onChange={handleChange}>
          <option value="">--- Selecione un país ---</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais"> Pais: </label>
      </div>
      <div className="input-field col s12">
        <button
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
        >
          Buscar Clima
        </button>
      </div>
    </form>
  );
};

export default Formulario;
