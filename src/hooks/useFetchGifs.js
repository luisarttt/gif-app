import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setimages] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getGifs(category)
    .then(gifs => {
        setimages(gifs);
        setisLoading(false);
    });
  }, []);

  return {
    images,
    isLoading
  };
};
