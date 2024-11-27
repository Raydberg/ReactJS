export const ShowIncrement = ({increment}) => {
    console.log('me volvi a generar :( ')
  return (
    <button className="btn btn-outline-danger"
    onClick={()=> increment()}
    >
     
Incrementar

    </button>
  )
}
