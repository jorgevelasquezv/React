/* 
{
    id: "jdhnnewn1223knl123", 
    fecha: "1/12/2021",
    pago: 450.00
}

 */

import { db } from '../firebase/config-firebase';
import { collection, doc, addDoc, getDoc, deleteDoc } from 'firebase/firestore';
import { types } from '../types/types';

export const crearRegistro = (pagos) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const datos = {
            fecha: new Date(),
            pago: pagos,
        };
        const referencia = await addDoc(
            collection(db, `${uid}/nominas/nomina/`),
            datos
        );

        const document = await getDoc(referencia)
        const id = document.id
        const data = await document.data()
        const { fecha, pago} = data
        dispatch(crear({ id, fecha, pago }));
        
    };
};

export const leerRegistros = (data) => {
    return {
        type: types.nominaRead,
        payload: data
    }
}

export const crear = (data) => {
    return { 
        type: types.nominaAdd,
        payload: data
    }
}

export const borrarRegistro = (id) => {
    return async (dispatch, getState) => { 
        const {uid} = getState().auth;
        await deleteDoc(doc(db, `${uid}/nominas/nomina/${id}`));
        dispatch(borrar(id))
    }
}

export const borrar = (id) => {
    return { 
        type: types.nominaDelete,
        payload: id
    }
}

export const limpiar = () => {
    return {
        type: types.nominaClean
    }
}