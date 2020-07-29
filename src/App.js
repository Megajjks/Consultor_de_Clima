import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [consultar, setConsultar] = useState(false);
  const { ciudad, pais } = busqueda;
  const [response, setResponse] = useState({});
  const [error, setError] = useState(false);

  const fetchApi = async () => {
    const appId = "53c1182c28d777347bf034352086a932";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    setResponse(resultado);
    //detectar si hubo un error al momento de consultar
    if (resultado.cod === "404") {
      setError(true);
    } else {
      setError(false);
    }
  };

  useEffect(() => {
    if (consultar) {
      fetchApi();
    }
    setConsultar(false);
    //eslint-disable-next-line
  }, [consultar]);

  let component;
  if (error) {
    component = <Error mensaje="No hay resultado" />;
  } else {
    component = <Clima resultado={response} />;
  }

  return (
    <Fragment>
      <Header titulo="Clima Reactjs" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
