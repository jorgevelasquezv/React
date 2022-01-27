import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearRegistro } from '../actions/nominaActions';

const FormApp = () => {
    const dispatch = useDispatch();

    const [viewForm, setViewForm] = useState(false);
    const [cantidadPago, setCantidadPago] = useState({
        horas: '',
        precioHora: '',
    });
    const { horas, precioHora } = cantidadPago;

    const habilitarBoton = () => {
        return horas > 0 && precioHora > 0 ? false : true;
    };

    const handleAdd = () => {
        setViewForm(!viewForm);
    };
    const handleChange = (e) => {
        setCantidadPago({ ...cantidadPago, [e.target.name]: e.target.value });
    };
    const handleSave = () => {
        const cantidadFinal = horas * precioHora;
        dispatch(crearRegistro(cantidadFinal));
        setCantidadPago({
            horas: '',
            precioHora: '',
        });
    };
    return (
        <div>
            <button className="btn btn-success" onClick={handleAdd}>
                {!viewForm ? 'Agregar' : 'Cerrar'}
            </button>
            {viewForm && (
                <div className="animate__animated animate__fadeInDown">
                    <label htmlFor="icon_prefix1" className="form-label mt-3">
                        Pago por hora
                    </label>
                    <div className="input-group mb-3 ">
                        <input
                            type="number"
                            className="form-control"
                            id="icon_prefix1"
                            aria-describedby="basic-addon3"
                            value={precioHora}
                            onChange={handleChange}
                            name="precioHora"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <label htmlFor="icon_prefix2" className="form-label">
                            Horas trabajadas
                        </label>
                        <div className="input-group mb-3 ">
                            <input
                                id="icon_prefix2"
                                aria-describedby="basic-addon3"
                                className="form-control"
                                type="number"
                                value={horas}
                                onChange={handleChange}
                                name="horas"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        disabled={habilitarBoton()}
                        onClick={handleSave}
                    >
                        Calcular y Guardar
                    </button>
                </div>
            )}
        </div>
    );
};

export default FormApp;
