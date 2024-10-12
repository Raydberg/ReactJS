import PropType from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { LoadingMenssage } from "./LoadingMenssage";

export const GifGrid = ({ category }) => {
  const { loading,images } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      <LoadingMenssage loading={loading}/>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropType.string.isRequired,
};
