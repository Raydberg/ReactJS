import { useState } from "react";
import { LayoutLabel } from "../../layout/LayoutLabel";
import { LayoutButton } from "../../layout/LayoutButton";
import { Card } from "../../common/Card";

export const TrabajadorApp = () => {
  const [inputs, setInputs] = useState({
    id: "",
    nombre: "",
    horasTrabajadas: "",
    tarifaHoraria: "",
    sueldoBruto: "",
    descuento: "",
  });
  const resetInputs = () => {
    setInputs({
      id: "",
      nombre: "",
      horasTrabajadas: "",
      tarifaHoraria: "",
      sueldoBruto: "",
      descuento: "",
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const calculos = () => {
    const sueldoBruto = inputs.horasTrabajadas * inputs.tarifaHoraria;
    const descuento =
      sueldoBruto < 4500
        ? sueldoBruto * 0.12
        : sueldoBruto < 6500
        ? sueldoBruto * 0.14
        : sueldoBruto * 0.16;
    setInputs((prevInput) => ({
      ...prevInput,
      sueldoBruto: sueldoBruto.toString(),
      descuento: descuento.toString(),
    }));
  };

  return (
    <Card>
      <div className="flex flex-col ">
        <LayoutLabel
          nameLabel="Id"
          name="id"
          value={inputs.id}
          onChange={handleInputChange}
        />
        <LayoutLabel
          nameLabel="Nombre"
          name="nombre"
          value={inputs.nombre}
          onChange={handleInputChange}
        />
        <LayoutLabel
          nameLabel="Horas Trabajadas"
          name="horasTrabajadas"
          value={inputs.horasTrabajadas}
          onChange={handleInputChange}
        />
        <LayoutLabel
          nameLabel="Tarifa Horaria"
          name="tarifaHoraria"
          value={inputs.tarifaHoraria}
          onChange={handleInputChange}
        />
        <div className="flex">
          <LayoutButton onClick={calculos} title="Procesar" />
          <LayoutButton onClick={resetInputs} title="Borrar" />
        </div>
      </div>
      <div className="flex gap-3"></div>
      <div className="border-2 border-solid border-red-100">
        <p>Id: {inputs.id}</p>
        <p>Nombre : {inputs.nombre}</p>
        <p>Horas Trabajadas : {inputs.horasTrabajadas}</p>
        <p>Tarifa Horaria : {inputs.tarifaHoraria}</p>
        <p>Sueldo Bruto: {inputs.sueldoBruto}</p>
        <p>Descuento: {inputs.descuento}</p>
      </div>
    </Card>
  );
};
