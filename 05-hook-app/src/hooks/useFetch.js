import { useState, useEffect } from "react";
export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: null,
  });
  const getFetch = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
   console.log(data.name);
   setState(data.name)
   console.log(state);
   
       
  };
  useEffect(() => {
    getFetch();
  }, []);
 
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
