import React from "react";
import useLetras from "../hook/useLetras";
import Alerta from "./Alerta";
import Formulario from "./Formulario";
import Letra from "./Letra";
import Spinner from "./Spinner";

const AppLetra = () => {
  const { alerta, letra, cargando } = useLetras();

  return (
    <>
      <header>Busqueda de letras de canciones</header>
      <Formulario />
      <main>
        {alerta ? (
          <Alerta>{alerta}</Alerta>
        ) : letra ? (
          <Letra />
        ) : cargando ? (
          <Spinner />
        ) : (
          <p className="text-center">Busca letra de tus artistas favoritos</p>
        )}
      </main>
    </>
  );
};

export default AppLetra;
