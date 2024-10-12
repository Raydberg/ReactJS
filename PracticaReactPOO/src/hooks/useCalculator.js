import { useState } from "react";

export const useCalculator = () => {
    const [inputs, setInput] = useState({
        peso: "",
        estatura: "",
        IMC: "",
      });
      const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
      };
    
      const deleteInputs = () => {
        setInput({
          peso: "",
          estatura: "",
          IBM: "",
        });
      };
      const calcularIMC = () => {
        const IMC = Math.floor(inputs.peso / (inputs.estatura * 0.01) ** 2);
        setInput((prevInput) => ({
          ...prevInput,
          IMC: IMC.toString(),
        }));
      };
      return{
        inputs,handleInput,deleteInputs,calcularIMC
      }
}
