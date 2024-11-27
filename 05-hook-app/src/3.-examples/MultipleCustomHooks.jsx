import { useCounter, useFetch } from "../hooks"

export const MultipleCustomHooks = () => {
    const {counter,decrement,increment} = useCounter(4)  
  
   const {data,hasError,isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/8`)
    console.log(data)
  return (
    <>
    <h1>Informacion de Pokemon</h1>
    <hr />
    {isLoading && <p>Cargando</p>}
    <h2>{data?.name}</h2>

    <button onClick={decrement} className="btn btn-outline-primary mt-2">Anterior</button>
    <button onClick={increment} className="btn btn-outline-success mt-2">Siguiente</button>

    </>


    
  )
}
