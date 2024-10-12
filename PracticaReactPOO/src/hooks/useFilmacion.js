import { useState } from "react";

export const useFilmacion = () => {
  const [inputs, setInputs] = useState({
    codigo: "",
    titulo: "",
    duracion: "",
    precio: "",
  });
  const borrarDatos = () => {
    setInputs({
      codigo: "",
      titulo: "",
      duracion: "",
      precio: "",
    });
  };
  const handleInpunts = (e) => {
    const { name, value } = e.target;
    setInputs((prevImputs) => ({
      ...prevImputs,
      [name]: value,
    }));
  };
  const precioDolares = () => {
    const precioDolares = inputs.precio * 3.38;

    setInputs((prevInput) => ({
      ...prevInput,
      precio: precioDolares.toString(),
    }));
  };
  return {
    precioDolares,
    handleInpunts,
    borrarDatos,
    inputs
  };
};
