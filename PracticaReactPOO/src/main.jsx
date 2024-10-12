import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FilmacionApp } from "./components/FilmacionApp/FilmacionApp";
import { AlumnoApp } from "./components/AlumnoApp/AlumnoApp";
import { TodoApp } from "./components/TodoApp/TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
