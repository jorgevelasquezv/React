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
            <button className="btn green" onClick={handleAdd}>
                {!viewForm ? 'Agregar' : 'Cerrar'}
            </button>
            {viewForm && (
                <div className="animate__animated animate__fadeInDown">
                    <div className="input-field col s12">
                        <label htmlFor="icon_prefix1">Pago por hora</label>
                        <input
                            id="icon_prefix1"
                            type="number"
                            value={precioHora}
                            onChange={handleChange}
                            name="precioHora"
                        />
                    </div>
                    <div className="input-field col s12">
                        <label htmlFor="icon_prefix2">Horas trabajadas</label>
                        <input
                            id="icon_prefix2"
                            type="number"
                            value={horas}
                            onChange={handleChange}
                            name="horas"
                        />
                    </div>
                    <button
                        className="btn purple"
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
