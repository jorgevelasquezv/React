import React from 'react';
import { useDispatch } from 'react-redux';
import { borrarRegistro } from '../actions/nominaActions';

const Element = ({ data }) => {
    const { fecha, pago, id } = data;

    const dispatch = useDispatch();

    const date = fecha.toDate();

    const fechaFormato = date.toLocaleDateString();

    const handleDelete = async () => {
        dispatch(borrarRegistro(id));
    };
    return (
        <>
            <td>{fechaFormato}</td>
            <td>$ {pago}</td>
            <td>
                <button className="btn red" onClick={handleDelete}>
                    <i className="material-icons">delete_forever</i>
                </button>
            </td>
        </>
    );
};

export default Element;
