import React from 'react';

const TablaContactos = ({ contactos, dispatch }) => {
    

    const handleDelete = (id) => {
        const actionDelete = {
            type: 'delete',
            payload: id,
        };
        dispatch(actionDelete);
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Numero</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {contactos.map((contacto) => {
                    const finalId = contacto.id.split('-');
                    return (
                        <tr key={contacto.id}>
                            <th>{finalId[0]} </th>
                            <td>{contacto.nombre}</td>
                            <td>{contacto.numero}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(contacto.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TablaContactos;
