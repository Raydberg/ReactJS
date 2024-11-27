import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const getImages = async () => {
    setLoading(true);
    try {
      const newImages = await getGifts(category);
      setImages(newImages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getImages();
  }, [category]);
  return {
    images,
    loading,
  };
};
