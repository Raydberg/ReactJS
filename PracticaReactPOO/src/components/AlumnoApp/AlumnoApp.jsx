import { LayoutLabel } from "../../layout/LayoutLabel";
import { useAlumno } from "../../hooks/useAlumno";
import { AlumnoDetails } from "./AlumnoDetails";

export const AlumnoApp = () => {
  const { inputs, handleInputChange, calcularPromedio, resultado } =
    useAlumno();
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      <LayoutLabel
        nameLabel="Codigo"
        name="codigo"
        value={inputs.codigo}
        onChange={handleInputChange}
      />
      <LayoutLabel
        nameLabel="Nombre"
        name="nombre"
        value={inputs.nombre}
        onChange={handleInputChange}
      />
      <LayoutLabel
        nameLabel="Nota 1"
        name="nota1"
        type="number"
        value={inputs.nota1}
        onChange={handleInputChange}
      />
      <LayoutLabel
        nameLabel="Nota 2"
        name="nota2"
        type="number"
        value={inputs.nota2}
        onChange={handleInputChange}
      />
      <button onClick={calcularPromedio}>Procesar</button>
      <AlumnoDetails resultado={resultado} {...inputs} />
    </div>
  );
};
