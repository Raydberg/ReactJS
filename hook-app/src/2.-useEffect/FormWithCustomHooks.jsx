import { useForm } from "../hooks/useForm";
export const FormWithCustomHooks = () => {
  const { formState, onInputChange ,onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario Custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="name@gmail"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="paswword"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-outline-primary mt-2">Borrar</button>
    </>
  );
};
