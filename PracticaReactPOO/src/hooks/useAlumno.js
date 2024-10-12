import { useState } from "react";

export const useAlumno = () => {
  const [inputs, setInputs] = useState({
    codigo: "",
    nombre: "",
    nota1: "",
    nota2: "",
    promedio: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  const [resultado, setResultado] = useState("");

  const calcularPromedio = () => {
    const promedio = (parseFloat(inputs.nota1) + parseFloat(inputs.nota2)) / 2;
    setInputs((prevInputs) => ({
      ...prevInputs,
      promedio: promedio.toString(),
    }));
    setResultado(promedio);
    // setInputs("")
  };
  return {
    inputs,
    handleInputChange,
    calcularPromedio,
    resultado,
  };
};
