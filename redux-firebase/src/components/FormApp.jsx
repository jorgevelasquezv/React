import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearRegistro } from '../actions/nominaActions';

const FormApp = () => {
    const dispatch = useDispatch();

    const [viewForm, setViewForm] = useState(false);
    const [cantidadPago, setCantidadPago] = useState({
        horas: 0,
        precioHora: 0,
    });
    const { horas, precioHora } = cantidadPago;
    const handleAdd = () => {
        setViewForm(!viewForm);
    };
    const handleChange = (e) => {
        setCantidadPago({ ...cantidadPago, [e.target.name]: e.target.value });
    };
    const handleSave = (e) => {
        const cantidadFinal = horas * precioHora;
        dispatch(crearRegistro(cantidadFinal));
    };
    return (
        <div>
            <button className="btn green" onClick={handleAdd}>
                {viewForm ? 'Agregar' : 'Cerrar'}
            </button>
            {viewForm && (
                <>
                    <input
                        type="text"
                        placeholder="Ingresa cantidad de pago por hora"
                        value={precioHora}
                        onChange={handleChange}
                        name="precioHora"
                    />
                    <input
                        type="text"
                        placeholder="Ingresa cantidad de horas"
                        value={horas}
                        onChange={handleChange}
                        name="horas"
                    />
                    <button className="btn purple" onClick={handleSave}>
                        Calcular y Guardar
                    </button>
                </>
            )}
        </div>
    );
};

export default FormApp;
