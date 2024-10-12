import { useForm } from "../../hooks";

export const TodoAdd = ({onNewTodo}) => {
  const { description, formState, onInputChange, onResetForm } = useForm({
    description: "",
  });
  const onFormSubmit = (event)=>{
    event.preventDefault()
    if(description.length<=1){
      return;
    }
    const newTodo={
      id:new Date().getTime(),
      description:description,
      done:false,
    }
    onNewTodo(newTodo);
  }
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Que hay que hacer ? "
          className="form-control"
          value={description}
          name="description"
          onChange={onInputChange}
        />
        <button className="btn btn-outline-primary mt-2">Agregar</button>
      </form>
    </>
  );
};
