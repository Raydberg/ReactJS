import { useFilmacion } from "../../hooks/useFilmacion";
import { Card } from "../../common";
import { FilmacionDetails } from "./FilmacionDetails";
import { LayoutButton, LayoutLabel } from "../../layout";
export const FilmacionApp = () => {
  const { inputs, handleInpunts, borrarDatos, precioDolares } = useFilmacion();
  return (
    <Card>
      <div className="flex flex-col ">
        <LayoutLabel
          nameLabel="Codigo"
          name="codigo"
          value={inputs.codigo}
          onChange={handleInpunts}
        />
        <LayoutLabel
          nameLabel="Titulo"
          name="titulo"
          value={inputs.titulo}
          onChange={handleInpunts}
        />
        <LayoutLabel
          nameLabel="Duracion"
          name="duracion"
          type="number"
          value={inputs.duracion}
          onChange={handleInpunts}
        />
        <LayoutLabel
          nameLabel="Precio Soles"
          name="precio"
          value={inputs.precio}
          onChange={handleInpunts}
        />
        <div className="flex">
          <LayoutButton onClick={precioDolares} title="Procesar" />
          <LayoutButton onClick={borrarDatos} title="Borrar" />
        </div>
      </div>
      <FilmacionDetails {...inputs} />
    </Card>
  );
};
