import { useCounter } from "../hooks"

export const Memorize = () => {
   const {counter,increment} =useCounter(10)
  return (
    <>
    <h1>Counter <small>{counter}</small></h1>
     <hr />

     <button className="btn btn-outline-success"
     
     onClick={()=>increment()}>
        +1
     </button>

    </>
  )
}
