import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const FormularioAdd = ({ dispatch }) => {
  const [data, setData] = useState({
    nombre: "",
    numero: "",
  });
  const { nombre, numero } = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const actionAdd = {
    type: "add",
    payload: { id: uuid(), nombre, numero },
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (nombre && numero) {
      dispatch(actionAdd);
      setData({
        nombre: "",
        numero: "",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <div className="container">
          <label className="mx-1 d-grid gap-2">
            Nombre:{" "}
            <input
              onChange={handleChange}
              name="nombre"
              value={nombre}
              type="text"
              className="form-control"
              autoComplete="off"
              autoFocus
            />
          </label>
          <label className="mx-1 d-grid gap-2">
            Numero:{" "}
            <input
              onChange={handleChange}
              name="numero"
              value={numero}
              type="text"
              className="form-control"
              autoComplete="off"
            />
          </label>
          <div className="mx- 1 d-grid gap-2">
            <button className="btn bg-info mt-2" type="submit">
              Agregar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormularioAdd;
